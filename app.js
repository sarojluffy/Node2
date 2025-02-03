const express = require("express");
const app = express();
const mongoose = require("mongoose");
const UserRouter = require("./Routes/user/User.Routes");
require("dotenv").config();
require("./models/User.models");
app.use(express.json()); //middleware for body , body meaning the data we sent in payload in postman used 
// express.ßjson() converts this string into a JavaScript object so you can easily work with it in your app.


// middle wares are dealt first before they run the code below them 

mongoose
  .connect(process.env.mongo_connect, {})
  .then(() => {
    console.log("db connected");
  })
  .catch((e) => {
    console.log("db not connected")
  });

//Routes...
app.use("/users", UserRouter); //middleware for routessss ,whole app can access it 

app.listen(8000, () => {
  console.log("server started");
});
