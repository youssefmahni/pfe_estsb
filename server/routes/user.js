const express = require("express");
const router = express.Router();
// const userController = require("../controllers/userController");
// router.post("/signin", userController.signin);
// router.post("/register", userController.register);
// router.post(
//     "/personal",
//     userController.authenticateToken,
//     userController.index
// );
// router.get("/refresh", userController.refreshToken);
// router.get("/logout", userController.logOut);
// router.post("/saveapp", userController.saveapp);

// *******************************************************

const applicationController = require("../controllers/applicationController");

router.post("/check", applicationController.check);
router.post("/apply", applicationController.apply);
router.post(
    "/upload",
    applicationController.upload,
    applicationController.sendFile
);
router.post("/poursuivre", applicationController.poursuivre);
router.post("/update", applicationController.update);
router.post(
    "/account",
    applicationController.authenticateToken,
    applicationController.index
);
router.post("/findbycode", applicationController.findbycode);

// router.post("/getid", applicationController.getid);
// router.post("/find", applicationController.findApplicantById);

module.exports = router;
