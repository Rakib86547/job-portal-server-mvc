const express = require('express');
const educationController = require('../../controllers/education.controller');
const router = express.Router();

router.route('/').post(educationController.createEducation);
router.route('/:email').get(educationController.getEducation);
router.route('/').patch(educationController.updateEducation);
router.route('/:id').delete(educationController.deleteEducation);

module.exports = router;