//Dependancies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Author = require('../models/authors.js');




//Index Route
// router.get('/', (req, res) => {
//   res.render('authors/index.ejs')
// })

//New Route
router.get('/new', (req, res) => {
  res.render('authors/new.ejs')
})

//Create Route
router.post('/', (req, res)=>{
	Author.create(req.body, (err, createdAuthor)=>{
		res.redirect('/authors');
	});
});


router.get('/', (req, res) => {
  Author.find({}, (err, foundAuthors) => {
    res.render('authors/index.ejs', {
      authors: foundAuthors
    });
  });
});

//Show Route
router.get('/:id', (req, res)=>{
	Author.findById(req.params.id, (err, foundAuthor)=>{
		res.render('authors/show.ejs', {
			author: foundAuthor
		});
	});
});

//Delete Route
router.delete('/:id', (req, res)=>{
  Author.findByIdAndRemove(req.params.id, ()=>{
    res.redirect('/authors')
  });
});

//Edit Route

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
