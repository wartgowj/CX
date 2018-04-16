const router = require("express").Router();
const usersController = require("../../controllers/userController");
const signupController = require("../../controllers/signupController");

// Matches with "/api/users"
router.route("/")
    .get(usersController.findAll)
    


// Matches with "/api/users/:id"
router
    .route("/:id")
    .get(usersController.findById)
    .delete(usersController.remove)

// Matches with "/api/users/signup
router
    .route("/signup")
    .post(signupController.signUp)


module.exports = router;


//FUTURE ADD-ONS: 
//We'd like to create admin routes that allow an admin to add or remove a cxplace
// .delete(cxplaceController.remove);
// .post(cxplaceController.create);