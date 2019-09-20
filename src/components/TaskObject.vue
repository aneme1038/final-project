<template>
  <div>
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
      <div class="form-object">
        <form class="updateForm" action="https://wed-ly.herokuapp.com/tasks/" @submit="updateTask(task, id)">
          <input class="titleUpdate" type="text" name="title" v-model="title" placeholder="Edit Category" />
          <input class="descUpdate" type="text" name="description" v-model="description" placeholder="Edit Task Description" />
          <input class="updateBtn" type="submit" value="Confirm" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import { updateTask } from '../axios'
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
          axios.delete(`http://wed-ly.herokuapp.com/tasks/${task._id}`)
            .then(response => this.tasks = this.tasks.filter(task => task._id !== id))
            .catch(error => console.log(error))
      },
      updateTask(e, task, id) {
        console.log('this is triggering')
        e.preventDefault();
        axios.post(`http://wed-ly.herokuapp.com/tasks/${task._id}`)
          .then(response =>
            console.log(response)
          )
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
  .updateBtn {
    width: 4em;
    height: 2em;
    margin-left: 20px;
  }
  .deleteBtn {
    width: 2em;
    height: 2em;
    font-size: 0.7em;
    background-color: #ddc;
    float: right;
    cursor: pointer;
  }
  .updateForm {
    display: flex;
    justify-content: space-around;
  }
  .updateBtn {
    width: 60px;
    border-radius: 45%;
    border-color: #ddc;
    font-size: 0.6em;
  }
  .categoryHead, .descriptionHead, .completedHead {
    font-family: Helvetica;
    font-weight: normal;
    font-size: 1.2em;
  }
</style>
