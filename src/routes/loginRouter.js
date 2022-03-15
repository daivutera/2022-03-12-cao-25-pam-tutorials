const express = require('express');
const loginController = require('../controllers/loginController');
const { validateUser } = require('../middleware');

const loginRouter = express.Router();

loginRouter.post('/login', validateUser, loginController.loginUser);

module.exports = loginRouter;
