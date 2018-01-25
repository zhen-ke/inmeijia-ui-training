<template>
  <div class="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item>
        <img src="./banner1.png" alt="banner">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./banner2.png" alt="banner">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./banner1.png" alt="banner">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="./banner2.png" alt="banner">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  export default {
    name: 'banner',
  }
</script>

<style lang="scss">
  .banner {
    height: 4.2rem;
    img {
      width: 100%;
      height: 100%;
      vertical-align: top;
    }
    .mint-swipe-indicators {
      left: 20%;
    }
    .mint-swipe-indicator {
      background: transparent;
      opacity: 1;
      border: 2px solid #666;
      width: 4px;
      height: 4px;
      margin: 0 6px;
    }
    .mint-swipe-indicator.is-active {
      background: #666;
      border: 0;
      width: 8px;
      height: 8px;
    }
  }
</style>