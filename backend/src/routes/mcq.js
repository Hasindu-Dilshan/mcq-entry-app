const express = require('express');
const ROLES = require('../../config/roles');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');
const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopic,
  getTopicsBySyllabus,
  getAllSyllabusTopics,
} = require('../controller/mcqController');

const router = express.Router();


router.route('/subjectyears').get(isAuthenticatedUser, authorizeRoles(ROLES.USER_ROLE, ROLES.ADMIN_ROLE), getAllSubjectYears);
router.route('/subjectyears/new').post(isAuthenticatedUser, authorizeRoles(ROLES.ADMIN_ROLE), createSubjectYear);
router.route('/syllabustopics').get(isAuthenticatedUser, authorizeRoles(ROLES.ADMIN_ROLE), getAllSyllabusTopics);
router.route('/syllabustopics/new').post(isAuthenticatedUser, authorizeRoles(ROLES.ADMIN_ROLE), createSyllabusTopic);
router.route('/topics').get(isAuthenticatedUser, authorizeRoles(ROLES.USER_ROLE, ROLES.ADMIN_ROLE), getTopicsBySyllabus);

module.exports = router;
