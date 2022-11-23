var express = require('express')
var router = express.Router()
 
var member = require('../controllers/memberController')
 
router.route('/')
    .get(member.list_all_members)
    .post(member.create_a_member)
 

 
module.exports = router
