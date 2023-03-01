const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lappSchema = new Schema(
    {
        cin: { type: String, required: true },
        nom: { type: String, required: true },
        prenom: { type: String, required: true },
        sex: { type: String, required: true },
        datenaissance: { type: String, required: true },
        phone: { type: String, required: true },
        ville: { type: String, required: true },
        nationalite: { type: String, required: true },
        licence: { type: String },
        master: { type: String },
        profile: { type: String },
        seriebac: { type: String, required: true },
        anneebac: { type: String, required: true },
        mentionbac: { type: String, required: true },
        dernierdiplom: { type: String, required: true },
        anneediplom: { type: String, required: true },
        specialitediplom: { type: String, required: true },
        etablissement: { type: String, required: true },
        email: { type: String, required: true },
        code: { type: String, required: true },
        s1: { type: Number, required: true },
        s2: { type: Number, required: true },
        s3: { type: Number, required: true },
        s4: { type: Number, required: true },
        relves1: { type: String, required: true },
        relves2: { type: String, required: true },
        relves3: { type: String, required: true },
        relves4: { type: String, required: true },
    },
    { timestamps: true }
);

const Lapp = mongoose.model("Lapp", lappSchema);

module.exports = Lapp;
