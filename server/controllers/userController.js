const User = require("../models/users");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//register user
const register = async (req, res, next) => {
    let user = new User({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        password: req.body.password,
        refreshToken: req.body.refreshToken,
        applicant: req.body.applicant,
        applicationid: req.body.applicationid,
    });
    try {
        const response = await user.save();
        res.json({ status: "ok", message: response });
    } catch (err) {
        res.json({ status: "error", message: err });
    }
};
//signin user
const signin = async (req, res, next) => {
    try {
        const accessToken = jwt.sign(
            {
                email: req.body.email,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15s" }
        );
        const refreshToken = jwt.sign(
            {
                email: req.body.email,
            },
            process.env.REFRESH_TOKEN_SECRET,
            { expiresIn: "1d" }
        );

        const response = await User.findOne({
            email: req.body.email,
            password: req.body.password,
        });
        if (response) {
            await User.findByIdAndUpdate(response._id, {
                $set: { refreshToken: refreshToken },
            });
            res.cookie("jwt", refreshToken, {
                httpOnly: true,
                sameSite:'None',
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
const authenticateToken = (req, res, next) => {
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
        const response = await User.findOne({ email: req.user.email });
        res.json({ response });
    } catch (err) {
        res.json({ message: "error occured!" });
    }
};
//refresh token
const refreshToken = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); //unhautorized
    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({
        refreshToken: refreshToken,
    });
    if (!foundUser) return res.sendStatus(401);
    jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err || foundUser.email != user.email) return res.sendStatus(403);
        const accessToken = jwt.sign(
            {
                email: user.email,
            },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: "15s" }
        );
        res.json({ accessToken });
    });
};
const logOut = async (req, res, next) => {
    const cookies = req.cookies;
    if (!cookies?.jwt) return res.sendStatus(401); //unhautorized
    const refreshToken = cookies.jwt;
    const foundUser = await User.findOne({
        refreshToken: refreshToken,
    });
    if (!foundUser) {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: "None",
        });
        return res.sendStatus(204); // success but no content
    } 
    await User.findByIdAndUpdate(foundUser._id, {
        $set: { refreshToken: "" },
    });
    res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
    });
    return res.sendStatus(204);
    
    
};

const saveapp = async(req, res)=>{
    try {
        const response = await User.findOne({ email: req.body.email });
        res.json({ response });
        await User.findByIdAndUpdate(response._id, {
            $set: { applicant: true, applicationid: req.body._id },
        });
    } catch (error) {
        console.log("something went wrong in saveapp in userController.js", error);
    }
}

module.exports = {
    signin,
    register,
    index,
    authenticateToken,
    refreshToken,
    logOut,
    saveapp,
};
