<template>
  <div class="container">
     <div class="photographer">
       <img src="/static/images/timg5.jpg" alt="">
     </div>
     <div class="photo-album">
      <div class="album-item">
        <img src="/static/images/timg1.jpg" @click="goComInfo()" alt="">
        <div class="album-name">小清新</div>
      </div>
      <div class="album-item">
        <img src="/static/images/timg2.jpg" @click="goComInfo()" alt="">
        <div class="album-name">日系</div>
      </div>
      <div class="album-item">
        <img src="/static/images/timg3.jpg" @click="goComInfo()" alt="">
        <div class="album-name">古风</div>
      </div>
      <div class="album-item">
        <img src="/static/images/timg4.jpg" @click="goComInfo()" alt="">
        <div class="album-name">复古</div>
      </div>
      
    </div>  
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      text:'我是摄影师页面'
    }
  },
  methods: {
    goComInfo() {
      this.$router.push({ path: `../${'photoAlbum/main'}`});
    },
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
  .photographer {
    width: 100%;
    height: 180px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 20px;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }
  .photo-album {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    justify-content:space-between;
    .album-item {
      width: 48%;
      height: 120px;
      background: #ccc;
      margin-bottom: 15px;
      position: relative;
      overflow: hidden;
      border-radius: 5px;
      box-shadow:-8rpx 8rpx 10rpx rgba(15,15,15,0.2);
      img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
      .album-name{
        font-size: 12px;
        color: #fff;
        position: absolute;
        bottom: 10px;
        left: 10px;
      }
    }
  }
  
}
</style>
