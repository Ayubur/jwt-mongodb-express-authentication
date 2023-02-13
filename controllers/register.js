const registerService = require("../services/register");
const withRequestAndResponse = require("../lib/middleware/RequestAndResponseHandler");
const authenticationValidators = require("../lib/validators/authentication");

const handler = async(req, res)=> {
  switch(req.method){
    case "POST":
      authenticationValidators.registrationValidator(req, res);
      return await registerService.register(req, res);
  }
}

module.exports = withRequestAndResponse(handler)