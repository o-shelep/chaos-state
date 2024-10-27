const Test = require("../models/test/testModel");
const catchAsync = require("../utils/errorHandlers/catchAsync");
const resultsHandler =
  require("../utils/testFeatures/testFeature").resultsHandler;

exports.getResults = catchAsync(async (req, res) => {
  try {
    const test = await Test.findById(req.params.testId); // Ensure you are using the correct parameter
    if (!test) {
      return res
        .status(404)
        .json({ status: "fail", message: "Test not found." });
    }
    // Check if results exist
    if (!test.results) {
      return res
        .status(404)
        .json({ status: "fail", message: "No results found." });
    }
    resultsHandler(req, res, test.results, req.params.testId);
  } catch (error) {
    console.error("Error fetching results:", error); // Log the error details
    return res.status(500).json({
      status: "error",
      message: "An error occurred while fetching results.",
    });
  }
});
