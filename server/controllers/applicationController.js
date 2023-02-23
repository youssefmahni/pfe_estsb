const Lapp = require("../models/Applications");
const jwt = require("jsonwebtoken");
require("dotenv").config();

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
        etat: req.body.etat,
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
            res.json({ status: "ko" });
        }
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};
// const getid = async (req, res) => {
//     try {
//         const response = await Lapp.findOne({
//             cin: req.body.cin,
//         });
//         res.json({ response });
//     } catch (error) {
//         console.log(
//             "something went wrong in getid in applicationController.js",
//             error
//         );
//     }
// };
// const findApplicantById = async (req, res) => {
//     try {
//         let userId = req.body.id;
//         const response = await Lapp.findById(userId);
//         res.json({ response });
//     } catch (error) {
//         console.log(
//             "the first and second useEffect send empty ID (no worry) : "
//         );
//     }
// };

const poursuivre = async (req, res) => {
    try {
        const accessToken = jwt.sign(
            {
                cin: req.body.cin,
                code: req.body.code,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        const old = await Lapp.findOne({
            cin: req.body.cin,
            code: req.body.code,
        });
        if (!old) {
            res.json({ status: "ko" });
        } else {
            res.json({ status: "ok", accessToken: accessToken });
        }
    } catch (err) {
        res.json({ status: "error", message: err.message });
    }
};
//authentication
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    if (!authHeader) return res.sendStatus(401);
    const token = authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.status(403).json({ message: err }); // invalid token (forbiden)
        req.user = user;
        next();
    });
};
//get right user
const index = async (req, res) => {
    try {
        const response = await Lapp.findOne({
            cin: req.user.cin,
            code: req.user.code,
        });
        res.json({ response });
    } catch (err) {
        res.json({ message: "error occured!" });
    }
};
const update = async (req, res) => {
    try {
        const old = await Lapp.findOne({
            cin: req.body.cin,
        });
        await Lapp.findByIdAndUpdate(old._id, {
            $set: { phone: req.body.phone, email: req.body.email },
        });
        res.json({ status: "ok" });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

const findbycode = async (req, res) => {
    try {
        const response = await Lapp.findOne({
            code: req.body.code,
        });
        if(response){
            res.json({ response, status: "ok" });
        }else{
            res.json({status: "ko" });
        }
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};

module.exports = {
    apply,
    upload,
    sendFile,
    authenticateToken,
    index,
    check,
    poursuivre,
    update,
    findbycode,
};
