//User-related routing page (/rest/user*)

const express = require('express');
const router = express.Router();

const {
    getSession,
    upsertUser
} = require('./user');


router.get('/session', getSession);
router.post('/',upsertUser);

module.exports = router;