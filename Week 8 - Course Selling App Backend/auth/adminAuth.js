const jwt = require("jsonwebtoken");
const JWT_ADMIN_PASSWORD = "ThisisAdminPassword@789";

function adminAuth(req, res, next) {
  const token = req.headers.token;

  const descodedData = jwt.verify(token, JWT_ADMIN_PASSWORD);

  if (descodedData) {
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
  jwt_password,
};
