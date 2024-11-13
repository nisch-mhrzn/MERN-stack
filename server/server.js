// make server neat and clean
const express = require("express");
const app = express();

const router = require("./router/auth-router");

app.use(express.json());//important to place this beforea any routes that need to handle JSON data in request body
//Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth", router);//Midlleware

// make server listen
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
