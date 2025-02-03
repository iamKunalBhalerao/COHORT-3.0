const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config();
// const { JWT_ADMIN_PASSWORD } = require("../config");

function adminAuth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.status(403).json({
      message: "Invalid Credeintials",
    });
  }
}

module.exports = {
  adminAuth,
};
