const express = require('express');

const router = express.Router();

const AppController = require('../controllers/AppController');

const UsersController = require('../controllers/UsersController');

const AuthController = require('../controllers/AuthController');

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);
router.post('/users', UsersController.postNew); //basically signup
router.get('/connect', AuthController.getConnect); // basically login
router.get('/disconnect', AuthController.getDisconnect); // basically logout it destroys the token also
router.get('/users/me', UsersController.getMe); // Test but the UsersController.getMe is a function that will be used to get token and verify
module.exports = router;
