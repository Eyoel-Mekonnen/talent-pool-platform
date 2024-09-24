const express = require("express");
const mongoose = require("mongoose");
const profileRoute = require("./routes/profile.route.js");
require('dotenv').config()
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// routes
app.use("/api/profiles", profileRoute);


app.get("/", (req, res) => {
  res.send("Hello from Node API server");
});

const url = process.env.MONGODB_URI
const port = process.env.PORT

mongoose
  .connect(
    url
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log("Server is running on port", port);
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
