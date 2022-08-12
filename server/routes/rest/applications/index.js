

const express = require('express');
const router = express.Router();

const {
    getApplications
} = require('./application');


router.get('/', getApplications);

module.exports = router;