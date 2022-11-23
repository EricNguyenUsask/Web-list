var express = require('express')
var router = express.Router()

router.route('/').get((req,res)=>{
    res.send(`<h1>Day la trang Student</h1>`)
})

module.exports = router
