const express = require('express');
const router = express.Router();

const login = require('./login')
const register = require('./register')
const upload = require('./upload')
const get_all_users = require('./get_all_users');
const get_all_uploads = require('./get_all_uploads');
const start_server = require('./start_server');

router.get('/start',start_server);

router.get('/users',get_all_users);
router.get('/uploads',get_all_uploads);
router.post('/login', login);
router.post('/register',register );
router.post('/uploads',upload);

module.exports = router;