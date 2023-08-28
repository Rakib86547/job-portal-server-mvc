const express = require('express');
const searchController = require('../../controllers/search.controller');
const { verifyToken } = require('../../middleware/verifyToken');
const router = express.Router();


router.route('/').get(searchController.getSearchJobs)

module.exports = router;