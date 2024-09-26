const express = require("express");
const jwt = require("jsonwebtoken");
const secretKey = "mysecretkey";

function generateToken(user) {
  if (!user.email || !user._id) return null;
  return jwt.sign({ _id: user._id, email: user.email }, secretKey, {
    expiresIn: "1h",
  });
}

function verify(token) {
  if (!token) return null;

  try {
    return jwt.verify(token, secretKey);
  } catch (err) {
    return null;
  }
}

module.exports = {
  generateToken,
  verify,
};
