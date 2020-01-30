const mongoose = require("mongoose");
const User = require("./user");

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/TumblerClone',{
    keepAlive: true
});

module.exports.User = User;