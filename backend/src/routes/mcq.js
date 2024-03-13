const express = require("express");
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopic,
  getTopicsBySyllabus,
  getAllSyllabustopics,
} = require("../controller/mcqController");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/subjectyears").get(getAllSubjectYears);
router.route("/subjectyears/new").post(createSubjectYear);
router.route("/syllabustopoics").get(getAllSyllabustopics);
router.route("/syllabustopoics/new").post(createSyllabusTopic);

router.route("/topics").get(getTopicsBySyllabus);

module.exports = router;
