const express = require("express");
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopics,
  getAllSubjectTopics,
} = require("../controller/mcqController");

router.route("/subjectyears").get(getAllSubjectYears);
router.route("/subjectyears/new").post(createSubjectYear);
router.route("/syllabustopoics").get(getAllSubjectTopics);
router.route("/syllabustopoics/new").post(createSyllabusTopics);

module.exports = router;
