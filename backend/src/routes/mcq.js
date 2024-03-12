const express = require('express');
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopics,
  getTopicsBySyllabus,
  getAllSyllabustopics,
} = require('../controller/mcqController');

const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

router
  .route('/subjectyears')
  .get(isAuthenticatedUser, authorizeRoles('user'), getAllSubjectYears);
router.route('/subjectyears/new').post(createSubjectYear);
router.route('/syllabustopoics').get(getAllSyllabustopics);
router.route('/syllabustopoics/new').post(createSyllabusTopics);

router.route('/topics').get(getTopicsBySyllabus);

module.exports = router;
