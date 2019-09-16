<template>
  <div>
    <h1>Wedding Checklist</h1>
    <div class="tasksContainer">
      <!--Vue uses alot of binding. Documentation was pretty helpful but had to look up other errors -->
      <div class="task" v-for="(task, index) in tasks"
      v-bind:task="task"
      v-bind:index="index"
      v-bind:key="task._id"
      >
        {{ `${task.createdAt.getDate()}/${task.createdAt.getMonth()}/${task.createdAt.getFullYear()}`}}
        <p class="text">{{ task.text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import Requests from '../requests';
export default {
  name: 'Task',
  data() {
    return {
      tasks: []
    }
  },
  async created() {
    //try catch
    try {
      //as indicated in request.js, using static should allow me to use below statement
      this.tasks = await Requests.getTasks();
    } catch(error) {
      this.error = error
      //this.error = error.message?
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
