const {verifyAdminToken, verifyToken} = require('../middleware/index');

module.exports = app => {
    const userAttemptController = require("../controllers/userAttemptController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createAttempt", verifyToken, userAttemptController.createAttempt);
    router.get("/getAllAttempt", verifyAdminToken, userAttemptController.getAllAttempt);
  
    app.use('/attempt', router);
  };
  