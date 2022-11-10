const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    }
})

const model = mongoose.model("database name", schema)
module.exports = model