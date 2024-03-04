const SubjectYears = require("../modal/subjectYears");
const SyllabusTopics = require("../modal/syllabusTopics");
const ErrorHandler = require("../utils/ErrorHandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// Create SubjectYear => /api/v1/mcq/subjectyears/new
exports.createSubjectYears = catchAsyncErrors(async (req, res, next) => {
  const subjectYears = await SubjectYears.create(req.body);

  res.status(201).json({
    success: true,
    subjectYears,
  });
});

// Get all SubjectYears => /api/v1/mcq/subjectyears
exports.getAllSubjectYears = async (req, res, next) => {
  const subjectYears = await SubjectYears.find();

  if (subjectYears)
    return next(new ErrorHandler("subjectYears not found", 404));

  res.status(200).json({
    success: true,
    subjectYears,
  });
};

// Create SyllabusTopcics => /api/v1/mcq/syllabustopics/new
exports.createSyllabusTopics = catchAsyncErrors(async (req, res, next) => {
  const subjectTopics = await SyllabusTopics.create(req.body);

  res.status(201).json({
    success: true,
    subjectTopics,
  });
});

// Create SyllabusTopics => /api/v1/mcq/syllabustopics
exports.getAllSubjectTopics = async (req, res, next) => {
  const subjectTopics = await SyllabusTopics.find();

  if (!subjectTopics)
    return next(new ErrorHandler("subjectYears not found", 404));

  res.status(200).json({
    success: true,
    subjectTopics,
  });
};
