const { Router } = require('express');
const router = Router();
const { Tasks } = require('../model')

// Routes
router.get('/tasks', getTasks);
router.get('/tasks/:id', getTask);
router.post('/tasks', createTask);
router.put('/tasks/:id', updateTask);
router.delete('/tasks/:id', deleteTask);


// Controllers
async function getTasks(req, res, next) {
  const tasks = await Tasks.find()
  res.json(tasks.map(x => format(x)))
}

async function getTask(req, res, next) {
  const task = await Tasks.findById(req.params.id)
  res.json(format(task))
}

async function createTask(req, res, next) {
  const tasks = await Tasks.create(req.body)
  res.status(201).json(format(tasks))
}

async function updateTask(req, res, next) {
  const task = await Tasks.findById(req.params.id)
  Object.assign(task, req.body)
  await task.save()
  res.json(format(task))
}

async function deleteTask(req, res, next) {
  const task = await Tasks.findById(req.params.id)
  await Tasks.findByIdAndDelete(task.id)
  res.status(204).json()
}

function format(body) {
  const { _id: id, text, day, reminder } = body
  return { id, text, day, reminder }
}

module.exports = router;
