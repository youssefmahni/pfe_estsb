const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const userRout2 = require("./routes/admin");
const cookieParser = require('cookie-parser');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(express.static('public'))

mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/USERS");

app.use("/admin", userRout2);
app.use("/", userRoute);

app.listen(3500, () => {
  console.log("server running on port 3500");
});



