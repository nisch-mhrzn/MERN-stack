const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  //blueprint of registration form
  username: {
    type: String,
    required: true, //not empty
  },
  email: {
    type: String,
    required: true,
    unique: true, //unique email
  },
  password: {
    type: String,
    required: true,
    minlength: 7, //minimum 8 characters
  },
  phone: {
    type: String,
    required: true,
    // unique: true, //unique phone number
  },
  isAdmin: {
    type: Boolean,
    default: false, //default is not admin
  },
});

//secure the password
userSchema.pre("save", async function (next) {
  // console.log("pre method",this);
  const user = this;
  if (user.isModified("password")) {
    next();
  }
  try {
    const saltRound = await bcrypt.genSalt(10); //hash password
    const hash_password = await bcrypt.hash(user.password, saltRound);
    user.password = hash_password;
  } catch (error) {
    console.error(error);
    next(error);
  }
});

userSchema.methods.generateToken = function () {
  try {
    return jwt.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SELECT_KEY,
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
//define the model or collection name
const User = mongoose.model("User", userSchema); //automatically db saves it as users

module.exports = User;
