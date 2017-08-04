const express = require('express');
const router = express.Router();
const User   = require('../models/user');
const bcrypt = require('bcrypt');

router.get('/login', (req, res, next) => {

  res.render('users/login.ejs', {})
})

router.post('/login', (req, res) => {
  req.session.username = req.body.username;
  req.session.logged = true;
  console.log(req.session);
  res.redirect('/authors')
})

router.post('/register', (req, res) => {
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash

  User.create(userDbEntry, (err, user)=>{
    console.log(user);

    req.session.username = user.username;
    req.session.logged = true;
    res.redirec('/authors')
  })
})

router.get('/register', (req, res, next) => {
  //query db to see if user exists
  User.findOne({username: req.body.username}, (err, user)=>{
    if(user){
      if(bcrypt.compareSync(req.body.password, user.password)){
          req.session.message = "";
          req.session.username = req.body.usernamereq.session.logged = true;
          console.log(req.session, req.body);

          res.redirect('/authors')
      } else {
        console.log('else in bcrypt compare')
        req.session.message = "Username or password are incorrect";
        res.redirect('/sessions/login')
      }



    } else {
      req.session.message = 'Username or password are incorrect';
             res.redirect('/sessions/login')
    }

  });
});







// export the controller
module.exports = router;
