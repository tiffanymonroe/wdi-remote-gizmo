const mongoose = require('mongoose');
const Photo = require('../models/photos.js');

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  photos: [Photo.schema]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
