const express = require("express");
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopic,
  getAllSyllabusTopics,
} = require("../controller/mcqController");

router.route("/subjectyears").get(getAllSubjectYears);
router.route("/subjectyears/new").post(createSubjectYear);
router.route("/syllabustopoics").get(getAllSyllabusTopics);
router.route("/syllabustopoics/new").post(createSyllabusTopic);

module.exports = router;
