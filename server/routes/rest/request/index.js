const express = require('express');
const router = express.Router();

const {
    reqApp,
    reqDelete
} = require('./request');

router.post('/:appId', reqApp);
router.delete('/:id', reqDelete);

module.exports = router;