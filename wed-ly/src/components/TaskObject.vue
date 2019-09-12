<template>
  <div class="task-object" v-bind:class="{'task-complete':task.taskCompleted}">
    <!--Binding a class on the condition that the statement after the colon is true. If it is, apply the 'is-complete' class to the object -->
    <p>
      <input type="checkbox" v-on:change="completeTask">
      {{task.title}}
      <button @click="$emit('delete-task', task.id)" class="deleteBtn">X</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "TaskObject",
    props: ["task"],
    methods: {
      completeTask() {
        this.task.taskCompleted = !this.task.taskCompleted;
      }
    }
  }
</script>
<!-- This scoped styling is limited to this file only -->
<style scoped>
  .task-object {
    padding: 15px;
    border: 1.25px #cdc double;
  }
  .task-complete {
    text-decoration: line-through;
  }
  .deleteBtn {
    border-radius: 100%;
    background-color: #ddc;
    float: right;
    cursor: pointer;
  }
</style>
