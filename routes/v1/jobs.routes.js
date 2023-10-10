const express = require('express');
const jobsController = require('../../controllers/jobs.controller');
const { verifyToken } = require('../../middleware/verifyToken');
const router = express.Router();


router.route('/')
    .get(jobsController.getJobs)
    .post(jobsController.createJobs)

router.route('/:category').get(jobsController.getJobsByCategory)
router.route('/job-details/:id').get(jobsController.getJobsDetailsById)
// router.route('/hr-jobs/:email').get(jobsController.getHrJobs)
router.route('/hr-jobs/:email/:page/:limit').get(jobsController.getHrJobs)
router.route('/all-jobs/:page/:limit').get(jobsController.getAllJobs)
router.route('/today-jobs').get(jobsController.getTodayJobs)
router.route('/total-jobs').get(jobsController.getTotalAllJobs)
router.route('/apply/:id').put(jobsController.createApply)
router.route('/my-jobs/:email').get(jobsController.getAppliedJobs)
router.route('/questions').patch(verifyToken, jobsController.createQuestions)
router.route('/questions/:id').get(jobsController.getQuestions)
router.route('/ripley').patch(jobsController.createRipley)
router.route('/ripley/:id').get(jobsController.getRipley)
router.route('/:id').delete(jobsController.deleteJob)
router.route('/manage-jobs/:id').get(jobsController.getManageJob)
router.route('/applier/:email/:id').delete(jobsController.deleteApplier)
router.route('/all-applier/:email/:page/:limit').get(jobsController.getAllApplier)

module.exports = router;