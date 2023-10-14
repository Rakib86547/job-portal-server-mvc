const express = require('express');
const featureJobsController = require('../../controllers/featureJobs.controller');
const router = express.Router();

router.route('/').get(featureJobsController.getFeatureJobs);
router.route('/total-jobs').get(featureJobsController.getTotalAllJobs);
router.route('/today-jobs').get(featureJobsController.getTodayJobs);


module.exports = router