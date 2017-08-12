const express = require('express');
const Author = require('../models/authors.js');
const Article = require('../models/articles.js');
const router = express.Router();

router.get('/', (req, res)=>{
  console.log(req.session, ' this is req.session in the the route /authors')
	Author.find({}, (err, foundAuthors)=>{
		res.render('authors/index.ejs', {
			authors: foundAuthors
		});
	})
});

router.post('/', (req, res)=>{
	Author.create(req.body, (err, createdAuthor)=>{
		res.redirect('/authors');
	});
});

router.get('/new', (req, res)=>{
	res.render('authors/new.ejs');
});

router.get('/:id', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});

router.delete('/:id', (req, res)=>{
	Author.findByIdAndRemove(req.params.id, (err, foundAuthor)=>{
		const articleIds = [];
		for (let i = 0; i < foundAuthor.articles.length; i++) {
			articleIds.push(foundAuthor.articles[i]._id);
		}
		Article.remove(
			{
				_id : {
					$in: articleIds
				}
			},
			(err, data)=>{
				res.redirect('/authors');
			}
		);
	});
});

router.get('/:id/edit', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/edit.ejs', {
			author: foundAuthor
		});
	});
});

router.put('/:id', (req, res)=>{
	Author.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/authors');
	});
});

module.exports = router;
