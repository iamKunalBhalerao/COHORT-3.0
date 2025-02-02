const jwt = require("jsonwebtoken");
const JWT_USER_PASSWORD = "ThisisUserPassword@890";

function userAuth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, JWT_USER_PASSWORD);

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
  userAuth,
  jwt_password,
};
