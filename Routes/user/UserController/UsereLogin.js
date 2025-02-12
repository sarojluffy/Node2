const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken")

const UserLogin = async (req, res) => {
  const Usermodel = mongoose.model("UserYourModelName");
  const { email, password } = req.body; // pw  from client end

  console.log(req.body)

  try {
    const useremail = await Usermodel.findOne({
      //find one is used while find is to be done by a unique attribute , and to retrieve just a first document it matches
      email: email,
    });
    if (!useremail) throw "provide a email"; // after the error is thrown it jumps to the catch block 
    const matched = await bcrypt.compare(password, useremail.password);
    if (!matched) throw "email and password doesnt match";


    // for beter security through  "Invalid email or password"  in both if cases
  } catch (e) {
    res.status(400).json({
      message: e,
    });
    return;
  }
  // console.log(useremail.password); // password stored  in database

  // const userpassword = await Usermodel;

  const accesstoken = await jwt.sign({

    email: email,

  }, process.env.verification_salt) //the secret key is to be hidden  

  res.status(200).json({
    status: "Login",
    data: accesstoken
  });
};

module.exports = UserLogin;
