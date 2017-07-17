const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
	name: String
});

const author = mongoose.model('Author', authorSchema);

module.exports = author;
