var mongoose = require('mongoose')
const { Schema, model } = mongoose
var Taskschema = new Schema({
   name: String
})

module.exports= model('Task', Taskschema)

