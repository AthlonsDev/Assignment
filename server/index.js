const mongoose = require('mongoose')
const cricketModel = require('./models/Crickets')
const mongoURI = 'mongodb://localhost:27017/CricketDB'
mongoose.connect(mongoURI, {useUnifiedTopology: true,useNewUrlParser: true}).
catch(error => handleError(error))
const db = mongoose.connection

const express = require('express')
const bodyParser = require('body-parser')
const app = express()

//for post data
app.use(bodyParser.json())
const {format} = require('path')
const {response} = require('express')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))



app.get('/all', (req, res) => {
    // res.send('running moongodb server on express.')
    // cricketModel.countDocuments().exec()
    // .then(count=>{
    // console.log("Total documents Count :", count)
    // res.json(count)
    // }) .catch(err => {
    // console.error(err)
    // })
    cricketModel.find(function(err, doc) {
        if(err) {
            console.error(err)
        } else{
            res.json(doc)
        }
    })
})

app.listen(3000, () => {
    console.log('Listening on port 3000')

})