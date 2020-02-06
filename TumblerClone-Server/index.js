require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const errorHandler = require("./handlers/errors");
const authRoutes = require("./routes/auth");
const tweetRoutes = require("./routes/tweets");
const {loginRequired, ensureCorrectUser} = require("./middleware/auth");
const db = require("./models");
const PORT = 8080;

app.use(bodyParser({extended: true}));
app.use(bodyParser.json());
app.use("/api/auth", authRoutes);
app.use("/api/users/:id/messages", loginRequired, ensureCorrectUser, tweetRoutes);
app.get("/api/messages", loginRequired, async function(req, res, next){
    try{
        let tweets = await db.Tweet.find().sort({createdAt: "desc"}).populate("user",{username: true, profileImage: true});
        res.status(200).json(tweets);
    }catch(err){
        return next(err);
    }
});
//if routes make it to here, then it means route doesn't exist
//create a not found error and return next(err) so it goes to error handler
//next only takes one parameter and that's how it knows it has an error
app.use(function(req, res, next){
    let err = new Error("Not Found");
    err.status = 404;
    return next(err);
});

app.use(errorHandler);

app.listen(PORT, function(){
    console.log(`Listening to ${PORT}`);
});