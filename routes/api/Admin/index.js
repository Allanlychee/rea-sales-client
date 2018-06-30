const router = require("express").Router();
const addHomeRoute = require("./addHome");
const path = require("path");

// Add Home routes
router.use("/api/admin/addHome", addHomeRoute);

module.exports = router;
