var mongoose = require('mongoose');

var authorSchema = mongoose.Schema({
	name: String
});

var author = mongoose.model('Author', authorSchema);

module.exports = author;
