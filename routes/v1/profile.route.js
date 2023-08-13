const express = require('express');
const profileController = require('../../controllers/profile.controller');
const { verifyToken } = require('../../middleware/verifyToken');
const router = express.Router();


router.route('/').put(profileController.createProfile)
router.route('/:email').get(profileController.getUpdateUser)

module.exports = router;