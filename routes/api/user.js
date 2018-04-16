const router = require("express").Router();
const usersController = require("../../controllers/userController");
const signupController = require("../../controllers/signupController");
// const passport = require('../../config/passport.js');
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

// router.post('/signup', passport.authenticate('local-signup', {
//     successRedirect: '/profile', // redirect to the secure profile section
//     failureRedirect: '/signup', // redirect back to the signup page if there is an error   
// }));  

 // router.post('/login', do all our passport stuff here);


router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');

router.get('/profile', isLoggedIn);
    
});


// router
//     .route("/login")
//     .post(loginController.logIn)

// router  
//     .route("/profile")
//     .get(usersController.findById)

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;


//FUTURE ADD-ONS: 
//We'd like to create admin routes that allow an admin to add or remove a cxplace
// .delete(cxplaceController.remove);
// .post(cxplaceController.create);