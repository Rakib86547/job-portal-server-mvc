const express = require('express');
const fileController = require('../../controllers/file.controller');
const imageUpload = require('../../middleware/imageUpload');
const router = express.Router();

router.route('/').post(imageUpload.single('file'), fileController.fileUpload)

module.exports = router;