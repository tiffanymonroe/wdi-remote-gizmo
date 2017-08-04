const mongoose = require('mongoose');
const User = require('../models/users.js');

const photoSchema = mongoose.Schema({
  img: String,
  username: User.schema
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
