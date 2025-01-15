const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const UserLogin = async (req, res) => {
  const Usermodel = mongoose.model("UserYourModelName");
  const { email, password } = req.body; // pw  from client end

  try {
    const useremail = await Usermodel.findOne({
      //find one is used while find is to be done by a unique attribute , and to retrieve just a first document it matches
      email: email,
    });
    if (!useremail) throw "provide a email";
    const matched = await bcrypt.compare(password, useremail.password);
    if (!matched) throw "email and password doesnt match";
  } catch (e) {
    res.status(400).json({
      message: e,
    });
    return;
  }
  // console.log(useremail.password); // password stored  in database

  // const userpassword = await Usermodel;

  res.status(200).json({
    status: "Login",
  });
};

module.exports = UserLogin;
