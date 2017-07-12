var mongoose = require('mongoose');

var articleSchema = mongoose.Schema({
	title:String,
	body:String
});

var Article = mongoose.model('Article', articleSchema);

module.exports = Article;
