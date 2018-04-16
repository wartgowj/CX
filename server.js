const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes")/*(app, passport)*/;
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("passport");

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require("body-parser");

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var session = require('express-session');

// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/cxdb",
  {
    useMongoClient: true
  }
);


// require('./config/passport')(passport);

// set up our express application
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions



// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
