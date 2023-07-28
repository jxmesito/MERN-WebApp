const mongoose = require('mongoose')

const Schema = mongoose.Schema 

const postSchema = new Schema({
    postMessage: {
        type: String,
        require: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)