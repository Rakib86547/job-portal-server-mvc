const express = require('express');
const skillController = require('../../controllers/skill.controller');
const router = express.Router();


router.route('/').post(skillController.createSkill)
router.route('/:email').get(skillController.getSkills)
router.route('/:id').delete(skillController.deleteSkill)

module.exports = router;