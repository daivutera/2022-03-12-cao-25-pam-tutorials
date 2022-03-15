const { ErrorCase, successCase } = require('../helpers');
const {
  showTutorialsDb,
  showAuthTutorialsDb,
  showNotAuthTutorialsDb,
  postTutorialDb,
} = require('../modules/tutorialsModel');

async function getTutorialsId(req, res) {
  const userId = req.userId;
  //const { id } = req.params;
  const users = await showTutorialsDb(userId);
  if (users === false) {
    ErrorCase(res);
    return;
  }
  successCase(res, users);
}

async function getAuthTutorials(req, res) {
  if (req.validUser === true) {
    const tutorialsNotPrivate = await showAuthTutorialsDb();
    if (tutorialsNotPrivate === false) {
      ErrorCase(res);
      return;
    }
    successCase(res, tutorialsNotPrivate);
    return;
  }
  const tutorialsPrivate = await showNotAuthTutorialsDb();
  if (tutorialsPrivate === false) {
    ErrorCase(res);
    return;
  }
  successCase(res, tutorialsPrivate);
}

async function postTutorial(req, res) {
  const { title, content, private } = req.body;
  const user_id = req.userId;
  const users = await postTutorialDb(title, content, private, user_id);
  if (users === false) {
    ErrorCase(res);
    return;
  }
  successCase(res, users);
}

module.exports = { getTutorialsId, getAuthTutorials, postTutorial };
