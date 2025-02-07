const { AdminModel } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;

  const admin = await AdminModel.findOne({
    username: username,
    password: password,
  });

  if (admin) {
    next();
  } else {
    res.status(403).json({
      message: "admin Dosent Exists",
    });
  }
}

module.exports = adminMiddleware;
