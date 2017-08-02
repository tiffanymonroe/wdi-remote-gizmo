//Dependancies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Article = require('../models/articles.js');



//New Route

router.get('/new', (req, res) => {
  res.render('articles/new.ejs')
});

//Create Route
router.post('/', (req, res) => {
  Article.create(req.body, (err, createdArticle)=>{
    res.redirect('/articles')
  });
});

//Index Route
router.get('/', (req, res) => {
  Article.find({}, (err, foundArticles)=>{
      res.render('articles/index.ejs', {
        articles: foundArticles
      });
  });
});

//Show Route
router.get('/:id', (req, res)=>{
  Article.findById(req.params.id, (err, foundArticle)=>{
    res.render('articles/show.ejs', {
      article: foundArticle
    });
  });
});

//Delete Route
router.delete('/:id', (req, res)=>{
  Article.findByIdAndRemove(req.params.id, ()=>{
    res.redirect('/articles');
  });
});

//Edit Route
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
