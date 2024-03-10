const {verifyAdminToken, verifyToken} = require('../middleware/index');

module.exports = app => {
    const answerController = require("../controllers/answerController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createAnswer", verifyAdminToken, answerController.createAnswer);
  
    app.use('/answer', router);
  };
  