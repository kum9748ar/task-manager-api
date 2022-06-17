const express = require('express')
const router = express.Router()
const { getAllTasks, getTask, updateTask, postTask, deleteTask } = require('../controllers/taskcontroller')
router.route('/').get(getAllTasks).post(postTask)
router.route('/:id').delete(deleteTask).patch(updateTask).get(getTask)
router.route('/hell').get((req, res) => {
    res.json({ message: "hell" })
})


module.exports = router