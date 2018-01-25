<template>
  <div class="main">
    <Banner></Banner>
    <div class="content">
      <div class="top">
        <p class="line"></p>
        <p class="text">VR</p>
      </div>
      <div class="content-wrapper">
        <h2>VR 全屋装
          <br>所见即所得</h2>
        <p class="info">区别于传统装修公司，我们提供整套的
          <br>VR全景方案100%还原未来新家</p>
        <p class="green-line"></p>
        <p class="btn">
          <a href="#">了解更多
            <img src="./arrow-1.svg" alt="">
          </a>
        </p>
      </div>
      <p class="bg">01</p>
      <div class="cilcle">
        <p class="line"></p>
        <i class="icon">
          <img src="./arrow-2.svg" alt="">
        </i>
      </div>
      <p class="vr">
        360旋转
        <br>VR全套方案
        <br>所见即所得
      </p>
    </div>
    <div class="now">
      <h3>MEIJIA</h3>
      <p class="reservation">现在预约</p>
      <p class="free">免费获得客厅VR全景方案</p>
      <form class="form">
        <div class="form-data">
          <v-Select :selectData='selectDataA' @updateOptions="onUpdateOptionsA"></v-Select>
        </div>
        <div class="form-data">
          <v-Select :selectData='selectDataB' @updateOptions="onUpdateOptionsB"></v-Select>
        </div>
        <div class="form-data">
          <input type="text" class="detail" v-model="userDetailAddress" @change="checkAddress">
        </div>
        <div class="form-data">
          <mt-button type="default" class="btn" @click="postData">立即预约</mt-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/banner/banner'
  import vSelect from '@/components/select/select'
  import {
    MessageBox
  } from 'mint-ui';

  export default {
    data() {
      return {
        selectDataA: {
          selectStatus: false,
          index: 0,
          selectOptions: [{
              content: '毛胚房'
            },
            {
              content: '精装房'
            },
            {
              content: '其它房'
            },
          ],
        },
        selectDataB: {
          selectStatus: false,
          index: 0,
          selectOptions: [{
              content: '杭州市'
            },
            {
              content: '上海市'
            },
            {
              content: '武汉市'
            },
          ],
        },
        userDetailAddress: '所在小区'
      }
    },
    methods: {
      onUpdateOptionsA(msg) {
        this.selectDataA.index = msg
      },
      onUpdateOptionsB(msg) {
        this.selectDataB.index = msg
      },
      postData() {
        if (this.checkAddress()) {
          this.myAxios.post('/api/info', {
            house: this.selectDataA.selectOptions[this.selectDataA.index].content,
            city: this.selectDataB.selectOptions[this.selectDataB.index].content,
            address: this.userDetailAddress
          }).then(it => {
            if (it.data.code === 200) {
              MessageBox('提示', '提交成功');
            }
          }).catch(e => {
            MessageBox('提示', '提交失败');
          })
        } else {
          MessageBox('提示', '表单未完成');
        }
      },
      checkAddress() {
        if (!this.userDetailAddress.length) {
          MessageBox('提示', '所在地址不能为空');
          return false
        }
        return true
      }
    },
    components: {
      Banner,
      vSelect
    }
  }
</script>

<style lang="scss">
  .main {
    .content {
      background: url('./vr.png') no-repeat;
      height: 10.75rem;
      background-size: cover;
      width: 100%;
      position: relative;
      padding-top: 1.64rem;
      .top {
        position: absolute;
        top: 1rem;
        left: .5rem;
        width: 1rem;
        color: #6F727C;
        P {
          margin: 0;
          display: inline-block;
        }
        .line {
          width: .4rem;
          height: 1px;
          background: #e0e2eb;
          vertical-align: middle;
        }
        .text {
          font-family: 'HelveticaNeue-CondensedBold'
        }
        transform: rotate(-90deg);
      }
      .content-wrapper {
        padding-left: 1.04rem;
        position: relative;
        z-index: 100;
        h2 {
          color: #333;
          font-size: .48rem;
          line-height: 1.5;
          padding-bottom: .03rem;
          margin: 0 0 .48rem;
          font-family: 'PingFangSC-Regular';
        }
        .info {
          color: #b3b3bb;
          font-size: .26rem;
          line-height: 1.5;
          margin-bottom: .3rem;
        }
        .green-line {
          width: .4rem;
          height: 1px;
          background: #39D5C2;
          margin-bottom: .48rem;
        }
        .btn {
          margin: 0;
          a {
            text-align: center;
            font-size: .24rem;
            color: #333;
            display: inline-block;
            width: 2rem;
            height: .64rem;
            border: 1px solid #666;
            border-radius: 100px;
            line-height: .64rem;
            text-decoration: none;
            padding: 0 .36rem;
            box-sizing: border-box;
            font-family: 'PingFangSC-Regular';
            img {
              width: .18rem;
            }
          }
        }
      }
      .bg {
        position: absolute;
        font-size: 2.4rem;
        line-height: 1;
        color: #F2F5F5;
        top: 1.1rem;
        left: 2.2rem;
        z-index: 1;
        margin: 0;
        font-family: 'HelveticaNeue-CondensedBold'
      }
      .cilcle {
        position: absolute;
        top: 6rem;
        right: 2.1rem;
        i.icon {
          width: .5rem;
          background: #39D5C2;
          height: .5rem;
          display: block;
          text-align: center;
          line-height: .5rem;
          border-radius: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          img {
            width: .16rem;
          }
        }
        .line {
          border: 1px solid #39D5C2;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 100%;
          margin: 0;
          animation: scaleout 1.5s ease-in-out infinite;
          @keyframes scaleout {
            0% {
              transform: scale(1);
            }
            100% {
              opacity: 0;
              transform: scale(1.1);
            }
          }
          &:before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 1.9rem;
            height: 1.9rem;
            border-radius: 100%;
            border: 1px solid #C0E8E3;
            transform: translate(-50%, -50%);
          }
          &:after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2.6rem;
            height: 2.6rem;
            border-radius: 100%;
            border: 1px solid #DCECEA;
            transform: translate(-50%, -50%);
          }
        }
      }
      .vr {
        position: absolute;
        top: 6.35rem;
        right: .4rem;
        font-size: .26rem;
        color: #999;
        font-family: 'PingFangSC-Regular';
        margin: 0;
      }
    }
    .now {
      text-align: center;
      color: #b3b3bb;
      background: #F5F5F5;
      padding: .72rem 0 1.85rem;
      p {
        font-weight: normal;
        font-size: .24rem;
        line-height: .24rem;
      }
      h3 {
        color: #1F9A92;
        font-size: .26rem;
        line-height: .26rem;
        font-weight: bold;
        margin-bottom: .56rem;
      }
      .reservation {
        font-size: .32rem;
        line-height: .32rem;
        color: #333;
        margin: 0 0 .24rem;
      }
      .free {
        margin-top: .48rem;
        margin-bottom: .8rem;
      }
      .form {
        width: 6.15rem;
        margin: 0 auto;
        .form-data {
          margin-bottom: .4rem;
        }
        .detail {
          background: #fff;
          border: none;
          color: #999;
          width: 100%;
          box-sizing: border-box;
          padding: .3rem;
        }
        .btn {
          width: 100%;
          border: 0;
          background: #39D5C2;
          color: #fff;
          font-size: .28rem;
          line-height: .28rem;
          border-radius: 0;
          height: .8rem;
          font-family: 'PingFangSC-Regular';
        }
      }
    }
  }
</style>