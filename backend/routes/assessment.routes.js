const {verifyAdminToken, verifyToken} = require('../middleware/index');

module.exports = app => {
    const assessmentController = require("../controllers/assessmentController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createAssessment", verifyAdminToken, assessmentController.createAssessment);
    router.get("/getAllAssessment", verifyToken, assessmentController.getAllAssessment);
    router.get("/getAssessment/:id", verifyToken, assessmentController.getAssessment);
  
    app.use('/assessment', router);
  };
  