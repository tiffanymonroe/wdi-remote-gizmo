const express = require('express');
const router = express.Router();
const User   = require('../models/user');


router.get('/login', (req, res, next) => {

  res.render('users/login.ejs', {})
})



router.get('/register', (req, res, next) => {


  res.render('users/register.ejs', {})
})







// export the controller
module.exports = router;
