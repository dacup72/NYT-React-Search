const router = require("express").Router();
const articleRoutes = require("./articles");
const nytRoutes = require("./nyt");
const userRoutes = require("./user");


router.use("/articles", articleRoutes);

router.use("/nyt", nytRoutes);

router.use("/user", userRoutes);

module.exports = router;
