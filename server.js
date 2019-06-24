// Declerations 
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 4000
const bodyParser = require('body-parser')
const cors = require('cors')


mongoose.connect(process.env.SERVER_CONNECTION).catch(err => {
  console.log(err)
})

//Middleware
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//Routes
const posts = require('./controllers/postsController')
app.get('/', (req, res) => {
  res.send('Hello world')
})

app.use('/posts', posts)



app.listen(port, () => {
  console.log('App running on port: ' + port)
})