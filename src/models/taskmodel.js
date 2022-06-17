const mongoose = require('mongoose')
const taskSchema = mongoose.Schema({
    task: {
        type: String,
        required: [true,"must provide a task  "],
        trim: true,
        maxlength: [20,"max length 20 characters"]

    }, completed: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Task', taskSchema)