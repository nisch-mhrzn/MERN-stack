// The express.Router() function in Express.js creates a new router object that can handle requests in a modular and organized way. It serves as a mini-application with middleware and routes but is limited to specific segments of your application.

const express = require('express');
const router = express.Router();
// router.get("/", (req, res) => {
//         res.status(200).send("Welcome to the web by using routers");
//     });

router.route("/").get((req,res) =>{
    res.status(200).send("Welcome to the web by using routes");
});

router.route("/register").get((req, res) =>{
    res.status(200).send("Welcome to the registration page");
});

module.exports = router;


