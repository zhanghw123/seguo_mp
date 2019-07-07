<template>
  <div class="container">
     <div class="avatar-wrapper">
       <div @click="goUserinfo" class="avatar">
         <img src="/static/images/user.png" alt="">
       </div>
       <div>张瀚文</div>
     </div>

    <div class="mine-item">
      我的预约
      <div class="more">
        查看更多预约
        <i class="icon iconfont">&#xe640;</i>
      </div>
    </div>
     <div class="mine-item">
      我的照片
      <i class="icon iconfont">&#xe640;</i>
    </div>
    <div class="mine-item">
      我的套餐
      <i class="icon iconfont">&#xe640;</i>
    </div>
    <div class="mine-item">
      客服咨询
      <i class="icon iconfont">&#xe640;</i>
    </div>
    

  </div>
</template>

<script>


export default {
  
  data () {
    return {
      text:'我是我的页面'
    }
  },

 methods: {
   goUserinfo() {
     this.$router.push({ path: `../${'userInfo/main'}`});
   }
 },
}
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
    
    .avatar {
      width: 70px;
      height: 70px;
      overflow: hidden;
      border-radius: 40px;
      margin: 0 20px;
      img {
        width: 100%;
        height: 100%;
      }
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
    box-shadow:10rpx 10rpx 10rpx rgba(15,16,15,0.2);
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
    }
  }
}
</style>
