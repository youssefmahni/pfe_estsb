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

router.get("/refresh", adminController.refreshTokenAdmin);
router.post("/licences", adminController.getlicences);
router.post("/masters", adminController.getmasters);

module.exports = router;
