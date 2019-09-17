<template>
  <div id="app">
    <!--Import the various components -->
    <Header />
    <!-- <AddTask v-on:add-task="addTask" /> -->
    <!--<UpdateTask v-on:update-task="updateTask" />-->
    <Tasks v-bind:tasks="tasks" v-on:delete-task="deleteTask" />
  </div>
</template>

<script>
// import Task from './components/Task';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Requests from './requests.js';
// import UpdateTask from './components/UpdateTask';
import axios from 'axios';
export default {
  name: 'App',
  components: {
    Header,
    // Task
    Tasks,
    AddTask,
    // UpdateTask
  },
  data() {
    return {
      tasks: [],
      error: '',
      text: ''
    }
  },
  methods: {
    deleteTask(id) {
      axios.delete(`http://localhost:3000/${task._id}`)
        .then(response => this.tasks = this.tasks.filter(task => task.id !== id))
        .catch(error => console.log(error))
  //       this.tasks = this.tasks.filter(task => task.id !== id);
    },
    addTask(newTask) {
      const {title, description, isCompleted} = newTask;
      axios.post('http://localhost:3000/tasks/', {
        title,
        description,
        isCompleted
      })
        .then(response => this.tasks = [...this.tasks, response.data])
        .catch(error => console.log(error))
      this.tasks = [...this.tasks, newTask]
    },
//     updateTask(updatedTask) {
//       const {title, completed} = updatedTask;
//       axios.post('', {
//         title,
//         completed
//       })
//         .then(response => this.tasks = [...this.tasks, response.data])
//         .catch(error => console.log(error))
//     }
  },
  created() {
    axios.get('')
      .then(response => this.tasks = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<!-- with no 'scoped' means this will apply to all files -->

<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Helvetica;
    line-height: 1.4;
  }
  .btn {
    background-color: #D9D1D0;
    color: #735F5D;
  }
</style>
