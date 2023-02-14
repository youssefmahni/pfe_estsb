const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lappSchema = new Schema(
    {
        cne: { type: String, required: true },
        fname: { type: String, required: true },
        lname: { type: String, required: true },
        sex: { type: String, required: true },
        age: { type: String, required: true },
        phone: { type: String, required: true },
        city: { type: String, required: true },
        codepostal: { type: String, required: true },
        licence: { type: String},
        master: { type: String},
        diplom: { type: String },
    },
    { timestamps: true }
);

const Lapp = mongoose.model("Lapp", lappSchema);

module.exports = Lapp;
