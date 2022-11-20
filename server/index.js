const express = require('express');

const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}))


app.get('/about', (req, res) => {

    res.status(200).json({
        message: 'Hello World!'

    })

    res.send("This is a test")
    
})

app.get('/users/:userId/books/:bookId', (req, res) => {
    res.send(req.params)
})
// .catch(err => console.log(err))
var fs = require('fs');

app.get('/GetStudents',function (req,res)
{ studentdata={} 

fs.readFile(__dirname + "/" + "StudentInfo.json", 'utf8',

function (err, data) { console.log( data );

 res.json({ 'status':true, 'Status_Code':200,
 'requested at: ': req.localtime, 'required url: ':req.url,
 'request method: ':req.method, 'student data: ':JSON.parse(data)})
})
})

app.listen(3000, function () {
    console.log('listening on port 3000');

})