const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/signin", adminController.signinAdmin);
router.post(
    "/dashboard",
    adminController.authenticateTokenAdmin,
);

router.get("/refresh", adminController.refreshTokenAdmin);
router.post("/licences", adminController.getlicences);
router.post("/masters", adminController.getmasters);

module.exports = router;
