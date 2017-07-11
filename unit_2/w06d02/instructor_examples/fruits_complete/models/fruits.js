var mongoose = require('mongoose'); //require mongoose package
var Schema = mongoose.Schema; //mongoose has many properties on it.  One is a constructor function for Schemas

var fruitSchema = new Schema({
	name:  { type: String, required: true },
    color:  { type: String, required: true },
	readyToEat: Boolean
});

//Creating an Article class -- will be stored in 'articles' collection.  Mongo does this for you automatically
var Fruit = mongoose.model('Fruit', fruitSchema);

module.exports = Fruit;
