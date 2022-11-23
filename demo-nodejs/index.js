// construct server & declare port
var express = require('express')
var app = express()
var cors = require('cors')
var port = process.env.PORT || 3001



const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ele-course1', 
{
  useNewUrlParser: true, useUnifiedTopology: true
},
  (error)=>{ if (error) console.log(error) }
);
 
// data parse in Json
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
 
// routing
var routes = require('./api/routes');
app.use(routes)
 
// handling url not found case
app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + 'not found' })
})
 
app.listen(port);
 
console.log('server  started on port: ' + port)

