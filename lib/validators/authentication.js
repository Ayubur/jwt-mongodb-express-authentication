const emailValidator = require("../heplers/emailValidator");

exports.registrationValidator = (req, res) => {
  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    res.status(400);
    throw new Error("Please add all field");
  }

  if (email == "" || password == "" || name == "") {
    res.status(400);
    throw new Error("Fields can not be empty")
  }

  if (!emailValidator(email)) {
    res.status(400);
    throw new Error("Invalid email")
  }

  if (password?.length < 6) {
    res.status(400);
    throw new Error("Password should be atleast 6 characters long")
  }
}