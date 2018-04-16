const db = require("../models");

// Defining methods for the cxplacesController
module.exports = {
    signUp: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }

};



