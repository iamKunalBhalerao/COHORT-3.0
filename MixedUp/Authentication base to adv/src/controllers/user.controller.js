const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const findUser = await User.findOne({ email: email });

    if (findUser) {
      throw "User Alredy Exists !!!";
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const createUser = await User.create({
      username,
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      message: "Your are Signed Up.",
      UserData: {
        Username: createUser.username,
        Email: createUser.email,
      },
    });
  } catch (error) {
    res.status(405).json({
      message: "Something Went Wrong !!!",
      Error: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (!user) {
      throw "Invalid Credentials !!!";
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      throw "Password is Incorrect !!!";
    }

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.status(200).json({
      token,
    });
  } catch (error) {
    res.status(405).json({
      message: "Something Went Wrong !!!",
      Error: error,
    });
  }
};

const users = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(403).json({
      message: "Something Went Wrong while getting all users !!!",
      Error: error,
    });
  }
};

const logout = async (req, res) => {};

module.exports = {
  signup,
  signin,
  users,
  logout,
};
