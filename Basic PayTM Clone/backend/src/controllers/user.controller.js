import zod from "zod";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { cookieOptions } from "../config.js";
import User from "../models/user.model.js";
import Account from "../models/account.model.js";

const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    const requireBody = zod.object({
      firstName: zod.string().min(3).max(100),
      lastName: zod.string().min(3).max(100),
      email: zod.string().min(3).max(100).email(),
      password: zod.string().min(6).max(150),
    });

    const parseRequireBody = requireBody.safeParse(req.body);

    if (!parseRequireBody.success) {
      throw "Invalid Credentials !!!";
    }

    const findUser = await User.findOne({ email: email });

    if (findUser) {
      throw "User is Alredy Exists !!!";
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      firstName,
      lastName,
      email,
      password: hashedPassword,
    });

    const userId = user?._id;

    const account = await Account.create({
      userId,
      balance: 1000,
    });

    const accessToken = await jwt.sign(
      {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
      },
      process.env.ACCESS_TOKEN_JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIREY }
    );

    const refreshToken = await jwt.sign(
      {
        _id: user?._id,
        email: user?.email,
      },
      process.env.REFRESH_TOKEN_JWT_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIREY }
    );

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    res
      .status(200)
      .cookie("acceessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({
        message:
          "You are Successfully Signed Up || With 1000 Rs. Account Bonus.",
        user,
        account,
      });
  } catch (error) {
    res.status(403).json({
      message: "Error while Creating User !!!",
      Error: error,
    });
  }
};

const signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const requireBody = zod.object({
      email: zod.string().min(3).max(100).email(),
      password: zod.string().min(6).max(150),
    });

    const parseRequireBody = requireBody.safeParse(req.body);

    if (!parseRequireBody.success) {
      throw "Invalid Credentials !!!";
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      throw "User Wtih this Email Not Found !!!";
    }

    const comparePassword = await bcrypt.compare(password, user.password);

    if (!comparePassword) {
      throw "Password is Incorrect !!!";
    }

    const accessToken = await jwt.sign(
      {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
      },
      process.env.ACCESS_TOKEN_JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIREY }
    );

    const refreshToken = await jwt.sign(
      {
        _id: user?._id,
        email: user?.email,
      },
      process.env.REFRESH_TOKEN_JWT_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIREY }
    );

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    res
      .status(200)
      .cookie("acceessToken", accessToken, cookieOptions)
      .cookie("refreshToken", refreshToken, cookieOptions)
      .json({
        message: "You Are Signed In SuccessFUlly.",
        user,
        accessToken,
        refreshToken,
      });
  } catch (error) {
    res.status(403).json({
      message: "Error While Signin In User !!!",
      Error: error,
    });
  }
};

const refreshAccessAndRefreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

    if (!refreshToken) {
      throw "Refresh Token is Not Found !!!";
    }

    const { err, decoded } = await jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_JWT_SECRET,
      function (err, decoded) {
        return { err, decoded };
      }
    );

    if (err) {
      throw `Invalid RefreshToken !!! Error : ${err}`;
    }

    const user = await User.findById(decoded?._id);

    if (!user) {
      throw "User Not Found !!!";
    }

    if (user?.refreshToken !== refreshToken) {
      throw "RefresHToken is Not Valid !!!";
    }

    const AccessToken = await jwt.sign(
      {
        _id: user?._id,
        firstName: user?.firstName,
        lastName: user?.lastName,
        email: user?.email,
      },
      process.env.ACCESS_TOKEN_JWT_SECRET,
      { expiresIn: process.env.ACCESS_TOKEN_EXPIREY }
    );

    const RefreshToken = await jwt.sign(
      {
        _id: user?._id,
        email: user?.email,
      },
      process.env.REFRESH_TOKEN_JWT_SECRET,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIREY }
    );

    res
      .clearCookie("accessToken", cookieOptions)
      .clearCookie("refreshToken", cookieOptions);

    user.refreshToken = RefreshToken;
    await user.save({ validateBeforeSave: false });

    res
      .status(200)
      .cookie("acceessToken", AccessToken, cookieOptions)
      .cookie("refreshToken", RefreshToken, cookieOptions)
      .json({
        message: "You Are Signed In SuccessFUlly.",
        user,
        AccessToken,
        RefreshToken,
      });
  } catch (error) {
    res.status(502).json({
      message: "Some Error While Refreshing Token !!!",
      Error: error,
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const { firstName, lastName, email } = req.body;
    const userId = req.user?._id;

    const requireBody = zod.object({
      firstName: zod.string().min(3).max(100),
      lastName: zod.string().min(3).max(100),
      email: zod.string().min(3).max(100).email(),
    });

    const parseRequireBody = requireBody.safeParse(req.body);

    if (!parseRequireBody.success) {
      throw "Invalid Credentials !!!";
    }

    const user = await User.findByIdAndUpdate(userId, req.body, { new: true });

    res.status(200).json({
      message: "Your Info. is Updated Successfully",
      user,
    });
  } catch (error) {
    res.status(403).json({
      message: "Error while Updating User !!!",
      Error: error,
    });
  }
};

const searchFriend = async (req, res) => {
  try {
    const filter = req.query.filter;

    const users = await User.find({
      $or: [
        {
          firstName: {
            $regex: filter,
          },
        },
        {
          lastName: {
            $regex: filter,
          },
        },
      ],
    });

    res.status(200).json({
      user: users.map((user) => ({
        FirstName: user.firstName,
        LastName: user.lastName,
        _id: user._id,
      })),
    });
  } catch (error) {
    res.status(403).json({
      message: "Error While Finding User",
      Error: error,
    });
  }
};

const allUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password -refreshToken");

    res.status(200).json({ users });
  } catch (error) {
    res.status(403).json({
      message: "Error While Finding User",
      Error: error,
    });
  }
};

export {
  signup,
  signin,
  refreshAccessAndRefreshToken,
  updateUser,
  searchFriend,
  allUsers,
};
