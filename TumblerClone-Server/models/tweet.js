const mongoose = require('mongoose');
const User = require('./user');

const tweetSchema = mongoose.Schema({
    text:{
        type: String,
        required: true,
        maxlength: 150
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },    
},
    {
        timestamps: true
    }
);

tweetSchema.pre("remove", async function(next){
    try{
        let foundUser = await User.findOne(this.user);
        //found user, lets erase the message id it has stored
        foundUser.tweets.remove(this.id);
        //remove does not save, let's call save on user (async)
        await foundUser.save();
        return next(); //go next
    }catch(err){
        //if this point was reached, then user couldnt be found or message couldnt be deleted
        //or some other freak accident
        next({
            status: 400,
            message: err.message
        });
    }
});

const Tweet = mongoose.model("Tweet", tweetSchema);

module.exports = Tweet;