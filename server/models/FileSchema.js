var mongoose = require('mongoose')

var FileSchema = new mongoose.Schema({
	fileName : String,
	uploadDate : Date,
});


var File = mongoose.model('File', FileSchema);

module.exports = File;