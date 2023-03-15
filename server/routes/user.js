const express = require("express");
const router = express.Router();

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


module.exports = router;
