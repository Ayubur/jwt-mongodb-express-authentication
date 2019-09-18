const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;

const saltRounds=10;

//Define our model
const userSchema = new Schema({
    email:{
        type:String,
        unique:true,
        lowercase:true
    },
    password:{
        type:String
    }
})

userSchema.pre('save', function (next) { 

    const user =this;
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err){
                return next(err);
            }
            user.password=hash;
            next();
        });
    });
 })
//Define our model class

const ModelClass = mongoose.model('users',userSchema);


// Export the model class
module.exports = ModelClass

