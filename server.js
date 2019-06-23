// Declerations 
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 4000

mongoose.connect(process.env.SERVER_CONNECTION).catch(err => {
  console.log(err)
})
const cors = require('cors')

//Middleware
app.use(cors())

//Routes
const posts = require('./controllers/postsController')
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/posts', posts)



app.listen(port, () => {
  console.log('App running on port: ' + port)
})