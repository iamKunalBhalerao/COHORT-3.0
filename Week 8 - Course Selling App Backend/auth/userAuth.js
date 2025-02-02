const jwt = require("jsonwebtoken");
const jwt_password = "thisisverysecretpasswrd";

function userAuth(req, res, next) {
  const token = req.headers.token;

  const decodedData = jwt.verify(token, jwt_password);

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
