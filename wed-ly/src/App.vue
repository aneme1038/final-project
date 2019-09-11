<template>
  <div id="app">
    <Header />
    <AddTask v-on:add-task="addTask" />
    <UpdateTask v-on:update-task="updateTask" />
    <Tasks v-bind:tasks="tasks" v-on:del-task="deleteTask"/>
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
      tasks: []
    }
  },
  methods: {
    deleteTask(id) {
      axios.delete('')
        .then(response => this.tasks = this.tasks.filter(task => task.id !== id))
        .catch(error => console.log(error))
    },
    addTask(newTask) {
      const {title, completed} = newTask;
      axios.post('', {
        title,
        completed
      })
        .then(response => this.tasks = [...this.tasks, response.data])
        .catch(error => console.log(error))
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

</style>
