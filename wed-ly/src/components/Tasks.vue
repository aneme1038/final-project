<template>
  <div>
    <div v-bind:key="task.id" v-for="task in tasks">
      <TaskItem v-bind:task="task" v-on:del-task="$emit('del-task', task.id)"/>
    </div>
  </div>
</template>

<script>
  import TaskItem from './TaskItem.vue';
  export default {
    name: "Tasks",
    components: {
      TaskItem
    },
    props: ["tasks"]
  }
</script>

<style scoped>

</style>
