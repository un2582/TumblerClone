const jwt = require('jsonwebtoken');
const db = require('../models');


exports.signin = async function(req, res, next){
    try{
        let foundUser = await db.User.findOne({email: req.body.email});
        let isMatch = foundUser.comparePasswords(req.body.password);
        if(isMatch){
            let {id, username, profileImage} = foundUser;
            let token = jwt.sign({
                id,
                username,
                profileImage
            },process.env.SECRET_KEY);
            return res.status(200).json({
                id,
                username,
                profileImage,
                token
            });
        }else{
            return next({
                status:400,
                message: err.message
            })
        }
    }catch(err){
        return next({
            status:400,
            message: err.message
        });
    }
}


exports.signup = async function(req, res, next){
    try{
        let newUser = await db.User.create(req.body);
        let {id, username, profileImage} = newUser;
        let token = jwt.sign({
            id,
            username,
            profileImage
        });
        return res.status(200).json({
            id,
            username,
            profileImage,
            token
        }, process.env.SECRET_KEY);
    }catch(err){
        if(err.code === 11000){
            err.message = "Username/Email already taken";
        }
        return next({
            status:400,
            message: err.message
        });
    }

}