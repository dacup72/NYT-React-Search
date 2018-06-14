const router = require("express").Router();
const userController = require("../../controllers/userController.js");

// Matches with "/api/user"
router
  .route("/")
  .post(userController.create);

module.exports = router;