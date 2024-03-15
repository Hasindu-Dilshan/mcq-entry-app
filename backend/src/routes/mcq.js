const express = require('express');
const roles = require('../../config/roles');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopic,
  getTopicsBySyllabus,
  getAllSyllabusTopics,
} = require('../controller/mcqController');

const router = express.Router();

router
  .route('/subjectyears')
  .get(
    isAuthenticatedUser,
    authorizeRoles(roles.USER_ROLE, roles.ADMIN_ROLE),
    getAllSubjectYears
  );
router
  .route('/subjectyears/new')
  .post(
    isAuthenticatedUser,
    authorizeRoles(roles.ADMIN_ROLE),
    createSubjectYear
  );
router
  .route('/syllabustopics')
  .get(
    isAuthenticatedUser,
    authorizeRoles(roles.ADMIN_ROLE),
    getAllSyllabusTopics
  );
router
  .route('/syllabustopics/new')
  .post(
    isAuthenticatedUser,
    authorizeRoles(roles.ADMIN_ROLE),
    createSyllabusTopic
  );
router
  .route('/topics')
  .get(
    isAuthenticatedUser,
    authorizeRoles(roles.USER_ROLE, roles.ADMIN_ROLE),
    getTopicsBySyllabus
  );

module.exports = router;
