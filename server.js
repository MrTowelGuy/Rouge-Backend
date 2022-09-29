// DEPENDENCIES
// get .env variables
require("dotenv").config();
// pull PORT from .env, give default value of 4949
// pull MONGODB_URL from .env
const { PORT = 4949, MONGODB_URL } = process.env;
// import express
const express = require("express");
// create application object
const app = express();
// import mongoose
const mongoose = require("mongoose");
// import middlware
const cors = require("cors");
const morgan = require("morgan");

// DATABASE CONNECTION
////////////////////////////////

// MiddleWare
////////////////////////////////
app.use(cors()); // to prevent cors errors, open access to all origins
app.use(morgan("dev")); // logging
app.use(express.json()); // parse json bodies










// LISTENER
////////////////////////////////
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));

//end
