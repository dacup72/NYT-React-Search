
const db = require("../models");

module.exports = {
  create: function (req, res) {
    if (req.body.email &&
      req.body.username &&
      req.body.password &&
      req.body.passwordConf) {
      var userData = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password,
        passwordConf: req.body.passwordConf
      }
      //use schema.create to insert data into the db
      db.User.create(userData, function (err, user) {
        if (err) {
          return next(err)
        } else {
          console.log("submitted to database");
          console.log(user);
          return res.redirect('/home');
        }
      });
    }
  }
};