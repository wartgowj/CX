const router = require("express").Router();
const usersController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
    .get(usersController.findAll)
    .post(usersController.create)


// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(usersController.findById)
    .delete(usersController.remove)


module.exports = router;


//FUTURE ADD-ONS: 
//We'd like to create admin routes that allow an admin to add or remove a cxplace
// .delete(cxplaceController.remove);
// .post(cxplaceController.create);