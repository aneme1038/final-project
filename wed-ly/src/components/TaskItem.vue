<template>
  <div class="task-item" v-bind:class="{'is-complete':task.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete">
      {{task.title}}
      <button @click="$emit('del-todo', task.id)" class="del">Delete</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: "TaskItem",
    props: ["task"],
    methods: {
      markComplete() {
        this.task.completed = !this.task.completed;
      }
    }
  }
</script>

<style scoped>

</style>
