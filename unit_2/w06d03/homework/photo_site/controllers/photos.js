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
  User.find({}, (err, allUsers)=>{
    res.render('photos/new.ejs', {
      users: allUsers
    });
  });
});

//Create Route
router.post('/', (req, res)=>{
  User.findById(req.body.userId, (err, foundUser)=>{
    Photo.create(req.body, (err, createdPhoto)=>{
      foundUser.photos.push(createdPhoto);
      foundUser.save((err, data)=>{
        res.redirect('/photos')
      });
    });
  });
});

//Show Route
router.get('/:id', (req, res)=>{
  Photo.findById(req.params.id, (err, foundPhoto)=>{
    User.findOne({'photos._id':req.params.id}, (err, foundUser)=>{
      console.log("User = " + foundUser);
      res.render('photos/show.ejs', {
        user: foundUser,
        photo: foundPhoto
      });
    });
  });
});



//Delete Route
router.delete('/:id', (req, res)=>{
  Photo.findByIdAndRemove(req.params.id, (err, foundPhoto)=>{
    User.findOne({'photos._id':req.params.id}, (err, foundUser)=>{
      foundUser.articles.id(req.params.id).remove();
      foundUser.save((err, data)=>{
          res.redirect('/photos');
      });
    });
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

router.put('/:id', (req, res)=>{
    Photo.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedPhoto)=>{
        Photo.findOne({'photos._id': req.params.id }, (err, foundPhoto)=>{
            foundUser.photos.id(req.params.id).remove();
            foundUser.photos.push(updatedPhoto);
            foundAuthor.save((err, data)=>{
                res.redirect('/photos/'+req.params.id);
            });
        });
    });
});


module.exports = router;
