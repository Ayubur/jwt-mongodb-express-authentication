const withRequestAndResponse = require("../lib/middleware/RequestAndResponseHandler");
const authenticationValidators = require("../lib/validators/authentication");
const loginService = require("../services/login");

const handler = async (req, res) => {
  switch (req.method) {
    case "POST":
      authenticationValidators.loginValidator(req, res);
      return await loginService.login(req, res);
  }
}

module.exports = withRequestAndResponse(handler);