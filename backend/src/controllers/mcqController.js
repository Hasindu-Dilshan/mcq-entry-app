exports.getAllSyllabi = (req, res, next) => {
  res.status(200).json({
    success: true,
    message: "This route will get all syllabi",
  });
};
