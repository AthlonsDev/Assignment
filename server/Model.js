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
    // creating model named as modelname with collection named as personCollection
    const person_doc = mongoose.model('People', PersonScheme, 'People');


module.exports = person_doc