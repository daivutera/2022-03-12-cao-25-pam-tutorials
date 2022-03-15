const express = require('express');
const registerController = require('../controllers/registerController');
const { validateUser } = require('../middleware');

const registerRouter = express.Router();

registerRouter.post('/register', validateUser, registerController.registerUser);

module.exports = registerRouter;
