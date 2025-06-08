import mongoose from "mongoose";
import Account from "../models/account.model.js";

const getUserBalance = async (req, res) => {
  try {
    const userId = req.user._id;

    const user = await Account.findOne({ userId: userId });

    res.status(200).json({
      messsage: "User Account Details Fetched Successfully",
      balance: user.balance,
    });
  } catch (error) {
    res.status(403).json({
      message: "Error while Fetching User Account Details !!!",
      Error: error,
    });
  }
};

const transferFunds = async (req, res) => {
  try {
    // Starting the session
    const session = await mongoose.startSession();

    // Starting the transactiojn
    session.startTransaction();

    const { amount, to } = req.body;

    const account = await Account.findOne({ userId: req.user._id }).session(
      session
    );

    if (account.balance < amount) {
      await session.abortTransaction();
      res.status(400).json({
        message: "Insufficiant Funds !!!",
      });
    }

    const toAccount = await Account.findOne({ userId: to }).session(session);

    if (!toAccount) {
      await session.abortTransaction();
      res.status(404).json({
        message: "Invalid Account !!!",
      });
    }

    // Fund Transfer
    await Account.updateOne(
      { userId: req.user._id },
      { $inc: { balance: -amount } }
    ).session(session);
    await Account.updateOne(
      { userId: to },
      { $inc: { balance: amount } }
    ).session(session);

    // Commiting the transactiojn
    session.commitTransaction();

    res.status(200).json({
      message: "Funds Transfer Successfully",
      amount: amount,
    });
  } catch (error) {
    res.status(403).json({
      message: "Error while Tranfering Funds !!!",
      Error: error,
    });
  }
};

export { getUserBalance, transferFunds };
