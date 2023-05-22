const express = require('express');
const profileController = require('../../controllers/profile.controller');
const { verifyToken } = require('../../middleware/verifyToken');
const router = express.Router();


router.route('/:email')
    .put(profileController.createProfile)
    .get(profileController.getUpdateUser)

module.exports = router;