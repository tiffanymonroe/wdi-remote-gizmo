const express = require('express');
const router = express.Router();
const Author = require('../models/authors.js');

router.get('/', (req, res)=>{
    Author.find({}, (err, foundAuthors)=>{
        res.render('authors/index.ejs',{
            authors:foundAuthors
        });
    });
});

router.get('/new', (req, res)=>{
    res.render('authors/new.ejs')
});

router.post('/', (req, res)=>{
    Author.create(req.body, (err, createdAuthor)=>{
        res.send(createdAuthor);
    })
});

module.exports = router;
