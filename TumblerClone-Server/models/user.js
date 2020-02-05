const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    email:{
        type: String,
        unique: true,
        required: true
    },
    profileImage:{
        type:String
    },
    password:{
        type: String,
        required: true
    }
});

userSchema.pre("save", async function(next){
    try{
        if(!this.isModified("password")){
            return next();
        }
        let hashedPassword = await bcrypt.hash(this.password, 10);
        this.password = hashedPassword;
        return next();
    }catch(err){
        return next(err);
    }
});

userSchema.methods.comparePasswords = async function (candidatePassword, next){
    try{
        return await bcrypt.compare(candidatePassword, this.password);
    }catch(err){
        return next(err);
    }
}

const User = mongoose.model("User", userSchema);
module.exports = User;
