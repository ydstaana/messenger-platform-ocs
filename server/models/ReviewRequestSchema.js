var mongoose = require('mongoose')

var ReviewRequestSchema = new mongoose.Schema({
	question : String,
	isApproved: Boolean
});


var ReviewRequest = mongoose.model('ReviewRequest', ReviewRequestSchema);

module.exports = ReviewRequest;