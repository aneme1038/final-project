<template>
  <div>
    <form @submit="updateTask">
      <input type="text" name="title" v-model="title"/>
      <input type="submit" value="Update" class="btn"/>
    </form>
  </div>
</template>

<script>
  export default {
    nme: "UpdateTask",
    data() {
      return {
        title: ''
      }
    },
    methods: {
      updateTask(e) {
        e.preventDefault();
        const updatedTask = {
          title: this.title,
          completed: false
        }
        //send up to parent by emitting event
        this.$emit('update-task', updatedTask);

        this.title = '';
      }
    }
  }
</script>

<style scoped>

</style>
