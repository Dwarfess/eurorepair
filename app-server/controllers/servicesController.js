// var fs = require("fs");
// var url = require('url');
// var qs = require("querystring");

const mongoose = require('mongoose');
const serviceModel = mongoose.model('services');

exports.getServices = function(req, res) {
    console.log('***************************', 'start')
    serviceModel.findOne({_id: req.params.id}, function(err, doc) {
        console.log('***************************', 'finish')
        if(err) {
            console.log('***************************', err)
            res.send({status: 500, msg: "Services weren't found"});
            throw err;
        } else {
            console.log('***************************', doc)
            res.status(200).json(doc);
        }
    });
};

exports.createServices = function(req, res) {
    serviceModel.create(req.body, function (err, doc) {
        if (err) {
            res.send({status:500, msg: "Services weren't created"});
            throw err;
        } else {
            res.status(200).json(doc);
        }
    });
};

exports.updateServices = function(req, res) {
    serviceModel.findOneAndUpdate({_id: req.body._id},
        {$set: {
                _id: req.body._id,
                user_id: req.body.user_id,
                name: req.body.name,
                serviceList: req.body.serviceList
            }
         },{new: true},
        function (err, doc) {
        if(err) {
            res.send({status: 500, msg: "Services weren't saved"});
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
