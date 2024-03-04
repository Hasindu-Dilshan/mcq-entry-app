const express = require("express");
const router = express.Router();

const {
  getAllSubjectYears,
  createSubjectYears,
  createSyllabusTopics,
} = require("../controller/mcqController");

router.route("/subjectyears").get(getAllSubjectYears);
router.route("/subjectyears/new").post(createSubjectYears);
router.route("/syllabustopoics/new").post(createSyllabusTopics);

module.exports = router;
