var mongoose = require('mongoose')
const { Schema, model } = mongoose
var Taskschema = new Schema({
   name: String,
   age: Number
})

module.exports= model('Member', Taskschema)