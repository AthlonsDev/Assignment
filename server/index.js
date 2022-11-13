const express = require("express")
const mongoose = require('mongoose');
const person_doc = require("./Model");

const connectionString = "mongodb://localhost:27017/PeopleDB"

// connect mongoose to mongodb database
// add database path in ()
mongoose.connect(connectionString, {useUnifiedTopology: true,useNewUrlParser: true}).
catch(error => handleError(error))
const db = mongoose.connection
db.on('error', function(err)
{console.log("Error occured during connection"+err)
}
);

person_doc.findOne(function(error, result){
    console.log(`results: ${result}`)
})

// const app = express()
// // init app
// app.use(express.json)

db.once('connected', function() {
    console.log(`Connected to ${connectionString}`)
    // model.find({}, function(error, PO) {
    //     console.log("im here!")
    //     console.log(PO);
    // });
})

// creating the scheme

// Create single Doc
const id = mongoose.Types.ObjectId();
const doc1 = new person_doc({_id: id, name: 'Jack',age:32,Gender:"Male",Salary:3456})
// saving document created
doc1.save(function(err, doc){
    if (err) return console.log(err)
    console.log('saving a single doc :', doc)
})

// fetch all data
person_doc.find({})
    .limit(10)
    .exec()
    .then(docs => {
        console.log("showing multiple docs")
        docs.forEach(function(item) {
            console.log(item)
        })
    })
    .catch(err => {
        console.error(err)
})


// runs server on port 3000
// app.listen(3000, () => {
//     console.log("server is running fine")
//     mongoose.set("debug", (collectionName, method, query, doc) => {
//         console.log(`${PeopleDB}.${method}`, JSON.stringify(query), doc);
//     });
// })

