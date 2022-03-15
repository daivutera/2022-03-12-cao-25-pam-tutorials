const express = require('express');
const usersController = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.get('/users', usersController.getUsers);

module.exports = usersRouter;
