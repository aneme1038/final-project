<template>
  <div>
    <form @submit="addTask">
      <input type="text" v-model="title" name="title" placeholder="Add A Task" />
      <input type="submit" value="Submit" class="btn">
    </form>
  </div>
</template>

<script>
//if you don't have backend, this uuid will create a unique id for entries on frontend
  import uuid from 'uuid';
  export default {
    name: "AddTask",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTask(e) {
        e.preventDefault();
        const newTask = {
          id: uuid.v4(),
          title: this.title,
          completed: false
        }
        // Send up to App.vue by emitting an event
        this.$emit('add-task', newTask);
        this.title = '';
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
