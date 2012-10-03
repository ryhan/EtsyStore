/* 
 * StoreController.js 
 *
 * Angular.js controller
 * Written by Ryhan Hassan
 */

function StoreCtrl( $scope )
{
	$scope.stores = [ AMYGAINES, ROBOTSAREAWESOME, PAINTINGWELL ];

}

// Load in some fake data

var AMYGAINES = new Store( 
	'Amy Gaines', 				// Store Name
	'img/knitted/header.jpg',	// Header Image
	new Inventory([				// Inventory
			new Item( 'Knit Tree Ornaments', 20, 1, 'img/knitted/1.jpg'),
			new Item( 'Knit Reindeer', 30, 1, 'img/knitted/2.jpg'),
			new Item( 'Knit Chicken and Chicks', 30, 1, 'img/knitted/3.jpg'),
			new Item( 'Knit Bear and Mushroom', 30, 1, 'img/knitted/4.jpg'),
			new Item( 'Knit Baby Seal', 20, 1, 'img/knitted/5.jpg'),

			new Item( 'Knit Robot', 40, 1, 'img/knitted/6.jpg'),
			new Item( 'Knit Pengion', 40, 1, 'img/knitted/7.jpg'),
			new Item( 'Knit Turtle', 30, 2, 'img/knitted/8.jpg'),
			new Item( 'Assorted Knit Animals', 30, 4, 'img/knitted/9.jpg')
		])
	);

var ROBOTSAREAWESOME = new Store( 
	'Robots Are Awesome', 		// Store Name
	'img/robots/header.jpg',	// Header Image
	new Inventory([				// Inventory
			new Item( 'Robot Wedding Cake', 80, 3, 'img/robots/1.jpg'),
			new Item( 'Robot Stands', 110, 2, 'img/robots/2.jpg'),
			new Item( 'Robot Photo Sign', 45, 1, 'img/robots/3.jpg'),
			new Item( 'Garden Robot', 45, 3, 'img/robots/4.jpg'),
			new Item( 'Robot Birthday Cake', 40, 2, 'img/robots/5.jpg')
		])
	);


var ROBOTSAREAWESOME = new Store( 
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

var PAINTINGWELL = new Store( 
	'Painting Well', 		// Store Name
	'img/painting/header.jpg',	// Header Image
	new Inventory([				// Inventory
			new Item( 'Robot Wedding Cake', 80, 3, 'img/painting/1.jpg'),
			new Item( 'Robot Stands', 110, 2, 'img/painting/2.jpg'),
			new Item( 'Robot Photo Sign', 45, 4, 'img/painting/3.jpg'),
			new Item( 'Garden Robot', 45, 3, 'img/painting/4.jpg'),
			new Item( 'Robot Birthday Cake', 40, 2, 'img/painting/5.jpg')
		])
	);