const db = require("../models");

exports.createTweet = async function(req, res, next){
    try{
        let newTweet = await db.Tweet.create({
            text: req.body.text,
            user: req.params.id
        });
        let {id} = newTweet;
        let user = await db.User.findById(req.params.id);
        user.tweets.push(id);
        await user.save();
        let foundTweet = await db.Tweet.findById(id).populate("user", {
            username: true,
            profileImage: true
        });
        return res.status(200).json({
            tweet: foundTweet
        });
    }catch(err){
        return next({
            status: 400,
            message: err.message
        })
    }

};

exports.deleteTweet = async function(req, res, next){
    try{
        let foundTweet = await db.Tweet.findById(req.params.tweet_id);
        await foundTweet.remove();
        return res.status(200).json(foundTweet);
    }catch(err){
        return next(err);
    }
};

exports.getTweet = async function(req, res, next){
    try{
        let foundTweet = await db.Tweet.findById(req.params.tweet_id);
        return res.status(200).json(foundTweet);
    }catch(err){
        next(err);
    }
};