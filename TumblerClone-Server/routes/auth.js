const express = require("express");
const Router = express.Router();
const {signin, signup} = require("../handlers/auth");

Router.route('/signin').post(signin);
Router.route('/signup').post(signup);

module.exports = Router;