var express = require('express');
var router = express.Router();

//list of REST routing prefixes
router.use('/rest', require('./rest/'));
router.use('/rest/user', require('./rest/user'));

module.exports = router;
