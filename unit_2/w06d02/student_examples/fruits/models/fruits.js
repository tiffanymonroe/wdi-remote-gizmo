const mongoose = require('mongoose'); //require mongoose package
const Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

const fruitSchema = new Schema({
	name:  { type: String, required: true },
    color:  { type: String, required: true },
	readyToEat: Boolean
});

//Creating an Article class -- will be stored in 'articles' collection.  Mongo does this for you automatically
const Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
