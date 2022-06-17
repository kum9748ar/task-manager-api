// Importing the modules
const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
//defining the app 
const app = express()
app.use(bodyparser.json())
app.use(cors())
app.use(express.json())
const datbase_uri = process.env.MONGODB_CONNECTION_STRING
const port = process.env.PORT

const routes = require('./routes/taskroutes.js')
const { connectDb } = require('./database/db.js')

/** Monngodb Connection
*/
mongoose.connect(datbase_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})




app.use('/api/v1/tasks', routes)

async function startServer() {
    try {
        await connectDb
        const db = mongoose.connection;
        db.on("error", console.error.bind(console, "connection error: "));
        db.once("open", function () {
            console.log("Connected successfully");
        });
        app.listen(port, () => {
            console.log(`Listning on port ${port}`)
        })
    }
    catch (err) {
        console.log(err)
    }
}

startServer()
/*Configuring the the port*/
