const db = require("../models");

// Defining methods for the cxplacesController
module.exports = {
    findAll: function(req, res) {
        db.Cxplace
            .find(req.query)
            .sort({ buy: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function(req, res) {
        db.Cxplace
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },

    update: function(req, res) {
        db.Cxplace
            .findByIdAndUpdate({ _id: req.params.id }, {$set: {buy: req.body.buy, sell: req.body.sell}, $push: {comments: req.body.comments}}, {new: true})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};


// FUTURE ADD-ONS: 
// We'd like to create admin routes that allow an admin to add or remove a cxplace
//   create: function(req, res) {
//     db.Book
//       .create(req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },
//   remove: function(req, res) {
//     db.Book
//       .findById({ _id: req.params.id })
//       .then(dbModel => dbModel.remove())
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   }