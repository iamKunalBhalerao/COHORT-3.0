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

const signin = async (req, res) => {};

const logout = async (req, res) => {};

module.exports = {
  signup,
  signin,
  logout,
};
