//___________________
//Dependencies
//___________________
//require express so we can use router
var express     = require ( 'express' );
var products    = express.Router();

//___________________
//Models
//___________________
//get access to the Product model
var Product     = require ( '../models/products' );

//___________________
//See json Route
//___________________
products.get ( '/json' , ( req , res ) => {
  Product.find( ( err, products ) => {
    res.send ( products );
  });
});

//___________________
//7 Restful Routes
//___________________
// Index  : GET    '/products'          1/7
// Show   : GET    '/products/:id'      2/7
// New    : GET    '/prodcuts/new'      3/7
// Create : POST   '/products'          4/7
// Edit   : GET    '/products/:id/edit' 5/7
// Update : PUT    '/products/:id'      6/7
// Delete : DELETE '/products/:id'      7/7


// Index  : GET    '/products'          1/7
products.get( '/' , ( req , res ) => {
  Product.find( {} , ( err , products ) => {
    if (err){ console.log ( err ); }
    res.render ( './products/index.ejs', { products } );
  });
});

// New    : GET    '/products/new'      3/7
// Order matters! must be above /prodcuts/:id or else this route will never get hit
products.get ( '/new' , ( req , res ) => {
  res.render ( './products/new.ejs' );
});

// Show   : GET    '/products/:id'      2/7
products.get ( '/:id' , ( req , res ) => {
  Product.findById( req.params.id , ( err , product ) => {
    if (err) { console.log ( err ); }
    res.render ( './products/show.ejs' , { product : product } );
  });
});

// Create : POST   '/products'          4/7
products.post ( '/' , ( req , res ) => {
  Product.create( req.body , ( err , product ) => {
    if ( err ) { res.send ( err ) ; } else {
      res.redirect( '/products/'+product.id );
    }
  });
});

// Edit   : GET    '/products/:id/edit' 5/7
products.get ( '/:id/edit' , ( req , res ) => {
  Product.findById( req.params.id , ( err , product ) => {
        if ( err ) { console.log ( err ); }
        res.render ( './products/edit.ejs' , { product : product }
      );
  });
});

// Update : PUT    '/products/:id'      6/7
products.put( '/:id' , ( req , res ) => {
  Product.findByIdAndUpdate( req.params.id, req.body , { new : true }, ( err , product ) => {
    if ( err ) { console.log( err ); }
    res.redirect ( '/products/' + product.id );
  });
});

// Delete : DELETE '/products/:id'      7/7
products.delete (  '/:id' , ( req , res ) => {
  Product.findByIdAndRemove( req.params.id , ( err , product ) => {
    if ( err ) { console.log( err ); }
    res.redirect ( '/products' );
  });
});

//___________________
//Buy Route
//___________________

products.put ( '/:id/buy' , ( req , res ) => {
  Product.findByIdAndUpdate( req.params.id , {  $inc : { qty : -1 } }, ( err , product ) => {
    if ( err ) { console.log( err ); }
    res.redirect( 'back' );
  });
});



//___________________
//Seed Route - Vist ONCE to populate database
//___________________
products.get( '/seed/newproducts' , ( req, res ) => {

  var newProducts = [
		{
			name: "Beans",
			description: "A small pile of beans. Buy more beans for a big pile of beans.",
	        img: "http://www.rodalesorganiclife.com/sites/rodalesorganiclife.com/files/styles/slideshow-desktop/public/navybeans_peangdao_1100.jpg?itok=QB7fl971",
			price: 5,
			qty: 99
		}, {
			name: "Bones",
			description: "It's just a bag of bones.",
    	    img: "http://bluelips.com/prod_images_large/bones1.jpg",
			price: 25,
			qty: 0
	  }, {
			name: "Bins",
			description: "A stack of colorful bins for your beans and bones.",
    	    img: "http://www.clipartbest.com/cliparts/9cz/rMM/9czrMMBcE.jpeg",
			price: 7000,
			qty: 1
	  }
	];

	Product.create( newProducts , ( err, product ) => {
      if ( err ) { console.log( err ); }
		  console.log( "SEED: NEW PRODUCTS CREATED!" );
		  res.redirect( '/products' );
	});
});

//___________________
//ALTERNATE Seed Route - Vist ONCE to populate database
//___________________
var productSeeds = require ( '../models/seed.js');
products.get ( '/seed/newproducts/viaseedfile' , ( req, res ) => {
  Product.insertMany ( productSeeds, ( err , products ) =>{
    if (err) { console.log ( err ); } else {
     res.send (products );
    }
  });
});

//___________________
//Mistakes happen! Drop Database - Vist ONCE to drop your database. WARNING! YOU CANNOT UNDO THIS!
//___________________
products.get( '/dropdatabase/cannotundo/areyoursure/reallysure/okthen' , ( req , res ) => {
  Product.collection.drop();
  res.send( 'You did it! You dropped the database!' );
});

//___________________
//Module Exports - access this file in server.js
//___________________
//Export router AND require it in server.js Step 3/3
//Note all three need to be working in order to get server runnning
module.exports = products;
