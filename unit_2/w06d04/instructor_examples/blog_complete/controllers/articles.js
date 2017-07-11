var express = require('express');
var router = express.Router();
var Article = require('../models/articles.js');
var Author = require('../models/authors.js')

router.get('/', function(req, res){
	Article.find({}, function(err, foundArticles){
		res.render('articles/index.ejs', {
			articles: foundArticles
		});
	})
});

router.get('/new', function(req, res){
    Author.find({}, function(err, allAuthors){
        res.render('articles/new.ejs', {
            authors: allAuthors
        });
    });
});

router.post('/', function(req, res){
    Author.findById(req.body.authorId, function(err, foundAuthor){
        Article.create(req.body, function(err, createdArticle){
            foundAuthor.articles.push(createdArticle);
            foundAuthor.save(function(err, data){
                res.redirect('/articles');
            });
        });
    });
});

router.get('/:id', function(req, res){
    Article.findById(req.params.id, function(err, foundArticle){
        Author.findOne({'articles._id':req.params.id}, function(err, foundAuthor){
            res.render('articles/show.ejs', {
                author:foundAuthor,
                article: foundArticle
            });
        })
    });
});

router.delete('/:id', function(req, res){
    Article.findByIdAndRemove(req.params.id, function(err, foundArticle){
        Author.findOne({'articles._id':req.params.id}, function(err, foundAuthor){
            foundAuthor.articles.id(req.params.id).remove();
            foundAuthor.save(function(err, data){
                res.redirect('/articles');
            });
        });
    });
});

router.get('/:id/edit', function(req, res){
	Article.findById(req.params.id, function(err, foundArticle){
		Author.find({}, function(err, allAuthors){
			Author.findOne({'articles._id':req.params.id}, function(err, foundArticleAuthor){
				res.render('articles/edit.ejs', {
					article: foundArticle,
					authors: allAuthors,
					articleAuthor: foundArticleAuthor
				});
			});
		});
	});
});

router.put('/:id', function(req, res){
    Article.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, updatedArticle){
        Author.findOne({ 'articles._id' : req.params.id }, function(err, foundAuthor){
			if(foundAuthor._id.toString() !== req.body.authorId){
				foundAuthor.articles.id(req.params.id).remove();
				foundAuthor.save(function(err, savedFoundAuthor){
					Author.findById(req.body.authorId, function(err, newAuthor){
						newAuthor.articles.push(updatedArticle);
						newAuthor.save(function(err, savedNewAuthor){
			                res.redirect('/articles/'+req.params.id);
			            });
					});
	            });
			} else {
				foundAuthor.articles.id(req.params.id).remove();
	            foundAuthor.articles.push(updatedArticle);
	            foundAuthor.save(function(err, data){
	                res.redirect('/articles/'+req.params.id);
	            });
			}
        });
    });
});

module.exports = router;
