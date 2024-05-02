// app.js

const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
