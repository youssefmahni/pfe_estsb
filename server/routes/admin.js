const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/register", adminController.register);
router.post("/signin", adminController.signinAdmin);
router.post(
    "/dashboard",
    adminController.authenticateTokenAdmin,
    adminController.index,
);

router.post("/open", adminController.OnOff);
router.get("/checklorm", adminController.checkLorM);
router.post("/licences", adminController.getlicences);
router.post("/masters", adminController.getmasters);

module.exports = router;
