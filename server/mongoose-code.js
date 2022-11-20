const express = require("express")
const mongoose = require('mongoose');
const person_doc = require("./Model");

const connectionString = "mongodb://localhost:27017/PeopleDB"

// connect mongoose to mongodb database
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

db.once('connected', function() {
    console.log(`Connected to ${connectionString}`)
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

// adding many documents in the collection
manypersons=[{ name: 'Simon',age:42,Gender:"Male",Salary:3456 }
,{ name: 'Neesha',age:23,Gender:"Female",Salary:1000 }
,{ name: 'Mary',age:27,Gender:"Female",Salary:5402 },
{ name: 'Mike',age:40,Gender:"Male",Salary:4519 }
]
person_doc.collection.insert(manypersons, function (err, docs) {
if (err){
return console.error(err);
} else {
console.log("Multiple documents inserted to Collection");
}
}); 

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

// finding all the documents in the collection
person_doc.find({}) // find all users
.sort({Salary: 1}) // sort ascending by firstName
.select('name Salary age')// Name and salary only
.limit(10) // limit to 10 items
.exec() // execute the query
.then(docs => {
console.log("showing multiple documents")
docs.forEach(function(Doc) {
console.log(Doc.age,Doc.name);
})
})
.catch(err => {
console.error(err)
})

var givenage=30
person_doc.find({Gender:"Female",age:{$gte:givenage}})
// find all users
.sort({Salary: 1}) // sort ascending by firstName
.select('name Salary age')// Name and salary only
.limit(10) // limit to 10 items
.exec() // execute the query
.then(docs => {
    console.log("showingagegreaterthan15",givenage)
docs.forEach(function(Doc) {
console.log(Doc.age,Doc.name);
})
})
.catch(err => {
console.error(err)})

// counting all the documents
person_doc.countDocuments().exec()
.then(count=>{
console.log("Total documents Count :", count)
}) .catch(err => {
console.error(err)
})


person_doc.deleteMany({ age: { $gte: 25 } })
.exec()
.then(docs=>{
console.log('deleted documents are:',docs);
}).catch(function(error){
console.log(error);
});


person_doc.updateMany({ Gender: "Female" },{Salary:5555})
.exec()
.then(docs=>{
console.log("update")
console.log(docs); // Success
}).catch(function(error){
console.log(error); // Failure
});

