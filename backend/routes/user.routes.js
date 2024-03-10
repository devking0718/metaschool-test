module.exports = app => {
  const userController = require("../controllers/userController.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/signUp", userController.signUp);
  router.post("/signIn", userController.signIn);

  app.use('/user', router);
};
