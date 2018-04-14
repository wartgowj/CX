const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const GOOGLE_CLIENT_ID = "219691820752-rniemlqn93i50tdtdd0r6of6p2qmktcp.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "9ZQ0AHEJQV4c1MpgcKrjz3xw";

const User = require('../models').User


passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: process.env.NODE_ENV === 'production' ? '/auth/google/callback' : "http://localhost:3001/auth/google/callback" 
},
    function (accessToken, refreshToken, profile, done) {
        // console.log(profile);
        User.findOneOrCreate({ googleId: profile.id }, function (err, user) {
            return done(err, user);
        });
    }
));

module.exports = passport