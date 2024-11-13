// The express.Router() function in Express.js creates a new router object that can handle requests in a modular and organized way. It serves as a mini-application with middleware and routes but is limited to specific segments of your application.

const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");

router.route("/").get(authcontrollers.home);

router.route("/register").post(authcontrollers.register);//post goes and adds to database

module.exports = router;
