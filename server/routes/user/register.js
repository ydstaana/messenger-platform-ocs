var mongoose = require('mongoose');
var User = require('../../models/UserSchema.js');

module.exports = function (req, res, done) {
	User.create(req.body, function (err, user) {
		console.log(req.body);
		if (err) {
			res.status(422).json({
				message: err
			});
		}
	    else{
	    	res.status(200).send(user);
	    }
	});
}