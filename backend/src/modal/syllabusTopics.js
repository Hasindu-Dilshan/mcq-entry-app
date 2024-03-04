const mongoose = require("mongoose");

const syllabusTopicsSchema = new mongoose.Schema({
  subjectId: {
    type: Number,
    required: [true, "Please Enter Subject ID"],
    min: [1, "Invalid Subject ID"],
    max: [200, "Invalid Subject ID"],
  },
  syllabusUpdatedYear: {
    type: Number,
    required: [true, "Please Enter Syllabus Updated Year"],
    min: [1980, "Invalid Syllabus Updated Year"],
    max: [3000, "Invalid Syllabus Updated Year"],
  },
  topics: [
    {
      id: {
        type: Number,
        required: [true, "Please Enter Topic ID"],
        min: [1, "Invalid Topic ID"],
        max: [100, "Invalid Topic ID"],
      },
      topic: {
        type: String,
        required: [true, "Please Enter Topics"],
        minLength: [1, "Invalid Topic name"],
        maxLength: [50, "Invalid Topic name"],
      },
    },
  ],
});

module.exports = mongoose.model("SyllabusTopics", syllabusTopicsSchema);
