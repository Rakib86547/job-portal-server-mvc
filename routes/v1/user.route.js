const express = require('express');
const userController = require('../../controllers/user.controller');
const router = express.Router();



router.put('/:email', userController.signUp);
router.get('/:email', userController.getUserByEmail);

module.exports = router;