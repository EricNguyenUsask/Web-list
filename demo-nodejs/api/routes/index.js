var express = require('express')
var router = express.Router()
 
var handleRoutingTasks = require('./todoListRoute')
var handleRoutingStudents= require('./studentRoute')
var handleRoutingMembers= require('./memberRoute')

 
router.route('/').get((req, res) => res.send({ message: "You're in home" }))
 
router.use('/tasks', handleRoutingTasks)
router.use('/students',handleRoutingStudents)
router.use('/members',handleRoutingMembers)

//1
router.route('/demo').get(function(req,res){
    res.send('Đây là trang demo')
})
//2
router.route('/demo-2').get((req,res)=>{
    res.send('Đây là trang demo 2')
})
 //3
function handleRoutingDemo3(req,res){
    res.send(`<h1>Đây là trang demo 3</h1>`)
}
router.route('/demo-3').get(handleRoutingDemo3)
//4
const handleRoutingDemo4 = (req,res)=>{
    res.send(`<h1>Đây là trang demo 4</h1>`)
}
router.route('/demo-4').get(handleRoutingDemo4)


//

router.route('/anime').get(function(req,res){
    res.send('Record of Ragnarok vừa ra trên netflix')
})

router.route('/manga').get((req,res)=>{
    res.send('Deadtube và Pumpkin knight')
})

function handleRoutingSearch(req,res){
    res.send('Thanh tìm kiếm not found')
}
router.route('/search-bar').get(handleRoutingSearch)

const handleRoutingMusic = (req,res)=>{
    res.send(`<h1>Em của ngày hôm qua</h1>`)
}
router.route('/music').get(handleRoutingMusic)

module.exports = router
