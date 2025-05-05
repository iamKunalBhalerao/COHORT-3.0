const jwt = require("jsonwebtoken");
const ACCESS_TOKEN_SECRET = "THISISVERYHIGHSECURITYTOKEN1567";
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
      throw "User Not Found !!!";
    }

    if (!(password == user.password)) {
      throw "password is Incorrect !!!";
    }

    const token = await jwt.sign({ email }, ACCESS_TOKEN_SECRET);

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
  const token = req.headers.Authorization;

  try {
    const decodedData = jwt.verify(token, ACCESS_TOKEN_SECRET);

    if (decodedData) {
      console.log(decodedData.username);
    }

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
