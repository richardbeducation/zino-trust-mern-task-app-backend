const express = require('express')
const {
  createTask,
  getTasks,
  getTask,
  deleteTask,
  updateTask,
} = require('../controllers/taskController')
const Task = require('../models/taskModel')
const router = express.Router()

// router.post('/api/tasks', createTask)
// router.get('/api/tasks', getTasks)
// router.get('/api/tasks/:id', getTask)
// router.delete('/api/tasks/:id', deleteTask)
// router.patch('/api/tasks/:id', updateTask)

// below is a couple of steps of refactoring (see commentline in middle ware in Server.js too)):
router.post('/', createTask)
router.get('/', getTasks)
router.get('/:id', getTask)
router.delete('/:id', deleteTask)
router.put('/:id', updateTask)

// and second, even shorter:
// router.route('/').get(getTasks).post(createTask)
// router.route('/:id').get(getTask).delete(deleteTask).put(updateTask)

module.exports = router
