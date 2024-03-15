const mongoose = require('mongoose');

const subjectYearsSchema = new mongoose.Schema({
  subjectYears: [
    {
      subjectName: {
        type: String,
        required: [true, 'Subject Name is required'],
        minLength: [1, 'Invalid Subject Name'],
        maxLength: [100, 'Invalid Subject Name'],
      },
      subjectId: {
        type: Number,
        required: [true, 'Subject ID is required'],
        min: [1, 'Invalid Subject ID'],
        max: [200, 'Invalid Subject ID'],
      },
      syllabusUpdatedYears: [
        {
          type: Number,
          min: [1980, 'Invalid Syllabus Updated Year'],
          max: [3000, 'Invalid Syllabus Updated Year'],
        },
      ],
    },
  ],
  title: {
    type: String,
    required: [true, 'title is required'],
  },
});

module.exports = mongoose.model('SubjectYears', subjectYearsSchema);
