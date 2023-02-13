const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const adminSchema = new Schema(
    {
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        password: { type: String, required: true },
        refreshToken: { type: String }
    },
    { timestamps: true }
);

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
