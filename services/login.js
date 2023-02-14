const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwtTokenGenerator = require("../lib/heplers/jwtTokenGenerator");

exports.login = async (req, res) => {
  const { email, password } = req.body || {};

  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    res.status(400);
    throw new Error("Invalid credentials")
  }

  const jwtToken = await jwtTokenGenerator(user);

  return {
    name: user.name,
    email,
    accessToken: jwtToken
  };

}