const mongoose = require('mongoose');

const syllabusTopicsSchema = new mongoose.Schema({
  subjectId: {
    type: Number,
    required: [true, 'Please Enter Subject ID'],
    min: [1, 'Invalid Subject ID'],
    max: [200, 'Invalid Subject ID'],
  },
  syllabusUpdatedYear: {
    type: Number,
    required: [true, 'Syllabus Updated Year is required'],
    min: [1980, 'Invalid Syllabus Updated Year'],
    max: [3000, 'Invalid Syllabus Updated Year'],
  },
  topics: [
    {
      id: {
        type: Number,
        required: [true, 'Topic ID is required'],
        min: [1, 'Invalid Topic ID'],
        max: [100, 'Invalid Topic ID'],
      },
      topic: {
        type: String,
        required: [true, 'Topics is required'],
        minLength: [1, 'Invalid Topic name'],
        maxLength: [50, 'Topic name cannot exceed 50 characters'],
      },
    },
  ],
});

module.exports = mongoose.model('SyllabusTopics', syllabusTopicsSchema);
