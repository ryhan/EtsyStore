/* 
 * constructors.js 
 *
 * Store, Inventory, and Item constructors.
 * Written by Ryhan Hassan
 */

/**
 * @constructor
 * @param {string} storeName Name of the store.
 * @param {string} imageURL Path to a relevant image.
 */
var Store = function( storeName, imageURL , inventory)
{
	// Set the name of the store. Default to 'New Store'.
	this.name = ( storeName || 'New Store' );

	// Set the URL of a descriptive image of the store.
	this.imageURL = ( imageURL  || '' );

	// Create an inventory object for the store.
	this.inventory = ( inventory || new Inventory() );

	// Make this store active
	this.active = true;

};

/**
 * @constructor
 * @param {Array} items Array of items
 */
var Inventory = function( items )
{
	// Load in items into an inventory. Default to an empty array.
	this.items = ( items || new Array() );

	this.earnings = function()
	{
		var sum = function( a, b ){ return a + b; };
		return _.reduce( _.pluck( this.items, 'earnings'), sum);
	};
};

/**
 * Sell a certain number of the current item.
 * @param {Object} item The item being added to the inventory
 */
Inventory.prototype.addItem = function ( item )
{
	this.items.push( item );
};

/**
 * @constructor
 * @param {string} itemName Name of an item.
 * @param {number} itemPrice Cost of one item in dollars.
 * @param {integer} quantity Number of items available for sale.
 * @param {string} imageURL Path to a relevant image.
 */
var Item = function( itemName, itemPrice, quantity, imageURL)
{
	// Set the name of an item. Default to 'New Item'.
	this.name = ( itemName || 'New Item' );

	// Set the dollar price of an item. Default to $0.
	this.price = ( itemPrice || 0 );

	// Set the quantity of this item that is available. Default to 1.
	this.quantity = ( quantity || 1 );

	// Set the URL of a descriptive image of the item.
	this.imageURL = ( imageURL || '' );

	// Track the number of this item that has been already sold.
	this.soldCount = 0;

	// Track how much this item has earned us.
	this.earnings = 0;

	// Make this item active
	this.active = true;

};

/**
 * Buy a certain number of the current item.
 * @param {integer} count The number of items requested to be sold.
 * @returns {boolean} Whether the transaction went through.
 */
Item.prototype.buy = function( count )
{
	// Default to 1 if no count is specified.
	count = ( count || 1 );

	if ( this.quantity < count )
	{
		return false;
	}
	else
	{
		this.quantity -= count;
		this.soldCount += count;
		this.earnings += ( count * this.price );

		if (this.quantity == 0)
		{
			this.active = false;
		}

		return true;
	}
};