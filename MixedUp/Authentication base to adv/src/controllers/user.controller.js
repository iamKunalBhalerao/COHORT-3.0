const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const findUser = await User.findOne({ email: email });

    if (findUser) {
      throw "User Alredy Exists !!!";
    }

    const createUser = await User.create({
      username,
      email,
      password,
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
    const token = req.headers.Authorization;
    const decodedData = await jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET
    );

    console.log(decodedData.email);
    // if (decodedData) {
    // }

    const users = await User.find({});

    res.status.json({
      users,
    });
  } catch (error) {
    res.status(408).json({
      message: "Something Went Wrong !!!",
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
