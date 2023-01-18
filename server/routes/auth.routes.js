const express = require("express");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { generateUserImage } = require("../utils/helpers");
const tokenService = require("../services/token.service");

const router = express.Router({ mergeParams: true });

// email, password ...etc
// check email -> if exists -> throw err
// hashed passoword
// create user
// gen tokens
router.post("/signUp", async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({
        error: {
          message: "EMAIL_EXISTS",
          code: 400,
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await User.create({
      ...generateUserImage(),
      ...req.body,
      password: hashedPassword,
    });

    const tokens = tokenService.generate({ _id: newUser._id });
    res.status(201).send({ ...tokens, userId: newUser._id });

  } catch (error) {
    req.status(500).json({
      message: "Internal server error",
    });
  }
});
router.post("/signInWithPassword", async (req, res) => {});
router.post("/token", async (req, res) => {});

module.exports = router;
