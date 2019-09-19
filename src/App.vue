<template>
  <div id="app">
    <!--Import the various components -->
    <Header />
    <AddTask v-on:add-task="createTask" />
    <!--<UpdateTask v-on:update-task="updateTask" />-->
    <div class="taskContainer">
      <Tasks v-bind:tasks="tasks" v-on:delete-task="deleteTask(id)" />
    </div>
  </div>
</template>

<script>
// import Task from './components/Task';
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
// import Requests from './requests.js';
import { getTasks } from './axios';
import { deleteTask } from './axios';
import { createTask } from './axios';
import { updateTask } from './axios';
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
      text: '',
      title: '',
      description: '',
      isCompleted: false
    }
  },
  methods: {
    deleteTask(id) {
      axios.delete(`http://wed-ly.herokuapp.com/tasks/${task._id}`)
        .then(response => this.tasks = this.tasks.filter(task => task.id !== id))
        .catch(error => console.log(error))
  //       this.tasks = this.tasks.filter(task => task.id !== id);
    },
    createTask(newTask) {
      const {title, description, isCompleted} = newTask;
      axios.post('https://wed-ly.herokuapp.com/tasks', {
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
  mounted() {
    console.log(axios.get('https://wed-ly.herokuapp.com/tasks'))
    axios.get('https://wed-ly.herokuapp.com/tasks')
      .then(response => this.tasks = response.data)
      .catch(error => console.log(error))

  },
  created() {
    axios.get('')
      .then(response => this.tasks = response.data)
      .catch(error => console.log(error))
  }
}
</script>

<!-- with no 'scoped' means this will apply to all files in project/client section/frontend -->

<style>
  @import url('https://fonts.googleapis.com/css?family=Dancing+Script&display=swap');
  * {
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Dancing Script', cursive;
    line-height: 1.4;


  }
  .submitButton {
    background-color: #D9D1D0;
    color: #735F5D;
  }
  .taskContainer {
    margin: 20px;
    background-image: url('./assets/rungs.jpg');
    background-repeat: repeat-y;
  }
</style>
