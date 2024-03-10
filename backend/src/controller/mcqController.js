const SubjectYears = require("../modal/subjectYears");
const SyllabusTopics = require("../modal/syllabusTopics");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create SubjectYear => /api/v1/mcq/subjectyears/new
exports.createSubjectYear = catchAsyncErrors(async (req, res, next) => {
  const subjectYears = await SubjectYears.findOne();

  if (!subjectYears) {
    return next(new ErrorHandler("subjectYears collection not found", 404));
  }

  subjectYears.subjectYears.push(req.body);

  await subjectYears.save().then((subjectYear) => {
    res.status(201).json({
      success: true,
      subjectYear,
    });
  });
});

// Get all SubjectYears => /api/v1/mcq/subjectyears
exports.getAllSubjectYears = catchAsyncErrors(async (req, res, next) => {
  const subjectYears = await SubjectYears.find();

  if (!subjectYears)
    return next(new ErrorHandler("subjectYears collection not found", 404));

  res.status(200).json({
    success: true,
    subjectYears,
  });
});

// Create SyllabusTopcics => /api/v1/mcq/syllabustopics/new
exports.createSyllabusTopic = catchAsyncErrors(async (req, res, next) => {
  const syllabusTopics = await SyllabusTopics.create(req.body);

  res.status(201).json({
    success: true,
    syllabusTopics,
  });
});

// Get all Syllabustopics => /api/v1/mcq/syllabustopics
exports.getAllSyllabusTopics = catchAsyncErrors(async (req, res, next) => {
  const syllabusTopics = await SyllabusTopics.find();

  if (!syllabusTopics)
    return next(new ErrorHandler("subjectYears collection not found", 404));

  res.status(200).json({
    success: true,
    syllabusTopics,
  });
});
