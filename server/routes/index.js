var express = require('express');
var router = express.Router();

//list of REST routing prefixes
router.use('/rest', require('./rest/'));
router.use('/rest/user', require('./rest/user'));
router.use('/rest/applications', require('./rest/applications'));
router.use('/rest/request', require('./rest/request'));

module.exports = router;
