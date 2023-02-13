const Admin = require("../models/admins");
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
    });
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

module.exports = {
    signinAdmin,
    authenticateTokenAdmin,
    refreshTokenAdmin,
};
