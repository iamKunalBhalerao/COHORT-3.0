const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (decodedData) {
      req.userID = decodedData.id;
      next();
    }
  } catch (error) {
    res.status(403).json({
      message: "Unauthorized Request!!!",
      Error: error,
    });
  }
};

module.exports = authMiddleware;
