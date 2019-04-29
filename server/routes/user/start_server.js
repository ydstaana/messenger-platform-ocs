const { exec } = require('child_process')
var Entry = require('../../models/EntrySchema');

module.exports = function(req,res) {
	Entry.find({}, function(err, entries) {
		if(!err) {
			console.log(entries)
			axios({
				method: 'post',
				url: 'http://127.0.0.1:8000/admin/server/embed',
				data : entries,
				contentType: 'application/x-www-form-urlencoded; charset=utf-8',
			})
			.then(response => {
				axios.get('http://127.0.0.1:8000/admin/update').then(data => {
          res.status(200).json({
						success: true,
						message: "Server started.",
					});
        })
        .catch((err) => {
          res.status(500).json({
            code: 500,
            message: err
          });
				}) 
			})
			.catch(error => {
				res.status(500).json({
					success: false,
					message: "Server started unsucessfully.",
				});
		})
		}
	})	
}
