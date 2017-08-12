const express = require('express');
const router  = express.Router();
const User    = require('../models/user');
const bcrypt  = require('bcrypt');

router.get('/login', (req, res) => {

  res.render('users/login.ejs', {message: req.session.message || ''})
})



router.get('/register', (req, res) => {


  res.render('users/register.ejs', {})
})


// Try to create a post route at the address /login
// that will accept data from the login form
router.post('/login', (req, res) => {

// query the dateabase for the user
 User.findOne({username: req.body.username}, (err, user) => {

  // if the user exists use the bcrypt compare passwords
    if(user){

        if(bcrypt.compareSync(req.body.password, user.password)){

            req.session.message = '';
            req.session.username = req.body.username;
            req.session.logged = true;
            console.log(req.session);
            res.redirect('/authors')

        } else {
          // create a message for the user
          req.session.message = 'username or password are incorrect';
          res.redirect('/sessions/login')


        }


    } else {

          req.session.message = 'username or password are incorrect';
          res.redirect('/sessions/login')
    }


 })





})


router.post('/registration', (req, res) => {


   // hash the password
  const password = req.body.password;
  const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

  // create on object for are db entry
  const userDbEntry = {};
  userDbEntry.username = req.body.username;
  userDbEntry.password = passwordHash;

  User.create(userDbEntry, (err, user) => {
    console.log(user);

    // set up session
    req.session.message  = '';
    req.session.username = user.username;
    req.session.logged   = true;

    res.redirect('/authors')


  })
})






//;logout
router.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if(err){
      //do something
    } else {
      res.redirect('/');
    }

  })
})



// some route we want to check if someone is logged in
// router.get('/someRouteWeDontWannaSeeUnlessLoggedIn', (req, res) => {

//   if(req.session.logged){
//     // run the normal code that was there
//     // to show page
//   } else {
//     // redirect them to login
//     redirect('/sessions/login')
//   }


// })














// export the controller
module.exports = router;
