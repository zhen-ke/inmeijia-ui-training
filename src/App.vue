<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
  html {
    font-size: calc(100vw / 7.52);
  }

  #app {
    font: .24rem/1.5 'PingFangSc Regular','Microsoft Yahei','Avenir', Helvetica, Arial, sans-serif;
  }
</style>