const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
const projectSchema = new Schema({
    date: Number,
    image: String,
    active: Boolean,
    mainParams: Object,
    rooms: Object,
    kitchens: Object,
    restrooms: Object,
    bathrooms: Object,
    hallways: Object
});

mongoose.model('project', projectSchema); // create module with schema

