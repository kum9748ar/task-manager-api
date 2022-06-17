require('dotenv').config()
const mongoose = require('mongoose')
const dbUrl = process.env.MONGODB_CONNECTION_STRING
function connectDb() {
    return mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

}

module.exports = connectDb