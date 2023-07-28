const Post = require('../models/post.model')
const mongoose = require('mongoose')

// get all posts

const getPosts = async(req, res) => {
    const posts = await Post.find({}).sort({createdAt: -1})
    res.status(200).json(posts)
}


// get a single post

const getPost = async(req, res) => {
    const post = await Post.findById(id)
    
    if (!mongoose.Types.ObjectId.isValid(id)) {return res.status(404).json({error: 'Post Not Found'})}

    const { id } = req.params

    if (!post) {return res.status(404).json({error: "Post Not found"})} 
    
    res.status(200).json(post)
}

// create a post

const createPost = async (req, res) => {
    const { postMessage } = req.body

    let emptyField = []

    if (!postMessage) {
        emptyField.push('postMessage')
    }

    if (emptyField.length > 0) {
        return res.status(400).json({ error: 'Please fill in the field', emptyField})
    }

    // add doc to db
    try {
        const post = await Post.create({postMessage})
        res.status(200).json(post)
    } catch(error) {
        res.status(400).json({error: error.message})
    }
}


// delete a post

const removePost = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Post Not Found'})
    }

    const post = await Post.findOneAndDelete({_id: id})

    if (!post) {
        return res.status(404).json({error: "Post Not found"})
    } 

    res.status(200).json(post)
}

module.exports = {
    createPost,
    getPosts,
    getPost,
    removePost
}