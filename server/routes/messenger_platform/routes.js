const express = require('express');
const router = express.Router();

const messenger_platform = require('./messenger_platform')
const get_all_users = require('../user/get_all_users')
const create_entry = require('../entry/create_entry')
const get_all_entries = require('../entry/get_all')
const review_request = require('./review_request')

router.get('/webhook', messenger_platform.validate_webhook);
router.post('/webhook', messenger_platform.webhook);

router.get('/authorize', messenger_platform.authorize);

router.get('/users', get_all_users);

router.post('/entries', create_entry);

router.get('/entries', get_all_entries);

router.get('/requests', review_request.listRequests);
router.post('/requests', review_request.createRequest);
router.put('/requests/:id', review_request.approveRequest);

module.exports = router;