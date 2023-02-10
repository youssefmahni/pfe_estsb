const Lapp = require("../models/licenseApplications");

// Multer Configurations
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public");
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;
        cb(null, fileName);
    },
});
const upload = multer({ storage }).single("diplom");
const sendFile = async (req,res)=>{
    try {
        res.json({ status: "ok", message: "uploaded successfuly" });
    } catch (err) {
        res.json({ status: "error", message: "error occured!" });
    }
}

const apply = async (req, res) => {
    let applicant = new Lapp({
        cne: req.body.cne,
        fname: req.body.fname,
        lname: req.body.lname,
        sex: req.body.sex,
        age: req.body.age,
        phone: req.body.phone,
        city: req.body.city,
        codepostal: req.body.codepostal,
        licence: req.body.licence,
        master: req.body.master || null,
        diplom: req.body.diplom,
    });
    try {
        const response = await applicant.save();
        res.json({ status: "ok", message: response });
    } catch (err) {
        res.json({ status: "error", message: "error occured!" });
    }
};

const getid = async(req,res )=>{
    try {
        const response = await Lapp.findOne({ cne: req.body.cne });
        res.json(response._id);
        console.log(response._id);
    } catch (error) {
        console.log("something went wrong in getid in applicationController.js" ,error);
    }
}
module.exports = { apply, upload,sendFile, getid };
