// Declerations 
const dotenv = require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 4000
mongoose.connect(process.env.SERVER_CONNECTION)

//Routes
app.get('/', (req, res) => {
  res.send('Hello world')
})



app.listen(port, () => {
  console.log('App running on port: ' + port)
})