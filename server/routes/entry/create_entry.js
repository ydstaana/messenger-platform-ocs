var mongoose = require('mongoose');
var Entry = require('../../models/EntrySchema.js');
axios = require('axios'),

module.exports = function (req, res, done) {
	Entry.create(req.body, function (err, entry) {
		if (err) {
			res.status(422).json({
				message: err
			});
		}
		else {
			axios.post('http://127.0.0.1:8000/admin/entry/embed', entry).then(data => {
				res.status(200).send(data.data);
			})
		}
	});
}