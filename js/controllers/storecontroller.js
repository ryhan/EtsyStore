/* 
 * StoreController.js 
 *
 * Angular.js controller
 * Written by Ryhan Hassan
 */

function StoreCtrl( $scope )
{
	$scope.stores = [ AMYGAINES, ROBOTSAREAWESOME ];

}

// Fake Data

var AMYGAINES = new Store( 
	'Amy Gaines', 				// Store Name
	'img/knitted/header.jpg',	// Header Image
	new Inventory([				// Inventory
			new Item( 'Knit Tree Ornaments', 6, 1, 'img/knitted/1.jpg'),
			new Item( 'Knit Reindeer', 3, 1, 'img/knitted/2.jpg'),
			new Item( 'Knit Chicken and Chicks', 3, 1, 'img/knitted/3.jpg'),
			new Item( 'Knit Bear and Mushroom', 3, 1, 'img/knitted/4.jpg'),
			new Item( 'Knit Baby Seal', 2, 1, 'img/knitted/5.jpg')
		])
	);

var ROBOTSAREAWESOME= new Store( 
	'Robots Are Awesome', 		// Store Name
	'img/robots/header.jpg',	// Header Image
	new Inventory([				// Inventory
			new Item( 'Robot Wedding Cake', 80, 3, 'img/robots/1.jpg'),
			new Item( 'Robot Stands', 110, 2, 'img/robots/2.jpg'),
			new Item( 'Robot Photo Sign', 45, 4, 'img/robots/3.jpg'),
			new Item( 'Garden Robot', 45, 3, 'img/robots/4.jpg'),
			new Item( 'Robot Birthday Cake', 40, 2, 'img/robots/5.jpg')
		])
	);