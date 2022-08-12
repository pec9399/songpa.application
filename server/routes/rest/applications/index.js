const express = require('express');
const router = express.Router();

const {
    getApplications,
    getApplication,
    upsertApp
} = require('./application');

router.get('/:id', getApplication);
router.get('/', getApplications);
router.post('/', upsertApp);

module.exports = router;