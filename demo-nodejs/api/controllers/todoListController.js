var Task = require('../model/Task')

exports.list_all_tasks = async (req, res) => {
    try {
        const result = await Task.find({})
        res.send(result)
    } catch (error) {
        res.json({
            errorMessage: error
        })
    }
}

exports.create_a_task = async (req, res) => {
    try {
        let data = req.body
        let newDoc = new Task(data);
        let saveDoc = await newDoc.save()

        res.send({
            message: 'success',
            saveDoc
        })
    } catch (error) {
        res.send(error)
    }
}




// exports.get_a_task = (req, res) => {
//     let { taskId } = req.params
//     Task
//         .findById(taskId)
//         .exec((err, result) => {
//             if (err) return res.send(err)
//             return res.send(result)
//         })
// }

exports.get_a_task =async (req,res) => {
    try {
        let { taskId}=req.params
        let result = await Task.findById(taskId)
        res.send({
            result
        })
    } catch (error) {
        res.send(error)
    }
}

exports.delete_a_task = async (req, res) => {
    try {
        let { taskId } = req.params
        let deleteTask = await Task.findByIdAndDelete(taskId)
        res.send({
            message: "delete success",
            deleteTask
        })
    }
    catch (error) {
        res.send({
            message: "delete failure",
            error
        })
    }
}

exports.update_a_task = async (req, res) => {
    try {
        let { taskId } = req.params
        let updateData = req.body
        let updateTask = await Task.findByIdAndUpdate(taskId, updateData, { new: true })
        res.send({
            message: "update success",
            updateTask
        })
    }
    catch (error) {
        res.send({
            message: "update failure",
            error
        })
    }
}

exports.paginate_tasks = async (req, res) => {
    try {
        let page = req.query.page
        let limit = req.query.limit
        let convertedPage = parseInt(page)
        let convertedLimit = parseInt(limit)
        let skip = (convertedPage - 1) * convertedLimit
        // danh sach
        let listTasks = await Task.find({}).skip(skip).limit(convertedLimit)
        // tong so phan tu trong DB
        let numberRecords = await Task.estimatedDocumentCount()

        let TotalPage = Math.ceil(numberRecords / convertedLimit)


        res.send({
            message: 'success',
            listTasks,
            TotalPage,
            numberRecords
        })
    } catch (error) {
        res.send({
            message: "failure",
            error
        })
    }
}

exports.search_tasks = async (req, res) => {
    try {
        let { q } = req.query;

        let listTasks = await Task.find({ name: { $regex: q } })
        // let listTasks = await Task.find({ name: q })
        res.send({
            message: 'msm.success',
            listTasks
        })
    } catch (error) {
        res.send({
            message: 'msm.failure',
            error
        })
    }
}




