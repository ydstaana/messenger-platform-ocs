const multer = require('multer');
const moment = require('moment');
const mongoose = require('mongoose');
const pify = require('pify');

var File = require('../../models/FileSchema.js');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../ocsbot/ocsbot/for_consumption/')
  },
  filename: function (req, file, cb) {
    const currentDate = moment().format("DD-MM-YYYY");
    cb(null, `${currentDate}_${file.originalname}`);
  }
});

const upload = multer({ storage: storage });
const fileUpload = pify(upload.single('files')); //Promisify upload

const uploadFile = async function (req, res) {
  try {
    await fileUpload(req, res);
    // Everything went fine
    const newFile = {
	    fileName: req.file.filename,
	    uploadDate: moment().format()
	 }

	  File.create(newFile, function (err, file) {
	    if (!err) {
	      axios.get('http://127.0.0.1:8000/admin/update').then(data => {
          res.status(200).json({
            code: 200,
            message: 'Successfully uploaded the file'
          });
        })
        .catch((err) => {
          res.status(500).json({
            code: 500,
            message: err
          });
        }) 
	    }
	  })
  } catch (err) {
    res.status(500).json({
      code: 500,
      message: err
    });
  }
}

module.exports = uploadFile;