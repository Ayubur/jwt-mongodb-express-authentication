const User = require('../models/users');
const jwt = require('jwt-simple');
const config = require('../config');


function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub:user.id, iat:timestamp},config.secret);
}

exports.signup = function(req,res,next){
    
    const email = req.body.email;
    const password = req.body.password;

    // see if a user with this email exists
   
    User.findOne({email:email}, function (err,existingUser) { 

        if(err){
            return next(err);
        }
        //If a user with email does exist, return a error

        if(existingUser){
           return res.status(422).send({error:'Email already in use'});
        }

        //If a user eith email does not exists , create a new user
        const user = new User({
            email:email,
            password:password
        })

        user.save(function(err){
            if(err){
                return next(err);
            }

            //Respond to request indicating user is created
            res.send({
                user: user,
                token:tokenForUser(user)
            });
        })
     });


}