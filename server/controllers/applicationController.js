const Lapp = require("../models/Applications");

// Multer Configurations
const multer = require("multer");
const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/photos");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName);
    },
});
const upload = multer({ storage: storage1 }).single("profile");
const sendFile = async (req, res) => {
    try {
        res.json({ status: "ok", message: "uploaded successfuly" });
    } catch (err) {
        res.json({ status: "error", message: "error occured!" });
    }
};

const apply = async (req, res) => {
    let applicant = new Lapp({
        cin: req.body.cin,
        nom: req.body.nom,
        prenom: req.body.prenom,
        sex: req.body.sex,
        datenaissance: req.body.datenaissance,
        phone: req.body.phone,
        ville: req.body.ville,
        anneebac: req.body.anneebac,
        licence: req.body.licence,
        master: req.body.master,
        profile: req.body.profile,
        nationalite: req.body.nationalite,
        seriebac: req.body.seriebac,
        mentionbac: req.body.mentionbac,
        dernierdiplom: req.body.dernierdiplom,
        anneediplom: req.body.anneediplom,
        specialitediplom: req.body.specialitediplom,
        etablissement: req.body.etablissement,
        email: req.body.email,
        code: req.body.code,
    });
    try {
        const response = await applicant.save();
        res.json({ status: "ok", message: response });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};
const check = async (req, res) => {
    try {
        const old = await Lapp.findOne({
            cin: req.body.cin,
        });
        if (!old) {
            res.json({ status: "ok" });
        } else {
            res.json({ status: "error" });
        }
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const getid = async (req, res) => {
    try {
        const response = await Lapp.findOne({
            cin: req.body.cin,
        });
        res.json({ response });
    } catch (error) {
        console.log(
            "something went wrong in getid in applicationController.js",
            error
        );
    }
};
const findApplicantById = async (req, res) => {
    try {
        let userId = req.body.id;
        const response = await Lapp.findById(userId);
        res.json({ response });
    } catch (error) {
        console.log(
            "the first and second useEffect send empty ID (no worry) : "
        );
    }
};
module.exports = { apply, upload, sendFile, getid, findApplicantById,check };
