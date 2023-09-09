const express = require('express');

const router = express.Router();

const loginController = require('../controllers/login_Controller');

router.get('/login', loginController.login);

module.exports = router;