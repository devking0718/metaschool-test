const {verifyAdminToken, verifyToken} = require('../middleware/index');

module.exports = app => {
    const sectionController = require("../controllers/sectionController");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/createSection", verifyAdminToken, sectionController.createSection);
    router.get("/getAllSection/:id", verifyToken, sectionController.getAllSection);
  
    app.use('/section', router);
  };
  