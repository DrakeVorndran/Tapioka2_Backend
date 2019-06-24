const express = require('express')
const router = express.Router()
const Post = require('../models/postModel')

router.get('/new', (req, res) => {
  res.send('New Post')
})

router.post('/new', (req, res) => {
  console.log(req.body)
  Post.create(req.body).then(post => {
    res.json({ id: post._id })
  })
})

router.get('/:id', (req, res) => {
  Post.findById(req.params.id)
  .then(post => {
    res.json(post)
  })
})

module.exports = router