const mongoose = require('mongoose');

const coffeeSchema = mongoose.Schema({
  quote: String,
  complete: Boolean
})

const Coffee = mongoose.model('Coffee', coffeeSchema);

module.exports = Coffee;
