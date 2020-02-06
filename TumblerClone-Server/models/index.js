const mongoose = require("mongoose");
const User = require("./user");
const Tweet = require("./Tweet");

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/TumblerClone',{
    keepAlive: true
});

module.exports.User = User;
module.exports.Tweet = Tweet;