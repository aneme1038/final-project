const express = require ('express');
const mongodb = require('mongodb');
const router = express.Router();
const addTask = require('../../src/components/AddTask');
const updateTask = require('../../src/components/UpdateTask');
const tasks = require('../../src/components/Tasks');
const Task = require('../models/tasks.js')
//Get Request to seed database
router.get('/task/seed', (req, res) => {
  Task.create([
    {
      title: 'Venue',
      description: 'Choose a venue for the wedding',
      isCompleted: false
    },
    {
      title: 'Wedding Party',
      description: 'Choose who will be bridesmaids',
      isCompleted: false
    },
    {
      title: 'Wedding Party',
      description: 'Choose who will be groomsmen',
      isCompleted: false
    },
    {
      title: 'Entertainment',
      description: 'Find music for the wedding day',
      isCompleted: false
    },
    {
      title: 'Entertainment',
      description: 'Pick a fun game or object we can include for during the reception',
      isCompleted: false
    }
  ], (error, data) => {
    console.log(error);
    console.log(data);
    res.redirect('/')
  })
})

//Post Request
router.post('/task', (req, res) => {
  Task.create(req.body, (error, createdTask) => {
    res.redirect('/task')
  })
})
//Delete Request
router.delete('/task/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id, () => {
    res.redirect('/task')
  })
})
//Put Request
router.get('/task/:id/', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, req.body, {new: true}, (error, updatedTask) => {
    res.redirect('/task')
  })
})

//Show individual Task Route
router.get('/task/:id', (req, res) => {
  Task.findById(req.params.id, (error, foundTask) => {
    res.render(
      tasks,
      {
        task: foundTask
      }
    )
  })
})

module.exports = router;