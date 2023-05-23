const express = require('express');
const jobsController = require('../../controllers/jobs.controller');
const router = express.Router();


router.route('/')
    .get(jobsController.getJobs)
    .post(jobsController.createJobs)

router.route('/:category')
    .get(jobsController.getJobsByCategory)

router.route('/job-details/:id')
    .get(jobsController.getJobsDetailsById)

router.route('/apply/:id').put(jobsController.createApply)
router.route('/my-jobs/:email').get(jobsController.getAppliedJobs)

module.exports = router;