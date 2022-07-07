const Tutorial = require("../models/tutorial.model.js");
// Create and Save a new Tutorial
exports.create = (req, res) => {
  
};
// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  
};
// Find a single Tutorial with a id
exports.findOne = (req, res) => {
  
};
// find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  
};
// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
    Tutorial.remove(req.params.id, (err, data) => {
        if (err) {
          if (err.kind === "not_found") {
            res.status(404).send({
              message: `Not found Tutorial with id ${req.params.id}.`
            });
          } else {
            res.status(500).send({
              message: "Could not delete Tutorial with id " + req.params.id
            });
          }
        } else res.send({ message: `Tutorial was deleted successfully!` });
      });
  
};
// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};