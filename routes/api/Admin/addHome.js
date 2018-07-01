const router = require("express").Router();
const AdminAddHome = require("../../../controllers/Admin/AdminAddHome");

// Matches with "/api/admin/addHome"
router.route("/")
  .get(AdminAddHome.findAll)
  .post(AdminAddHome.create);

// Matches with "/api/admin/addHome/:id"
router
  .route("/:id")
  .get(AdminAddHome.findById)
  .put(AdminAddHome.update)
  .delete(AdminAddHome.remove);

module.exports = router;
