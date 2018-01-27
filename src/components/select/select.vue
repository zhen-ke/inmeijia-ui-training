<template>
  <div class="select-box" @click="changeStatus">
    <h4 class="select-title" :class="{'select-title-active': selectData.selectStatus}">{{selectData.selectOptions[selectData.index].content}}</h4>
    <transition name="slide-down">
      <ul class="select-options" v-show="selectData.selectStatus">
        <li class="select-option-item" v-for="(item,index) in selectData.selectOptions" @click='emitItemData(index)' :class="{'select-title-active': selectData.index === index}">{{selectData.selectOptions[index].content}}</li>
        <div class="arrow-top"></div>
      </ul>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'vselect',
    props: {
      selectData: {
        type: Object
      }
    },
    methods: {
      changeStatus() {
        this.selectData.selectStatus = !this.selectData.selectStatus
      },
      emitItemData(i) {
        this.$emit('updateOptions', i)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .select-box {
    position: relative;
    width: 100%;
    line-height: .24rem;
    text-align: left;
    font-size: .24rem;
    color: #999;
    .select-title {
      position: relative;
      padding: 0 .3rem;
      height: .8rem;
      line-height: .8rem;
      background: #fff;
      transition-duration: 300ms;
      cursor: pointer;
      font-weight: normal;
      margin: 0;
      &::before,
      &::after {
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        border-top: .15rem solid #39D5C2;
        border-left: .12rem solid transparent;
        border-right: .12rem solid transparent;
        right: .2rem;
        bottom: 0;
        margin: auto;
        transition-duration: 300ms;
        transition-timing-function: ease-in-out;
      }
      &::before {
        border-top-color: #39D5C2;
        top: 0;
      }
      &::after {
        border-top-color: #fff;
        top: -.07rem;
      }
    }
    .select-title-active {
      &:after {
        transform: rotate(-180deg);
        border-top-color: #fff;
        top: .07rem;
      }
      &::before {
        transform: rotate(-180deg);
        border-top-color: #39D5C2;
      }
    }
    .select-options {
      position: absolute;
      padding: .2rem 0;
      top: .84rem;
      width: 100%;
      background: #fff;
      z-index: 100;
      ul,
      li {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
      .select-option-item {
        padding: .3rem;
        cursor: pointer;
        transition-duration: 300ms;
      }
    }
    .arrow-top {
      position: absolute;
      height: 0;
      width: 0;
      top: -.12rem;
      border-bottom: .15rem solid #fff;
      border-left: .12rem solid transparent;
      border-right: .12rem solid transparent;
      left: 0;
      right: 0;
      margin: auto;
      z-index: 99;
    }
    .slide-down-enter-active,
    .slide-down-leave {
      transition: all .3s ease-in-out;
      transform-origin: 0 top;
      transform: scaleY(1);
    }

    .slide-down-enter {
      transform: scaleY(0);
    }

    .slide-down-leave-active {
      transition: all .3s ease-in-out;
      transform-origin: 0 top;
      transform: scaleY(0);
    }
  }
</style>