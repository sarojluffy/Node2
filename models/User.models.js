const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
      unique: true, //cannot be more than one email
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: String,
    },
    balance: {
      type: String,
      required: [true, "balance is required"],
    },
  },
  { timestamps: true } // shows both created and updated
);

const UserModel = mongoose.model("UserYourModelName", UserSchema); // provide a name to the model and pass the schema
module.exports = UserModel;
