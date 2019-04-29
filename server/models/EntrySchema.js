var mongoose = require('mongoose')

var EntrySchema = new mongoose.Schema({
	question : String,
	answer: String,
});


var Entry = mongoose.model('Entry', EntrySchema);

module.exports = Entry;