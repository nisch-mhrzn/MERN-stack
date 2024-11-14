const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({//blueprint of registration form
    username :{
        type: String,
        required: true,//not empty
    },
    email : {
        type: String,
        require: true,
        unique: true, //unique email
    },
    password : {
        type: String,
        required: true,
        minlength: 8, //minimum 8 characters
    },
    phone:{
        type: String,
        required: true,
        unique: true, //unique phone number
    },
    isAdmin:{
        type: Boolean,
        default: false, //default is not admin

    }
})

//define the model or collection name
const User = new mongoose.Model("User",userSchema);//automatically db saves it as users

module.exports = User;


