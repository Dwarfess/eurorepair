const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

//setting the schema
const servicesSchema = new Schema({
    user_id: Number,
    name: String,
    serviceList: Array
});

mongoose.model('services', servicesSchema); // create module with schema