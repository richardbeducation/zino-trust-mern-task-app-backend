const dotenv = require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
const taskRoutes = require('./routes/taskRoute')
const cors = require('cors')

const app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'https://zino-trust-mern-task-app.onrender.com',
    ],
  })
)
app.use('/api/tasks', taskRoutes)
// the above code is if you want to shorten your routes in task.route so you don't have to write /api/taks for each, you can just us /

// Routes
app.get('/', (req, res) => {
  res.send('Home page')
})

const PORT = process.env.PORT || 5000

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Connected to MongoDB & server running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  })
