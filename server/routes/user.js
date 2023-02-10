const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

router.post("/signin", userController.signin);
router.post("/register", userController.register);
router.post(
    "/personal",
    userController.authenticateToken,
    userController.index
);
router.get("/refresh", userController.refreshToken);
router.get("/logout", userController.logOut);
router.post("/saveapp", userController.saveapp);

// *******************************************************

const applicationController = require("../controllers/applicationController");

router.post("/apply", applicationController.apply);
router.post(
    "/upload",
    applicationController.upload,
    applicationController.sendFile
);
router.post("/getid", applicationController.getid);

module.exports = router;
