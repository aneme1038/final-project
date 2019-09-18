<template>
  <div>
    <form @submit="createTask">
      <input type="text" v-model="title" name="title" placeholder="Category" />
      <input type="text" v-model="description" name="description" placeholder="Task Description" />
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
//if you don't have backend, this uuid will create a unique id for entries on frontend
  import uuid from 'uuid';
  import { createTask } from '../axios';
  export default {
    name: "AddTask",
    data() {
      return {
        title: '',
        description: '',
        isCompleted: ''
      }
    },
    methods: {
      createTask(e, data) {
        e.preventDefault();
        const newTask = {
          id: uuid.v4(),
          title: this.title,
          description: this.description,
          isCompleted: false
        }
        // Send up to App.vue by emitting an event
        this.$emit('create-task', newTask);
        this.title = '';
        this.description = '';
        this.isCompleted = '';
      }
    }
  }
</script>
<!-- 'scoped' means this will only apply to this file -->
<style scoped>
  form {
    display: flex;
  }
</style>
