const express = require('express');
const router = express.Router();
const Article = require('../models/articles.js');
const Author = require('../models/authors.js');

router.get('/', (req, res)=>{
	Article.find({}, (err, foundArticles)=>{
		res.render('articles/index.ejs', {
			articles: foundArticles
		});
	})
});

router.get('/new', (req, res)=>{
	Author.find({}, (err, allAuthors)=>{
		res.render('articles/new.ejs', {
			authors: allAuthors
		});
	});
});

router.post('/', (req, res)=>{
	Article.create(req.body, (err, createdArticle)=>{
		Author.findById(req.body.authorId, (err, foundAuthor)=>{
			foundAuthor.articles.push(createdArticle);
			foundAuthor.save((err, data)=>{
				res.redirect('/articles');
			});
		});
	});
});

router.get('/:id', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		Author.findOne({ 'articles._id':req.params.id }, (err, foundAuthor)=>{
			res.render('articles/show.ejs', {
				article: foundArticle,
				author: foundAuthor
			});
		});
	});
});

router.delete('/:id', (req, res)=>{
	Article.findByIdAndRemove(req.params.id, ()=>{
		Author.findOne({ 'articles._id': req.params.id }, (err, foundAuthor)=>{
			foundAuthor.articles.id(req.params.id).remove();
			foundAuthor.save((err, savedAuthor)=>{
				res.redirect('/articles');
			})
		});
	});
});

router.get('/:id/edit', (req, res)=>{
	Article.findById(req.params.id, (err, foundArticle)=>{
		res.render('articles/edit.ejs', {
			article: foundArticle
		});
	});
});

router.put('/:id', (req, res)=>{
	Article.findByIdAndUpdate(req.params.id, req.body, ()=>{
		res.redirect('/articles');
	});
});

module.exports = router;
