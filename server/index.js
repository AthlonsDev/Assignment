const express = require("express")
// const mongo = require('mongodb')
const mongoose = require('mongoose')

const model = require('./model')

// connect mongoose to mongodb database
// add database path in ()
mongoose.connect("mongodb+srv://userTest:password123456@cluster0.n8pbs9v.mongodb.net/Tutorial_01");
const app = express()
// init app
app.use(express.json)

app.get("/getData", (req, res) => {
   model.find({}, (err, res) => {
    if (err) {
        res.json(err)
    } else {
        res.json(res)
    }
   })
})



// nodemon package important - makes server reload automatically

// get takes a path and a function
// app.get('./', (request, response) => {
//     console.log('Here')
//     // sends internal error
//     response.sendStatus(500)
//     response.send('hi')
//     response.download('server.js')
//     response.render('index')
// })

// runs server on port 3000
app.listen(3000, () => {
    console.log("server is running fine")
})

