// make server neat and clean
require('dotenv').config();//to use dotenv
const express = require("express");
const app = express();
const router = require("./router/auth-router");
const connectDb = require("./utils/database");
const errorMiddleware = require("./middlewares/error-middlewares")

app.use(express.json());//important to place this beforea any routes that need to handle JSON data in request body
//Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);//Midlleware

app.use(errorMiddleware);

// make server listen
const PORT = 5000;
//start server if and only if data base is connected
connectDb().then(()=>{
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
      });
      
});

