const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserRegister = async (req, res) => {
  const Usermodel = mongoose.model("UserYourModelName"); //imported adter the path is directed to this route only
  // it is also called  10 salt rounds
  const { name, email, password, address, balance } = req.body;

  const encryptedPW = await bcrypt.hash(password, 10); // 10 refers to 10 times the hash is performed , a random salt is generated and  added to the user password , the combination is then hashed , in the second round a new salt is added to the hashed value from round 1 and so on

  try {
    const CreatedUSer = await Usermodel.create({
      name, // key and val same
      email,
      password: encryptedPW, //encrypted during registration
      address,
      balance,
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
    return;
  }

  res.status(200).json({
    status: "Register",
  });
};

module.exports = UserRegister;
