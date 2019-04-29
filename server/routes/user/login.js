var mongoose = require('mongoose');
var User = require('../../models/UserSchema.js');

module.exports = function (req, res, next) {
  User.authenticate(req.body.username, req.body.password, function (err, user) {
    console.log(user)
    if (err) return next(err);

    else {
      console.log(user);

      res.status(200).json({
        id: user.id,
        name:  user.name,
        success: true,
        message: "Login Successful",
      });

    }
  })
}
