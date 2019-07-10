<template>
  <div class="container">
    <div class="avatar-wrapper">
      <div @click="goUserinfo" class="avatar">
        <open-data type="userAvatarUrl"></open-data>
      </div>
      <div>张瀚文</div>
      <div class="edit-wrapper">
        <i class="icon iconfont">&#xe669;</i>
      </div>
    </div>

    <div class="mine-item">
      我的预约
      <div class="more">
        查看更多预约
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
    <div class="mine-item">
      我的照片
      <div class="more">
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
    <div class="mine-item">
      我的套餐
      <div class="more">
        <img src="/static/images/more.jpg" alt />
      </div>
    </div>
    <div class="mine-item">
      客服咨询
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
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  display: flex;
  background: #eff3f6;
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
    width: 90%;
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
</style>
