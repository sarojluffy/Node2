const express = require("express");
const UserRegister = require("./UserController/UserRegister");
const UserLogin = require("./UserController/UsereLogin");
const UserRouter = express.Router();
require("dotenv").config();

UserRouter.post("/register", UserRegister);
UserRouter.post("/login", UserLogin);

module.exports = UserRouter;
