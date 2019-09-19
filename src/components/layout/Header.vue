<template>
  <header class="header">
    <div class="headerText">
      <h1 class="title">Wed-Ly</h1>
      <h2 class="subtitle">Personalized Wedding Checklist</h2>
    </div>
  </header>
</template>

<script>
  export default {
    name: "Header"
  }
</script>
<!-- 'scoped' means this will only apply to this file -->
<style scoped>
  .headerText {
    display: flex;
    flex-direction: column;
    font-family: 'Dancing Script', cursive;
    font-size: 1.2em;
    font-weight: bolder;
  }
  .title {
    margin-top: 7em;
    letter-spacing: 10px;
    text-align: center;

  }
  header {
    background-color: #40312C;
    color: #F0EFF2;
    background-image: url('http://www.luxeeventsvancouver.ca/wp-content/uploads/2016/01/mobile-home-banner.jpg');
    background-size: cover;
    height: 25em;
  }
  .subtitle {
    letter-spacing: 10px;
    text-align: center;
  }
</style>
