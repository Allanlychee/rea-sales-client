const db = require("../../models/Admin");

// Defining methods for the AdminAddHomesController
module.exports = {
  findAll: function(req, res) {
    db.AdminAddHome
      .find(req.query)
      .sort({ date: -1 })
      .then(dbAdminAddHome => res.json(dbAdminAddHome))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.AdminAddHome
      .findById(req.params.id)
      .then(dbAdminAddHome => res.json(dbAdminAddHome))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.AdminAddHome
      .create(req.body)
      .then(dbAdminAddHome => res.json(dbAdminAddHome))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.AdminAddHome
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbAdminAddHome => res.json(dbAdminAddHome))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.AdminAddHome
      .findById({ _id: req.params.id })
      .then(dbAdminAddHome => dbAdminAddHome.remove())
      .then(dbAdminAddHome => res.json(dbAdminAddHome))
      .catch(err => res.status(422).json(err));
  }
};
