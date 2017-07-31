const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fruitSchema = new Schema({
  name: {type: String},
  color: {type: String},
  readyToEat: {type: Boolean}
});


const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
