const mongoose = require('mongoose');
const Article = require('./aricles.js')

const authorSchema = mongoose.Schema({
	name: String,
	articles: [Article.schema]
});

const Author = mongoose.model('Author', authorSchema);

module.exports = Author;
