const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

router.post("/signin", adminController.signinAdmin);
router.post(
    "/dashboard",
    adminController.authenticateTokenAdmin,
);

router.get("/refresh", adminController.refreshTokenAdmin);

module.exports = router;
