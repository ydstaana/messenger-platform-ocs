const mongoose = require('mongoose');
var File = require('../../models/FileSchema.js');

module.exports = function(req, res){
	File.find({}, function(err, files) {
		if(err) res.status(422).json({code:'422',message:err});
		else{
			res.status(200).send(files);
		}
	})
}