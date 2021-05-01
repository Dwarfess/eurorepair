const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
const servicesSchema = new Schema({
    id: Number,
    type: String,
    name: String,
    category: String,
    description: String,
    price: Number
});

mongoose.model('services', servicesSchema); // create module with schema