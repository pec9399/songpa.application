const express = require('express');
const router = express.Router();

const {
    getApplications,
    getApplication,
    upsertApp,
    deleteApp
} = require('./application');

router.get('/:id', getApplication);
router.get('/', getApplications);
router.post('/', upsertApp);
router.delete('/:id', deleteApp);

module.exports = router;