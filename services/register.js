const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.register = async (req, res) => {
  const { email, password, name } = req.body || {};
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("Email already taken, please try another!")
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  let user;
  user = await User.create({
    email,
    password: hashedPassword,
    name,
  });

  if (!user) {
    res.status(400);
    throw new Error("Invalid user data");
  }
  res.status(201);
  return;
}

