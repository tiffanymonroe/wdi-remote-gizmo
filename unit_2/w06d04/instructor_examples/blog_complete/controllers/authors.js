var express = require('express');
var Author = require('../models/authors.js');
var Article = require('../models/articles.js');
var router = express.Router();

router.get('/', function(req, res){
	Author.find({}, function(err, foundAuthors){
		res.render('authors/index.ejs', {
			authors: foundAuthors
		});
	})
});

router.post('/', function(req, res){
	Author.create(req.body, function(err, createdAuthor){
		res.redirect('/authors');
	});
});

router.get('/new', function(req, res){
	res.render('authors/new.ejs');
});

router.get('/:id', function(req, res){
	Author.findById(req.params.id, function(err, foundAuthor){
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});

router.delete('/:id', function(req, res){
	Author.findByIdAndRemove(req.params.id, function(err, foundAuthor){
		var articleIds = [];
		for (var i = 0; i < foundAuthor.articles.length; i++) {
			articleIds.push(foundAuthor.articles[i]._id);
		}
		Article.remove(
			{
				_id : {
					$in: articleIds
				}
			},
			function(err, data){
				res.redirect('/authors');
			}
		);
	});
});

router.get('/:id/edit', function(req, res){
	Author.findById(req.params.id, function(err, foundAuthor){
		res.render('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});

router.put('/:id', function(req, res){
	Author.findByIdAndUpdate(req.params.id, req.body, function(){
		res.redirect('/authors');
	});
});

module.exports = router;
