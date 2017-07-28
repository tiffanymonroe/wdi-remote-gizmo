const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    title: { type: String },
    author: { type: String }
});
const Article = mongoose.model('Article', articleSchema);

module.exports = Article;
