const express = require("express");
const router = express.Router();

const { getAllSyllabi } = require("../controllers/mcqController");

router.route("/syllabi").get(getAllSyllabi);

module.exports = router;
