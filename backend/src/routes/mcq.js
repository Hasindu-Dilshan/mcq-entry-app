const express = require("express");
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopic,
  getTopicsBySyllabus,
  getAllSyllabusTopics,
} = require("../controller/mcqController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/subjectyears").get(getAllSubjectYears);
router.route("/subjectyears/new").post(createSubjectYear);
router.route("/syllabustopics").get(getAllSyllabusTopics);
router.route("/syllabustopics/new").post(createSyllabusTopic);

router.route("/topics").get(getTopicsBySyllabus);

module.exports = router;
