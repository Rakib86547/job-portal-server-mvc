const express = require('express');
const featureJobsController = require('../../controllers/featureJobs.controller');
const router = express.Router();

router.route('/').get(featureJobsController.getFeatureJobs);
// router.route('/all-jobs').get(featureJobsController.getAllFeatureJobs);
router.route('/:page/:limit').get(featureJobsController.getAllFeatureJobs)

module.exports = router