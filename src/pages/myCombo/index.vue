<template>
  <div class="container">
     <div class="top">
      <div class="title">我的套餐</div>
      <img class="topbg" src="/static/images/topbg.png" />
      
    </div>
    <div class="main">
      <div class="combo-wrapper" @click="gomyPhotos()" v-for="(item,index) in myCombo" :key="index">
        <div class="combo-title">{{item.name}}套餐 {{item.price}}</div>
        <div class="combo-time">{{item.time}}</div>
        <div class="combo-describe">{{item.describe}}</div>
      </div>
    </div>
  </div>
</template>

<script>

import {get, post} from "@/http/api"
export default {
  
  data () {
    return {
      text:'我是我的预约页面',
      isShow:false,
      myCombo: [
        {
          name: '个人写真',
          time: '2019-02-14',
          price:'￥600',
          describe: '所有底片赠送'
        },
        {
          name: '毕业季',
          time: '2019-06-01',
          price:'￥900',
          describe: '所有底片赠送'
        },
        {
          name: '个人写真',
          time: '2019-06-10',
          price:'￥560',
          describe: '所有底片赠送'
        },
        {
          name: '多人写真',
          time: '2019-06-15',
          price:'￥1200',
          describe: '所有底片赠送'
        },

      ],
      timeObj :{
        1: '08:00 - 10:00',
        2: '10:00 - 12:00',
        3: '14:00 - 16:00',
        4: '16:00 - 18:00'
      },
      timeCode :{
        1: '10:00:00',
        2: '12:00:00',
        3: '16:00:00',
        4: '18:00:00'
      },
      arr: []
    }
  },
  
  methods: {
    
    gomyPhotos() {
      this.$router.push({ path: `../${"myPhotos/main"}` });
    },
  },

 
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: #eff3f6;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  .top{
    width: 100%;
    height: 200rpx;
    position: relative;
    display: flex;
    align-items: center;
    .title {
      width: 100%;
      color: #fff;
      font-size: 18px;
      text-align: center;
      z-index: 10;
      position: absolute;
      top: 20px;
    }
    .topbg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
     
    }
    
  }  
  .main {
    width: 100%;
    background: #eff3f6;
    flex: 1;
    overflow: auto;
    box-sizing: border-box;
    padding-top: 10px;
    .combo-wrapper {
      background: #fff;
      width: 95%;
      box-sizing: border-box;
      padding: 10px 20px;
      margin: 0 auto 20rpx;
      box-shadow:10rpx 10rpx 10rpx rgba(15,16,15,0.13);
      height: 100px;
      .combo-title {
        color: #000;
        
        box-sizing: border-box;
        padding: 0 10px;
        
      }
      .combo-time {
        color: #999;
      
        box-sizing: border-box;
        padding: 0 10px;
    
      }
      .combo-describe {
        color: #999;
    
        box-sizing: border-box;
        padding: 0 10px;
  
      }
    }
  }
}
</style>
