const router = require("express").Router();
const authRoutes = require("./authentication");

router
    // .route("/")
    .get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));
router
    // .route("/")  
    .get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    function (req, res) {
        res.redirect('/');
    });


module.exports = router;
