const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.Authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
      return res.status(403).json({
        message: "Auth Header not Found !!!",
      });
    }

    const token = authHeader.split("")[1];

    const decoded = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_JWT_SECRET
    );

    req.userId = decoded?._id;

    next();
  } catch (error) {
    console.log("Something Went Wrong !!!");
  }
};
