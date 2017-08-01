const mongoose = require('mongoose');

const vampireSchema = new mongoose.Schema({

    name: {
       type : String,
       required: true
     },
    hair_color:  {
       type : String,
      default: 'blonde'
    },
    eye_color: String,
    dob: Date,
    loves: Array,
    location: String,
    gender: String,
    victims: {
      type: Number,
      min: [0, 'Too few victims']
     }

});

const Vampire = mongoose.model ('Vampire', vampireSchema);

module.exports = Vampire;
