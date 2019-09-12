<template>
  <div id="app">
    <Header />
    <AddTask v-on:add-task="addTask" />
    <UpdateTask v-on:update-task="updateTask" />
    <Tasks v-bind:tasks="tasks" v-on:delete-task="deleteTask"/>
  </div>
</template>

<script>
import Header from './components/layout/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import UpdateTask from './components/UpdateTask';
import axios from 'axios';

export default {
  name: 'app',
  components: {
    Header,
    Tasks,
    AddTask,
    UpdateTask
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Task Number 1",
          completed: false
        },
        {
          id: 2,
          title: "Task Number 2",
          completed: true
        },
        {
          id: 3,
          title: "Task Number 3",
          completed: false
        }
      ]
    }
  },
  methods: {
    deleteTask(id) {
      // axios.delete('')
        // .then(response => this.tasks = this.tasks.filter(task => task.id !== id))
        // .catch(error => console.log(error))
        this.tasks = this.tasks.filter(task => task.id !== id);
    },
    addTask(newTask) {
      // const {title, completed} = newTask;
      // axios.post('', {
      //   title,
      //   completed
      // })
      //   .then(response => this.tasks = [...this.tasks, response.data])
      //   .catch(error => console.log(error))
      this.tasks = [...this.tasks, newTask]
    },
    updateTask(updatedTask) {
      const {title, completed} = updatedTask;
      axios.post('', {
        title,
        completed
      })
        .then(repsonse => this.tasks = [...this.tasks, response.data])
        .catch(error => console.log(error))
    }
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
