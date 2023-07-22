const express = require('express');
const companyInfoController = require('../../controllers/companyInfo.controller');
const router = express.Router();

router.route('/edit-company-info').patch(companyInfoController.createCompanyInfo);
router.route('/:email').get(companyInfoController.getCompanyInfo);

module.exports = router;