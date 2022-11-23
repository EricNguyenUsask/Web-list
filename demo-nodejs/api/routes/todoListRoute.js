var express = require('express')
var router = express.Router()


var todoList = require('../controllers/todoListController')


router.route('/')
    .get(todoList.list_all_tasks)
    .post(todoList.create_a_task)

router.route('/search')
    .get(todoList.search_tasks)
    
router.route('/paginate')
    .get(todoList.paginate_tasks)

router.route('/:taskId')
    .get(todoList.get_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task)




module.exports = router
