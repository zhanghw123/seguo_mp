<template>
  <div class="container">
    <div class="border"></div>
    <div class="question-wrapper">
      <div class="order-item color">未支付</div>
      <div class="order-item">
        <div class="color">600套餐优惠</div>
        <div>精修15底片全送</div>
      </div>
      <div class="order-item">
        <div>姓名：林妙妙</div>
        <div>时间：2019年7月20日</div>
        <div>电话：18812345678</div>
      </div>

      <div class="order-item color">
        客服咨询
        <button open-type="contact" class="contact-btn"></button>
        <div class="more">
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>

    </div>
    
    <div class="btn">
      <div class="price">取消</div>
      <div class="confirm" @click="goSuccess()">支付</div>
    </div>
  </div>
</template>

<script>
import { get, post, postJSON } from "@/http/api";
export default {
  data() {
    return {};
  },
  methods: {
    goSuccess() {
      this.$router.push({ path: `../${"orderSuccess/main"}` });
    }
  }
};
</script>

<style lang="scss" scoped>
.clearIt {
  zoom: 1;
}
.clearIt:after {
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eff3f6;
  flex-direction: column;
  box-sizing: border-box;
  .border {
    margin-bottom: 20px;
  }
  .btn {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background: #fff;
    font-size: 18px;
    .price {
      flex: 1;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 30px;
    }
    .confirm {
      width: 30%;
      height: 100%;
      background: #dc050a;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
    }
  }
  .question-wrapper {
    flex: 1;
    overflow: auto;
    .order-item {
      box-sizing: border-box;
      padding: 15px;
      background: #fff;
      border-radius: 0 0 5px 5px;
      width: 90%;
      margin: 0 auto 20px;
      box-shadow: 10rpx 10rpx 10rpx rgba(15, 15, 15, 0.1);
      color: #999;
      position: relative;
      .color {
        color: #000;
      }
      .contact-btn {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
      }
      .more {
        position: absolute;
        right: 10px;
        top: 0;
        height: 100%;
        display: flex;
        align-items: center;
        color: #727272;
        img {
          width: 30px;
          height: 15px;
        }
      }
    }
  }
}
</style>
