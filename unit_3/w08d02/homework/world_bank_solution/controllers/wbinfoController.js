const express = require('express'),
    wbinfo  = express.Router();

const Wbinfo = require('../models/wbinfo.js');

// get count of all documents in collection
wbinfo.get('/count', (req, res) => {
	Wbinfo.count( (err, count) => {
    if ( err ) { console.log ( 'there is an error in wbinfo.get /count' , err );  }
		res.send(count.toString());
	});
});

// get all region names, excluding duplicates
wbinfo.get('/uniqueRegions', (req, res) => {
	Wbinfo.distinct('region', (err, info) => {
    if ( err ) { console.log ('there is an error in wbinfo.get /uniqueRegions' , err ); }
		res.send(info);
	});
});

// only get regions that match the region name sent through in the uri
wbinfo.get('/byName/:name', (req, res) => {
	Wbinfo.find({ region: req.params.name }, (err, info) => {
    if ( err ) { console.log ('there is an error in wbinfo.get /byName/:name' , err ); }
		res.send(info);
	});
});

// index of all records for testing after seeding (redirected from seed route)
// or to get ids for cURL operations
wbinfo.get('/', (req, res) => {
	Wbinfo.find(function(err, data) {
    if ( err ) { console.log ('there is an error in wbinfo.get /' , err ); }
		res.send(data);
	});
});

// create record
wbinfo.post('/', (req, res) => {
	Wbinfo.create(req.body, (err, info) => {
    if ( err ) { console.log ('there is an error in wbinfo.post /' , err ); }
    console.log( 'created record:' , info )
		res.send(info);
	});
});

//extra/hungry for more: update route
wbinfo.put ( '/:id' ,  ( req , res ) => {
  Wbinfo.findByIdAndUpdate (req.params.id, req.body , { new: true } ,  ( err , info ) => {
    if ( err ) { console.log ( 'there is an error in wbinfo.put /:id' , err );
    } else {
      res.json( info );
    }
  });
});

//extra/hungry for more: delete route
wbinfo.delete ( '/:id' ,  ( req , res ) => {
  Wbinfo.findByIdAndRemove (req.params.id ,  ( err , info ) => {
    if ( err ) {  res.send('there is an error in wbinfo.delete /:id ' + err);
      } else {
        res.json( info );
    }
  });
});

module.exports = wbinfo;
