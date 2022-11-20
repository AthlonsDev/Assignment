const { ObjectId } = require("mongodb");
const mongoose = require("mongoose")

const PersonScheme = new mongoose.Schema({
    _id: {
        type: ObjectId
    },
    name: {
    type: String,
    // required: true
    },
    Age: Number,
    Gender:String,
    Salary:Number
    });
    // creating model named as person_doc with collection named as People
    const person_doc = mongoose.model('People', PersonScheme, 'People');


module.exports = person_doc