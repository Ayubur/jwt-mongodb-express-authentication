const registrationController = require("./controllers/register");

module.exports= (app)=> {
  app.post("/register",registrationController)
}