var mongoose = require('mongoose');

var webtoonSchema = mongoose.Schema({
    name: String,
    day: String,
    titleid: String,
    imgsrc: String
});

module.exports = mongoose.model('User', webtoonSchema);