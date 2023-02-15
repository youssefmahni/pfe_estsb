const Admin = require("../models/admins");
const Lapp = require("../models/licenseApplications");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//signin user
const signinAdmin = async (req, res, next) => {
    try {
        const accessToken = jwt.sign(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                password: req.body.password,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        const refreshToken = jwt.sign(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                password: req.body.password,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "3d" }
        );

        const response = await Lapp.find({
            licence: req.body.licence,
            master: req.body.master,
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
        res.json({ status: "error", message: "error occured!" });
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
        if (err) return res.sendStatus(403); // invalid token (forbiden)
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
const refreshTokenAdmin = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); //unhautorized
    const refreshToken = cookies.jwt;
    const foundAdmin = await Admin.findOne({
        accessToken: req.body.accessToken,
    });
    if (!foundAdmin) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err || foundAdmin.email != user.email) return res.sendStatus(403);
        const accessToken = jwt.sign(
            {
                fname: req.body.fname,
                lname: req.body.lname,
                password: req.body.password,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15m" }
        );
        res.json({ accessToken });
    });
};
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

module.exports = {
    signinAdmin,
    authenticateTokenAdmin,
    refreshTokenAdmin,
    getlicences,
    getmasters,
    index,
};
