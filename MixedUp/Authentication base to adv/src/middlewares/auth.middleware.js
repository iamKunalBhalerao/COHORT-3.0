const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (decodedData) {
      req.userId = decodedData.id;
      next();
    }
  } catch (error) {
    res.status(409).json({
      message: "Unauthorized Request !!!",
      Error: error,
    });
  }
};

module.exports = authMiddleware;
