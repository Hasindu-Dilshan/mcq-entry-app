const express = require("express");
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYear,
  createSyllabusTopics,
} = require("../controller/mcqController");

router.route("/subjectyears").get(getAllSubjectYears);
router.route("/subjectyears/new").post(createSubjectYear);
router.route("/syllabustopoics/new").post(createSyllabusTopics);

module.exports = router;
