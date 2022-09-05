const express = require('express');
const router = express.Router();
const multer = require('multer');
const randomstring = require("randomstring"); //내가 추가
const path = require('path');
const db = require('../../../models');
const config = require('../../../config/config.json')[process.env.NODE_ENV || 'development'];
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, config.path.upload_path);
    },
    filename: (req, file, cb) => {
        const fileName = randomstring.generate(25);
        const extension = path.extname(file.originalname);
        cb(null, fileName + extension);

        // const extension = path.extname(file.originalname);
        // const basename = path.basename(file.originalname, extension);
        // cb(null, basename + "-" + Date.now() + extension);
    },
});

const fileFilter = (req, file, cb) => {
    console.log(file);
    const typeArray = file.mimetype.split('/');
    const fileType = typeArray[1];
    if (fileType == 'jpg' || fileType == 'png' || fileType == 'jpeg' || fileType == 'gif' || fileType == 'webp') {
        req.fileValidationError = null;
        cb(null, true);
    } else {
        req.fileValidationError = 'jpg, jpeg, png, gif, webp 파일만 업로드 가능합니다.';
        cb(null, false);
    }
}
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    dest: '../../../upload'
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