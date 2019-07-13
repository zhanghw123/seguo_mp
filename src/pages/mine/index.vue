<template>
  <div class="container">
    <div class="avatar-wrapper">
      <div @click="goUserinfo" class="avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div>userName</div>
      <div class="edit-wrapper">
        <i class="icon iconfont">&#xe669;</i>
      </div>
    </div>

    <div class="mine-item" @click="goMyYuyue()">
      我 的 预 约
      <div class="more">
        查 看 更 多 预 约
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
    <div class="mine-item" @click="gomyPhotos()">
      我 的 照 片
      <div class="more">
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
    <div class="mine-item" @click="gomyCombo()">
      我 的 套 餐
      <div class="more">
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
    <div class="mine-item">
      客 服 咨 询
      <button open-type="contact" class="contact-btn"></button>
      <div class="more">
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "我是我的页面"
    };
  },

  methods: {
    goUserinfo() {
      this.$router.push({ path: `../${"userInfo/main"}` });
    },
    goMyYuyue() {
      this.$router.push({ path: `../${"myReservation/main"}` });
    },
    gomyPhotos() {
      this.$router.push({ path: `../${"myPhotos/main"}` });
    },
    gomyCombo() {
      this.$router.push({ path: `../${"myCombo/main"}` });
    },
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background: white;
  flex-direction: column;
  box-sizing: border-box;
  .avatar-wrapper {
    width: 100%;
    height: 140px;
    background: #d8b192;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    position: relative;
    .avatar {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 40px;
      margin: 0 20px;
      border: 2px solid #fff;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .edit-wrapper {
      position: absolute;
      top: 30px;
      left: 90px;
    }
  }
  .mine-item {
    font-size: 14px;
    width: 85%;
    height: 60px;
    background: #fff;
    margin: 0 auto 20px;
    display: flex;
    align-items: center;
    border-radius: 0 0 5px 5px;
    box-shadow: 10rpx 10rpx 10rpx rgba(15, 15, 15, 0.1);
    box-sizing: border-box;
    padding: 0 10px;
    position: relative;
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
      font-size:10px;
      img {
        width: 30px;
        height: 15px;
      }
    }
  }
}
</style>
