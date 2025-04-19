const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const findUser = await User.findOne({ email: email });

    if (findUser) {
      res.status(403).json({
        message: "User Alredy Exists !!!",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    if (!hashedPassword) {
      res.status(500).json({
        message: "Something went wrong !!!",
      });
    }

    const createUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "User Created Successfully.",
      user: {
        username: createUser.username,
        email: createUser.email,
      },
    });
  } catch (error) {
    res.status(406).json({
      message: "Something Went Wrong !!!",
      Error: error.message,
    });
  }
};

const signin = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email });

  if (!user) {
    res.status(404).json({
      message: "User Not Found !!!",
    });
  }

  const comparePassword = await bcrypt.compare(password, user.password);

  if (!comparePassword) {
    res.status(403).json({
      message: "Invalid Credentials !!!",
    });
  }

  const token = await jwt.sign({ _id: user?._id }, process.env.TOKEN_SECRET);

  if (!token) {
    res.status(503).json({
      message: "Error while creting token !!!",
    });
  }

  res.status(200).json({
    message: "Token is generated successfully.",
    token: token,
  });
};

module.exports = {
  signup,
  signin,
};
