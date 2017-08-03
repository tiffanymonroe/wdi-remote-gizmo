const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const User = require('../models/users.js')

//Index Route
router.get('/', (req, res)=>{
    User.find({}, (err, foundUsers)=>{
      res.render('users/index.ejs', {
        users: foundUsers
      });
    });
  });


//New Route
router.get('/new', (req, res)=>{
  res.render('users/new.ejs')
});



//Show Route
router.get('/:id', (req, res)=>{
  User.findById(req.params.id, (err, foundUser)=>{
    res.render('users/show.ejs', {
      user: foundUser
    });
  });
});

//Create Route
router.post('/', (req, res) =>{
  User.create(req.body, (err, createdUser)=>{
    res.redirect('/users');
  });
});


//Delete Route
router.delete('/:id', (req, res)=>{
  User.findByIdAndRemove(req.params.id, ()=>{
    res.redirect('/users');
  });
});

//Edit Route

router.get('/:id/edit', (req, res)=>{
  User.findById(req.params.id, (err, foundUser)=>{
    res.render('users/edit.ejs', {
      user: foundUser
    });
  });
});



//Update Route

router.put('/:id', (req, res)=>{
  User.findByIdAndUpdate(req.params.id, req.body, ()=>{
    res.redirect('/users')
  });
});

module.exports = router;
