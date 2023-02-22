const Admin = require("../models/admins");
const Lapp = require("../models/Applications");
const inscription = require("../models/inscription");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//create admins
const register = async (req, res, next) => {
    let user = new Admin({
        fname: req.body.fname,
        lname: req.body.lname,
        password: req.body.password,
        refreshToken: req.body.refreshToken,
    });
    try {
        const response = await user.save();
        res.json({ status: "ok", message: response });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};
//created inscription row
// const register = async (req, res, next) => {
//     let user = new inscription({
//         licence: false,
//         master: false,
//     });
//     try {
//         const response = await user.save();
//         res.json({ status: "ok", message: response });
//     } catch (err) {
//         res.json({ status: "error", message: err });
//     }
// };
//signin user
const signinAdmin = async (req, res, next) => {
    try {
        const accessToken = jwt.sign(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                password: req.body.password,
            },
            process.env.ACCESS_TOKEN_SECRET
        );
        const refreshToken = jwt.sign(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                password: req.body.password,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        const response = await Admin.findOne({
            fname: req.body.fname,
            lname: req.body.lname,
            password: req.body.password,
        });
        if (response) {
            await Admin.findByIdAndUpdate(response._id, {
                $set: { refreshToken: refreshToken },
            });
            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                sameSite: "None",
                maxAge: 1000 * 60 * 60 * 24,
            });
            res.json({
                status: "ok",
                accessToken: accessToken,
            });
        } else {
            res.json({ status: "error", user: false });
        }
    } catch (err) {
        res.json({ status: "error", message: err.message });
    } finally {
        next();
    }
};
//authentication
const authenticateTokenAdmin = (req, res, next) => {
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
        const response = await Admin.findOne({
            fname: req.user.fname,
            lname: req.user.lname,
            password: req.user.password,
        });
        res.json({ response });
    } catch (err) {
        res.json({ message: "error occured!" });
    }
};
//refresh token
// const refreshTokenAdmin = (req, res, next) => {
//     // const cookies = req.cookies;
//     // if (!cookies?.jwt) return res.sendStatus(401); //unhautorized
//     // const refreshToken = cookies.jwt;
//     // const foundAdmin = await Admin.findOne({
//     //     refreshToken: refreshToken,
//     // });
//     // if (!foundAdmin) return res.sendStatus(401);
//     // jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
//     //     if (err || foundAdmin.password != user.password) return res.sendStatus(403);
//         const accessToken = jwt.sign(
//             {
//                 fname: req.body.fname,
//                 lname: req.body.lname,
//                 password: req.body.password,
//             },
//             process.env.ACCESS_TOKEN_SECRET,
//             { expiresIn: "10s" }
//         );
//         res.json({ accessToken });
//     // });
// };
//find right licences
const getlicences = async (req, res) => {
    try {
        const cursor = await Lapp.find({
            licence: req.body.licence,
        });
        if (!cursor) {
            res.status(201).json({});
        } else {
            res.status(201).json({ cursor: cursor });
        }
    } catch (error) {
        console.log("something went wrong in getlicences : ", error);
    }
};
//find right masters
const getmasters = async (req, res) => {
    try {
        const cursor = await Lapp.find({
            master: req.body.master,
        });
        if (!cursor) {
            res.status(201).json({});
        } else {
            res.status(201).json({ cursor: cursor });
        }
    } catch (error) {
        console.log("something went wrong in getmasters : ", error);
    }
};

const OnOff = async (req, res) => {
    try {
        const response = await inscription.findOne();
        if (req.body.licence) {
            await inscription.findByIdAndUpdate(response._id, {
                $set: { licence: !response.licence },
            });
            
        }else if (!req.body.licence) {
            await inscription.findByIdAndUpdate(response._id, {
                $set: { master: !response.master },
            });
        }
        res.json({ response });
    } catch (error) {
        console.log("something went wrong", error);
    }
};

const checkLorM = async (req, res) => {
    try {
        const response = await inscription.findOne();
        res.json({ response });
    } catch (error) {
        console.log("something went wrong", error);
    }
};
module.exports = {
    signinAdmin,
    authenticateTokenAdmin,
    getlicences,
    getmasters,
    index,
    register,
    OnOff,
    checkLorM
};
