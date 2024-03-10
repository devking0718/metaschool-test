const {verifyAdminToken, verifyToken} = require('../middleware/index');

module.exports = app => {
    const questionController = require("../controllers/questionController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createQuestion", verifyAdminToken, questionController.createQuestion);
  
    app.use('/question', router);
  };
  