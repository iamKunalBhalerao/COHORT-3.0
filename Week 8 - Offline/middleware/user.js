const { UserModel } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  const user = await UserModel.findOne({
    username: username,
    password: password,
  });

  if (user) {
    next();
  } else {
    res.status(403).json({
      message: "User Dosent Exists",
    });
  }
}

module.exports = userMiddleware;
