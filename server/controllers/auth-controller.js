//disptach tells what to do
// Controllers: Contain the business logic for handling incoming requests and generating responses. They perform tasks like querying the database, processing data, and returning responses to the client.
const User = require("../models/user-config");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).json({ message: "Home endpoint hit", data: req.body });
  } catch (error) {
    console.error("Error in home endpoint:", error);
    res.status(500).json({ error: "Server Error" });
  }
};


const register = async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, phone, password } = req.body;
    const userExist = await User.findOne({ email }); //check if email exists
    if (userExist) {
      return res.status(400).json({ message: "email already exist" });
    }
    const hash_password = await bcrypt.hash(password, 10);
    const userCreated = await User.create({
      username,
      email,
      phone,
      password: hash_password,
    });

    res
      .status(201)
      .json({
        msg: "registration successful",
        token: await userCreated.generateToken(),
        userId: userCreated._id.toString(),
      });
  } catch (error) {
    console.error(error);
    res.status(400).send("Server Error");
  }
};

//USEer login logic
const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    //email valid or not
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (!userExist) {
      return res.status(400).json({ message: "Invalid email or password" });
    }
    //comapre password
    const user = await bcrypt.compare(password,userExist.password);
    if(user){
      res
      .status(200)
      .json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }else{
     res.status(401).json({ message: "Invalid email or password" });
    }
    

  } catch {
    res.status(500).send("Server Error");
  }
};
module.exports = { home, register,login };

