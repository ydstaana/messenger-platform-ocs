const mongoose = require('mongoose');
var Entry = require('../../models/EntrySchema.js');

module.exports = function(req, res){
	Entry.find({}, function(err, entries) {
		if(err) res.status(422).json({code:'422',message:err});
		else{
			res.status(200).send(entries);
		}
	})
}