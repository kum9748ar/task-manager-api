const { find } = require("../models/taskmodel")
const Task = require("../models/taskmodel")
const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks)
    }
    catch (err) {
        res.status(500).send(err)
    }
}
const getTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
    }
    catch (err) {
        res.status(404).json({ message: `no task found with id ${req.params.id}` })

    }
}

const postTask = async (req, res) => {

    try {
        const task = await Task.create(req.body);
        res.status(201).json(task)
    }
    catch (err) {
        res.status(500).send(err)

    }

}


const updateTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        res.status(201).json(task)
    }
    catch (err) {
        res.status(500).send(err)

    }
}
const deleteTask = async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).send("task deleted successfully")
    }
    catch (err) {
        res.status(500).send(err)

    }
}


module.exports = {
    getAllTasks,
    getTask,
    updateTask,
    postTask,
    deleteTask
}