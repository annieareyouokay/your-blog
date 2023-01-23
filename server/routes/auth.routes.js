const express = require("express");
const User = require("../model/User");
const bcrypt = require("bcryptjs");
const { generateUserImage } = require("../utils/helpers");
const tokenService = require("../services/token.service");
const { check, validationResult } = require("express-validator");
const Token = require("../model/Token");

const router = express.Router({ mergeParams: true });

// validate
// email, password ...etc
// check email -> if exists -> throw err
// hashed passoword
// create user
// gen tokens
router.post("/signUp", [
  check("email", "Incorrect email format").isEmail(),
  check("password", "Incorrect password length - should be 8 chars").isLength({
    min: 8,
  }),
  async (req, res) => {
    try {
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            errors: errors.array(),
          },
        });
      }
      body = req.body;
      const { email, password } = body;
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
        ...body,
        password: hashedPassword,
      });

      const tokens = tokenService.generate({ _id: newUser._id });
      await tokenService.save(newUser._id, tokens.refreshToken);

      res.status(201).send({ ...tokens, userId: newUser._id });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
]);

// validate
// find user
// compare pass
// gen tokens
// return data
router.post("/signInWithPassword", [
  check("email", "incorrect email").normalizeEmail().isEmail(),
  check("password", "password cannot be empty").exists(),
  async (req, res) => {
    try {
      const errors = await validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          error: {
            message: "INVALID_DATA",
            code: 400,
            errors: errors.array(),
          },
        });
      }
      body = req.body;
      const { email, password } = body;

      const userExists = await User.findOne({ email });
      if (!userExists) {
        return res.status(400).send({
          error: {
            message: "EMAIL_NOT_FOUND",
            code: 400,
          },
        });
      }

      const passwordIsEqual = await bcrypt.compare(
        password,
        userExists.password
      );
      if (!passwordIsEqual) {
        return res.status(400).send({
          error: {
            message: "INVALID_PASSWORD",
            code: 400,
          },
        });
      }

      const tokens = tokenService.generate({ _id: userExists._id });
      await tokenService.save(userExists._id, tokens.refreshToken);

      res.status(200).send({ ...tokens, userId: userExists._id });
    } catch (error) {
      res.status(500).json({
        message: "Internal server error",
      });
    }
  },
]);

function isTokenInvalid(data, dbToken) {
  return !data || !dbToken || data._id !== dbToken?.user?.toString();
}

router.post("/token", async (req, res) => {
  try {
    const { refresh_token: refreshToken } = req.body;
    const data = tokenService.validateRefreshToken(refreshToken);
    const dbToken = await tokenService.findToken(refreshToken);

    if (isTokenInvalid(data, dbToken)) {
      res.status(401).json({
        message: "Unathorized",
      });
    }
    
    const tokens = tokenService.generate({ _id: data._id });
    await tokenService.save(data._id, tokens.refreshToken);

    res.status(200).send({ ...tokens, userId: data._id });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
