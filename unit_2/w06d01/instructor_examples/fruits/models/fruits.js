const mongoose = require('mongoose');

const fruitSchema = new mongoose.Schema({
    name: { type: String },
    color: { type: String },
    readyToEat: { type: Boolean }
});

const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
