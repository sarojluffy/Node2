const express = require("express");
const UserRegister = require("./UserController/UserRegister");
const UserLogin = require("./UserController/UsereLogin");
const userDashboard = require("./UserController/userDashboard");
const userAuth = require("../../middleware/userauth")

const UserRouter = express.Router();
require("dotenv").config();

UserRouter.post("/register", UserRegister);
UserRouter.post("/login", UserLogin);



UserRouter.use(userAuth)
UserRouter.get("/dashboard", userDashboard)

module.exports = UserRouter;
