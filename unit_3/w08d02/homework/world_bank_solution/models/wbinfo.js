const mongoose = require('mongoose');

const wbinfoSchema = mongoose.Schema({
	region: String,
	projectabstract: String,
	projectname: String,
	year: String,
	loanamnt: String
});

module.exports = mongoose.model('Wbinfo', wbinfoSchema);
