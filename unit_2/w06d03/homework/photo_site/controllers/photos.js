const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../models/photos.js');

//Index Route
router.get('/', (req, res) => {
  Photo.find({}, (err, foundPhotos)=>{
    res.render('photos/index.ejs', {
      photos: foundPhotos
    });
  });
});

//New Route
router.get('/new', (req, res)=>{
  res.render('photos/new.ejs')
});

//Show Route
router.get('/:id', (req, res)=>{
  Photo.findById(req.params.id, (err, foundPhoto)=>{
    res.render('photos/show.ejs', {
      photo: foundPhoto
    });
  });
});

//Create Route
router.post('/', (req, res)=>{
  Photo.create(req.body, (err, createdPhoto)=>{
    res.redirect('/photos');
  });
});


module.exports = router;
