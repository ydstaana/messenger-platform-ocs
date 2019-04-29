var ReviewRequest = require('../../models/ReviewRequestSchema')

function createRequest(req, res) {
  ReviewRequest.create(req.body, function(err, request) {
    if(err) res.status(422).json({code:'422',message:err});
		else{
			res.status(200).send(request);
		}
  })
}

function listRequests(req, res) {
  ReviewRequest.find({}, function(err, requests) {
    if(err) res.status(422).json({code:'422',message:err});
		else{
			res.status(200).send(requests);
		}
  })
}

async function approveRequest(req, res) {
  var request = await ReviewRequest.findById(req.params.id);

  request.isApproved = req.body.approve;

  request.save().then(r => {
			res.status(200).send(r);
  })
  .catch(err => {
    res.status(422).json({code:'422',message:err});
  })
}

module.exports = {
  createRequest : createRequest,
  approveRequest : approveRequest,
  listRequests: listRequests
}