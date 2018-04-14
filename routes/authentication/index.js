const router = require("express").Router();
const passport = require("passport");

router
    // .route("/")
    .get('/auth/google',
    passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router
    // .route("/")  
    .get('/auth/google/callback',
    passport.authenticate('google', { failureRedirect: '/login', session: false }),
    function (req, res) {
        res.redirect(process.env.NODE_ENV === 'production' ? '/' : 'http://localhost:3000/');
    });


module.exports = router;
