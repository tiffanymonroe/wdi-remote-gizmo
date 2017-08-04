const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Photo = require('../models/photos.js');
const User = require('../models/users.js');

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

//Delete Route
router.delete('/:id', (req, res)=>{
  Photo.findByIdAndRemove(req.params.id, ()=>{
    res.redirect('/photos')
  });
});

//Edit Route
router.get('/:id/edit', (req, res)=>{
  Photo.findById(req.params.id, (err, foundPhoto)=>{
    res.render('photos/edit.ejs', {
      photo: foundPhoto
    });
  });
});

//Update Route
router.get('/:id', (req, res)=>{
  Photo.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/photos')
  });
});


module.exports = router;
