const express = require('express');
const fileController = require('../../controllers/file.controller');
const imageUpload = require('../../middleware/imageUpload');
const { verifyToken } = require('../../middleware/verifyToken');
const router = express.Router();

router.route('/').put(imageUpload.single('file'), fileController.fileUpload)
router.route('/:email').get(fileController.getFile)
router.route('/:id').delete(fileController.deleteFile)

module.exports = router;