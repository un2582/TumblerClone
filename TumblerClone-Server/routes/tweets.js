const express = require('express');
const Router = express.Router({mergeParams: true});
const {createTweet, deleteTweet, getTweet} = require('../handlers/tweets');

//API ROUTE - /api/users/:id/messages
Router.route("/")
    .post(createTweet);

//API ROUTE - /api/users/:id/messages/:tweet_id
Router.route("/:tweet_id")
    .get(getTweet)
    .delete(deleteTweet);

module.exports = Router;