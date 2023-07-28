// include the .env file
require('dotenv').config()

// load up express
const express = require('express')
const mongoose = require('mongoose')
// require access to the API-Routes.js file
const apiRoutes = require('./routes/post.routes')
const userRoutes = require('./routes/user.routes')

// express [app]
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/post.routes', apiRoutes)
app.use('/api/user.routes', userRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests
        app.listen(process.env.PORT, () => {
        console.log('connected to db & listening on port:', process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })


