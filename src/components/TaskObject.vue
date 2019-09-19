<template>
  <div class="task-object" v-bind:key="task._id" v-bind:class="{'task-complete':task.isCompleted}">
    <!--Binding a class on the condition that the statement after the colon is true. If it is, apply the 'is-complete' class to the object -->
    <p>
      <input class="checkbox" type="checkbox" v-on:change="completeTask">
      <!-- <h4 class="categoryHead">Category:</h4> -->
        {{task.title}}
        ----
      <!-- <h4 class="descriptionHead">Description: </h4> -->
        {{task.description}}
      <!-- <h4 class="completedHead">Completed:</h4> -->

      <button class="deleteBtn" @click="deleteTask(task, id)">X</button>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "TaskObject",
    props: ["task"],
    data() {
      return {
        title: '',
        description: '',
        isCompleted: false,
        id: ''
      }
    },
    methods: {
      completeTask() {
        this.task.isCompleted = !this.task.isCompleted;
      },
      deleteTask(task, id) {
        // console.log('this');
          axios.delete(`http://localhost:3000/tasks/${task._id}`)
            .then(response => this.tasks = this.tasks.filter(task => task._id !== id))
            .catch(error => console.log(error))
      }
    }
  }
</script>
<!-- This scoped styling is limited to this file only -->
<style scoped>
  .task-object {
    flex-wrap: wrap;
    font-size: 1.5em;
    padding: 10px;
    border-bottom: 2px #3F312B solid;
    margin: 5px;
  }
  .task-complete {
    text-decoration: line-through;
  }
  .deleteBtn {
    width: 2em;
    height: 2em;
    font-size: 0.7em;
    background-color: #ddc;
    float: right;
    cursor: pointer;
  }
  .categoryHead, .descriptionHead, .completedHead {
    font-family: Helvetica;
    font-weight: normal;
    font-size: 1.2em;
  }
</style>
