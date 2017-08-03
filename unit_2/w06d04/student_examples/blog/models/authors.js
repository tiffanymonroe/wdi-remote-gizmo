const mongoose = require('mongoose');

//to get the schema to add to the author
const Article = require('./articles.js');


const authorSchema = mongoose.Schema({
	name: String,
	articles: [Article.schema]
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
