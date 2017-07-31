//Schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const vampireSchema = new Schema({

  name: {type: String, required: true},
  hair_color: {type: String, default: 'blonde'},
  eye_color: {type: String },
  dob: {type: Date},
  loves: [{type: String}],
  location: {type: String},
  gender: {type: String},
  victims: {
    type: Number,
    required: ()=>{
      return this.victims > 0;
    }
  }
});

//model
const Vampire = mongoose.model('Vampire', vampireSchema);

//connect to mongo

mongoose.connect('mongodb://localhost:27017/vampire');

mongoose.connection.once('open', () => {
  console.log('The vampires are here.');
})

module.exports = Vampire;
