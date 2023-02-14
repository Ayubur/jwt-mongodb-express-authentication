const registrationController = require("./controllers/register");
const loginController = require("./controllers/login");

module.exports= (app)=> {
  app.post("/auth/register",registrationController);
  app.post("/auth/login", loginController);
}