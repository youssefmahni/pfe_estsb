const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('public'))

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/USERS");

app.use("/", userRoute);

app.listen(3600, () => {
  console.log("server running on port 3600");
});



