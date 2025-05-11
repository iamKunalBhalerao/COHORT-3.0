const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// Method for generating Access and Refresh Token

const generateAccessAndRefreshToken = async (userId) => {
  try {
    const user = await User.findById(userId);

    const accessToken = await user.generateAccessToken();
    const refreshToken = await user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return {
      accessToken,
      refreshToken,
    };
  } catch (error) {
    res.status(500).json({
      message: "Error While generating Access and Refresh Token !!!",
      Error: error,
    });
  }
};

const signup = async (req, res) => {
  // get user details
  // find in DB is their any existing user si available with same credentials
  // hash passwor dusing bcrypt libreary
  // create user with credentials send by user with hashed password
  // send the required response to frintend

  try {
    const { username, email, password } = req.body;

    // validate user inputs with zod

    if (!username || !email || !password) {
      throw "Username, Email, and Password are required!";
    }

    const findUser = await User.findOne({
      $or: [{ username }, { email }],
    });

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
    res.status(400).json({
      message: "Something Went Wrong !!!",
      Error: error,
    });
  }
};

const signin = async (req, res) => {
  // get email and password from user
  // check if email aand password is correct or not
  // if incorrect then send error email or password is incoorect
  // if correct then compare hashed password and validate it
  // if password is correct
  // then generate access token and refres token
  // and save it in cookie header or localstorage

  try {
    const { email, password } = req.body;

    // validate credentials with zod

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).json({
        message: "User Does not Exists !!!",
      });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    // const validatePassword = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      throw "Invalid Password";
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
      user._id
    );

    const logedInUser = await User.findById(user._id).select(
      "-password -refreshToken"
    );

    const options = {
      httpOnly: true,
      secure: true,
    };

    return res
      .status(200)
      .cookie("accessToken", accessToken, options)
      .cookie("refreshToken", refreshToken, options)
      .json({
        message: "User Logged In Successfully",
        logedInUser,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    res.status(400).json({
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

const logout = async (req, res) => {
  // finding user and updated their refreshToken in DB as undefined
  try {
    await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: { refreshToken: undefined },
    },
    {
      new: true,
    }
  );

  const options = {
    httpOnly: true,
    secure: true,
  };

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json({
      message: "User is Logged Out !",
    });
  } catch (error) {
    res.status(401).json({
      message: "Something Went Wrong !!!"
    })
  }
  
};

module.exports = {
  signup,
  signin,
  users,
  logout,
};
