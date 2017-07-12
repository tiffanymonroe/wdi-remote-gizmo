var mongoose = require('mongoose');
var Article = require('./articles.js');

var authorSchema = mongoose.Schema({
	name: String,
	articles: [Article.schema]
});

var author = mongoose.model('Author', authorSchema);

module.exports = author;
