var express = require('express'),
    router  = express.Router();

var Wbinfo = require('../models/wbinfo.js');

// get count of all documents in collection
router.get('/count', (req, res) => {
	Wbinfo.count(function(err, count) {
		res.send(count.toString());
	});
});

// get all region names excluding duplicates
router.get('/uniqueRegions',  (req, res) => {
	Wbinfo.distinct('region', (err, info) =>{
		res.send(info);
	});
});

// only get regions that match the region name sent through in the uri
router.get('/byName/:name', function(req, res) {
	Wbinfo.find({ region: req.params.name }, function(err, info) {
		res.send(info);
	});
});

// index of all records for testing after seeding (redirected from seed route)
// or to get ids for cURL operations
router.get('/', function(req, res) {
	Wbinfo.find(function(err, data) {
		res.send(data);
	});
});

// create record
router.post('/', function(req, res) {
	Wbinfo.create(req.body, function(err, info) {
		res.send(info);
	});
});

module.exports = router;
