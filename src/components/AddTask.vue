<template>
  <div>
    <form class="taskCreation" action="https://wed-ly.herokuapp.com/tasks/" @submit="createTask(title)" method="post">
      <input class="titleInput" type="text" v-model="title" name="title" placeholder="Category" />
      <input class="descInput" type="text" v-model="description" name="description" placeholder="Task Description" />
      <input class="submitButton" type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
//if you don't have a backend or entries do not have a unique id, this uuid will create a unique id for objects on frontend
  // import uuid from 'uuid';
  import { createTask } from '../axios';
  export default {
    name: "AddTask",
    data() {
      return {
        title: '',
        description: '',
        isCompleted: false
      }
    },
    methods: {
      createTask(e) {
        console.log('this is triggering')
        e.preventDefault();
        const title = this.title;
        const description = this.description;
        const isCompleted = false;
        const newTask = {
          // id: uuid.v4(),
          title: title,
          description: description,
          isCompleted: isCompleted
        };
        console.log(this.title)
        // Send up to App.vue by emitting an event
        this.$emit('create-task', newTask);
        title = this.title,
        description = this.description,
        isCompleted = false

      }
    }
  }
</script>
<!-- 'scoped' means this will only apply to this file -->
<style scoped>
  .taskCreation {
    display: flex;
    justify-content: center;
    justify-content: space-between;
    padding-top: 20px;
    padding-right: 20px;
    padding-left: 100px;
    background-color: #1D1D1D;
  }
  .titleInput, .descInput {
    font-size: 1em;
    text-align: center;
  }
  .titleInput {
    background-color: pink;
  }
  .descInput {
    background-color: lightgreen;
    width: 300px;
  }
  .submitButton {
    width: 100px;
    height: 50px;
    font-size: 1.5em;
    margin-bottom: 10px;
  }
</style>
