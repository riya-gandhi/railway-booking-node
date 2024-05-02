// app.js

const express = require("express");
const bodyParser = require("body-parser");
const config = require("./config");
const authRoutes = require("./routes/authRoutes");
const trainRoutes = require("./routes/trainRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const sequelize = require("./config/database");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MySQL database
sequelize
  .authenticate()
  .then(() => console.log("Connected to MySQL database"))
  .catch((err) => console.error("MySQL connection error:", err));

// Routes
app.use("/auth", authRoutes);
app.use("/train", trainRoutes);
app.use("/booking", bookingRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
