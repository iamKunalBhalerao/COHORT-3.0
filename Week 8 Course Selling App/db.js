const mongoose = require("mongoose");
const { buffer } = require("stream/consumers");

const Schema = mongoose.Schema;
const model = mongoose.model;

const User = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

const Admin = new Schema({
  email: { type: String, unique: true },
  password: String,
  name: String,
});

const Course = new Schema({
  title: String,
  description: String,
  thumbnail: {
    data: buffer,
    contentType: String,
  },
  pricing: String,
});

const Purchase = new Schema({});
