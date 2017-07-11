var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = Schema({
    username: String,
    password: String
});

var User = mongoose.model('User', userSchema);

module.exports = User;
