const express = require('express');
const tutorialController = require('../controllers/tutorialController');
const { validateToken, validateTokenReq } = require('../middleware');

const tutorialRouter = express.Router();

tutorialRouter.get(
  '/user-tutorials/:id',
  validateToken,
  tutorialController.getTutorialsId,
);
// tutorialRouter.get(
//     '/user-tutorials/:id',
//     validateToken,
//     tutorialController.getTutorials,
//   );GAUT USERID IS TOKEN, KAD NEPAKEISTI ID PRISIJUNGES
tutorialRouter.get(
  '/tutorials/',
  validateTokenReq,
  tutorialController.getAuthTutorials,
);
tutorialRouter.post(
  '/tutorials/',
  validateToken,
  tutorialController.postTutorial,
);

module.exports = tutorialRouter;
