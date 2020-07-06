// var fs = require("fs");
// var url = require('url');
// var qs = require("querystring");

var mongoose = require('mongoose');
var projectModel = mongoose.model('project');

exports.getProject = function(req, res, next) {
    projectModel.find({}, function(err, docs) {
        if(err) {
            let err = new Error('Server Error');
            err.statusCode = 400;
            throw err;
        } else {
            res.status(200).json(docs)
        }
    });
};

exports.updateProject = function(req, res) {
    console.log('******************************', req.body);
    console.log('******************************', req.body._id);
    projectModel.findOneAndUpdate({"_id": req.body._id},
        {
            $set: {
                "_id": req.body._id,
                'mainParams': req.body.mainParams,
                'rooms': req.body.rooms,
                'kitchens': req.body.kitchens,
                'restrooms': req.body.restrooms,
                'bathrooms': req.body.bathrooms,
                'hallways': req.body.hallways
            }
        }, {new: true}, function (err, doc) {
            console.log(`Item ${doc.mainParams[0].name} was updated`);

            projectModel.find({}, function(err, doc){
                res.type('application/json');
                res.jsonp(doc);
            });
        });
};