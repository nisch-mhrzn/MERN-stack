// make server neat and clean
const express =require("express");
const app = express();

const router =require("./router/auth-router");
//Mount the Router: To use the router in your main Express app, you can "mount" it at a specific URL prefix
app.use("/api/auth",router);

// make server listen
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
