const router = require("express").Router();
const cxplaceRoutes = require("./cxplace");
const userRoutes = require("./user");

// CXPlace routes
router.use("/cxplaces", cxplaceRoutes);
router.use("/users", userRoutes);

module.exports = router;
