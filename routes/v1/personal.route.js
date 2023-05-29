const express = require('express');
const router = express.Router();
const profileController = require('../../controllers/personal.controller');

router.route('/').patch(profileController.createPersonalInfo);
router.route('/:email').get(profileController.getPersonalInfo);

module.exports = router;