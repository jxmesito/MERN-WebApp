// load up express
const express = require('express')
const Post = require('../models/post.model')
const {
    createPost,
    getPosts,
    getPost,
    removePost
} = require('../controllers/post.controller')

// creates an instance of the router
const router = express.Router()

// attach handler GET all posts
router.get('/', getPosts)

// GET a single post
router.get('/:id', getPost)

// POST a new post
router.post('/', createPost)

// DELETE a post
router.delete('/:id', removePost)

// export the router
module.exports = router
