const express = require('express');
const workController = require('../../controllers/work.controller');
const router = express.Router();

router.route('/').post(workController.createWork);
router.route('/:email').get(workController.getWork);
router.route('/').patch(workController.updateWork);
router.route('/:id').delete(workController.deleteWork);

module.exports = router;