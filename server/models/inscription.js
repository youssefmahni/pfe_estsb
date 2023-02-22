const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inscriptionSchema = new Schema(
    {
        licence: { type: Boolean },
        master: { type: Boolean },
    },
    { timestamps: true }
);

const Inscription = mongoose.model("Inscription", inscriptionSchema);

module.exports = Inscription;
