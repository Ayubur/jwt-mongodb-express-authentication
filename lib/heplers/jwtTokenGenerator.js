const uuid = require("uuid");
const jwt = require("jsonwebtoken");

module.exports = (user) => {
  const { email, name } = user;
  const accessId = uuid.v4();

  const jwtToken = jwt.sign(
    {
      email,
      name,
      accessId,
    },
    process.env.AUTH_SECRET,
    {
      expiresIn: "8h",
    }
  );

  return jwtToken;

}