import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandeler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandeler(400, "All fields are required"));
  }

  const hashedpassword = bcryptjs.hashSync(password, 10);

  const newUser = new User({
    username,
    email,
    password: hashedpassword,
  });

  try {
    await newUser.save();
    res.json({ message: "Signup successfully" });
  } catch (error) {
    console.log("333");
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password || email === "" || password === "") {
    return next(errorHandeler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandeler(400, "User not found"));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      console.log("ererer");
      return next(errorHandeler(400, "invalid password"));
    }
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);

    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
