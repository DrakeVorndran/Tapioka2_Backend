const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')

router.get('/new', (req, res) => {
  res.send('New Post')
})

router.post('/new', (req, res) => {
  console.log(req.body)
  post = new Post(req.body)
  post.save()
  .then(post => {
    res.json({id: post._id})
  })
})

module.exports = router