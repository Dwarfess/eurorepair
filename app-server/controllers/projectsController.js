// var fs = require("fs");
// var url = require('url');
// var qs = require("querystring");

const mongoose = require('mongoose');
const projectModel = mongoose.model('project');

exports.getProjects = function(req, res, next) {
    projectModel.find({}, function(err, docs) {
        if(err) {
            res.send({status: 500, msg: "Projects weren't found"});
            throw err;
        } else {
            res.status(200).json(docs)
        }
    });
};

exports.getProject = function(req, res, next) {
    projectModel.findOne({_id: req.params.id}, function(err, doc) {
        if(err) {
            res.send({status: 500, msg: "Current project wasn't found"});
            throw err;
        } else {
            res.status(200).json(doc)
        }
    });
};

exports.updateProject = function(req, res) {
    projectModel.findOneAndUpdate({_id: req.body._id},
        {
            $set: {
                _id: req.body._id,
                date: req.body.date,
                mainParams: req.body.mainParams,
                rooms: req.body.rooms,
                kitchens: req.body.kitchens,
                restrooms: req.body.restrooms,
                bathrooms: req.body.bathrooms,
                hallways: req.body.hallways
            }
        }, {new: true}, function (err, doc) {
            if(err) {
                res.send({status: 500, msg: "Current project wasn't saved"});
                throw err;
            } else {
                res.status(200).json(doc);
            }
        });
};

exports.createProject = function(req, res) {
    projectModel.create(req.body, function (err, doc) {
        if (err) {
            res.send({status:500, msg: "Current project wasn't created"});
            throw err;
        } else {
            res.status(200).json(doc);
        }
    });
};

exports.deleteProject = function(req, res, next) {
    projectModel.remove({_id: req.params.id}, function(err, doc) {
        if(err) {
            res.send({status: 500, msg: "Current project wasn't deleted"});
            throw err;
        } else {
            res.status(200).json({status: 200});
        }
    });
};
