<template>
  <div class="container">
     <div class="photo">
       <img src="/static/images/timg6.jpg" alt="">
     </div>
     <div class="photo">
       <img src="/static/images/timg7.jpg" alt="">
     </div>
     <div class="photo">
       <img src="/static/images/timg8.jpg" alt="">
     </div>
     <div class="photo">
       <img src="/static/images/timg9.jpg" alt="">
     </div>
  </div>
</template>

<script>


export default {
  
  data () {
    return {
      text:'我是相册页面'
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
  padding-top: 15px;
  .photo {
    width: 90%;
    margin: 0px auto 15px;
    height: 250px;
    border-radius: 5px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
