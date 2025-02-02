const jwt = require("jsonwebtoken");
const jwt_password = "thisisverysecretpasswrd";

function adminAuth(req, res, next) {
  const token = req.headers.token;

  const descodedData = jwt.verify(token, jwt_password);

  if (descodedData) {
    req.userId = decodedData.id;
    res.status(200).json({
      token,
    });
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
