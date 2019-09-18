const authentication= require('./controllers/authentication');
module.exports = (app)=>{

    app.post("/signup", authentication.signup);
}