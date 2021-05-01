// var fs = require("fs");
// var url = require('url');
// var qs = require("querystring");

const mongoose = require('mongoose');
const serviceModel = mongoose.model('services');

exports.getServices = function(req, res, next) {
    serviceModel.find({}, function(err, docs) {
        if(err) {
            res.send({status: 500, msg: "Projects weren't found"});
            throw err;
        } else {
            res.status(200).json(docs)
        }
    });
};

// exports.createProject = function(req, res) {
//     projectModel.create(req.body, function (err, doc) {
//         if (err) {
//             res.send({status:500, msg: "Current project wasn't created"});
//             throw err;
//         } else {
//             res.status(200).json(doc);
//         }
//     });
// };

exports.updateServices = function(req, res) {
    serviceModel.create(req.body, function (err, doc) {
        if (err) {
            res.send({status:500, msg: "Services weren't created"});
            throw err;
        } else {
            res.status(200).json(doc);
        }
    });
};

exports.deleteServices = function(req, res, next) {
    serviceModel.remove({_id: req.params.id}, function(err, doc) {
        if(err) {
            res.send({status: 500, msg: "Services weren't deleted"});
            throw err;
        } else {
            res.status(200).json({status: 200});
        }
    });
};
