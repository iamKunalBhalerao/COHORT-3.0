const jwt = require("jsonwebtoken");
const jwt_password = "Thisisverysecretpassworddontseeit";

function auth(req, res, next) {
  const token = req.headers.token;
  const decodedData = jwt.verify(token, jwt_password);

  if (decodedData) {
    req.userId = decodedData.id;
    next();
  } else {
    res.json(403).json({
      msg: "Incorrect Credentials",
    });
  }
}

module.exports = {
  auth,
  jwt_password,
};
