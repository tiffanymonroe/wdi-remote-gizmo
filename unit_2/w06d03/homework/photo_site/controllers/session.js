const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Login Route
router.get('/login', (req, res)=> {
  req.session.username = req.body.username;
  req.session.logged = true;
  console.log(req.session);
  res.redirect('/users')
});

//compare function in login router

router.post('/login', (req, res)=>)

//Check to see if user is logged in

router.get('/retrieve' (req, res) => {
  if(req.session.logged){
    Photo.find({}, (err, foundPhotos)=>{
      res.render('photos/index.ejs', {
        photos: foundPhotos
      });
    })
  } else {
    res.redirect('/sessions/login')
  }
});

router.post('/register', (req, res)=>{

  //hash the password
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  //create object for our db entry // do NOT save actual req.body.password!!!
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;

  //put password into db
  User.creat(userDbEntry, (err, user)=>{
    console.log(user);

    //set up session and use login code
    req.session.username = req.body.username
    req.session.logged = true;
    res.redirect('/users')
  });
});

//Destroy the session

router.get('/logout', (req, res){
  req.session.destroy((err)=>{
    if (err) {
      res.redirect('/login')
    } else {
      res.redirect('/')
    }
  });
});
