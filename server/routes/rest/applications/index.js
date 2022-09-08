const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const db = require('../../../models');
const config = require('../../../config/config.json')[process.env.NODE_ENV || 'development'];
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.path.upload_path);
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const basename = path.basename(file.originalname, extension);
        cb(null, basename + "-" + Date.now() + extension);
    },
});

const upload = multer({
    storage: storage
});

const {
    getApplications,
    getApplication,
    upsertApp,
    deleteApp
} = require('./application');

router.get('/:id', getApplication);
router.get('/', getApplications);
router.post('/', upload.single('file-front'), upsertApp);
router.delete('/:id', deleteApp);

module.exports = router;