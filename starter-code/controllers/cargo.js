
var db = require('../models');

let newCargo = function (req, res) { //look at that controller
    res.render('cargoNew');
};

let createCargo = function (req, res) { //and look at that controller
    db.Cargo.create({ description: req.body.description, title: req.body.title }, function (error, cargo) {
        res.render('cargoShow', { cargo: cargo });
    });
};

module.exports.new = newCargo;
module.exports.create = createCargo;