<template>
  <div class="container">
     <div class="top">
      <div class="title">我的预约</div>
      <img class="topbg" src="/static/images/topbg.png" />
      
    </div>
    <div class="main">
      <div v-for="(item,index) in arr" :key="index" class="appointment">
        <div class="time">
          <div class="name-box">摄影师：{{item.name}} </div>
          <div class="time-box">时 间：{{item.date}} {{timeObj[item.time_code]}}</div>
        </div>
        <div v-show="item.btnFlag" @click="cancel(item,index,arr)" class="btn">
          取消预约
        </div>
        <div v-show="!item.btnFlag" class="btn gray">
          预约完成
        </div>
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
  onShow() {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        //console.log(res)
      
        this.getMyyuyue(res.data.user_id);
      }
    })
  },
  methods: {
    getMyyuyue(id) {
      let params = {
        url: `/get_student_yuyue/${id}/`,
       
      }
      get(params).then(res=>{ 
        
         let currentTime = Date.now();
         console.log(res)
         console.log(currentTime)
         res.forEach((item)=>{
          //预约时间
          let yuyueTime1 = `${item.date} ${this.timeCode[item.time_code]}`.replace(/\-/g, '/')
          
          let yuyueTime = new Date(yuyueTime1).getTime();
          
          if(yuyueTime<currentTime){
            //已经过了预约的时间
            item.btnFlag = false
          }else{
            //还没有
            item.btnFlag = true
          }


        })
        console.log('111',res)
        this.arr = res.reverse()
        
      }) 
    },
    cancel(item,index,arr) {
      wx.showModal({
        //title: '弹窗标题',
        content: '您确定要取消您的预约吗？',
        confirmText: "确定",
        cancelText: "取消",
        success:  (res) => {
          console.log(res);
          if (res.confirm) {
            console.log('确定')
            let params = {
              url: `/delete_cameraman_time/${item.id}/`,
            
            }
            get(params).then(res=>{ 
              arr.splice(index,1);
              wx.showModal({
                content: '取消成功',
                showCancel: false,
                success:  (res) => {
                  if (res.confirm) {
                    console.log('用户点击确定')
                  }
                }
              });
              console.log('delete_cameraman_time',res)
            
            })
          } else {
            console.log('取消')
          }
        }
      });
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
    .appointment {
      background: #fff;
      width: 95%;
      box-sizing: border-box;
      padding: 0 20px;
      margin: 0 auto 20rpx;
      box-shadow:10rpx 10rpx 10rpx rgba(15,16,15,0.13);
      height: 180rpx;
     
      
      .time {
        width: 70%;
         height: 180rpx;
        float: left;
        
        .name-box {
          height: 90rpx;
          line-height: 90rpx;
         
           color: #1b4a5d;
        }
        .time-box {
           font-size: 14px;
          height: 90rpx;
          line-height: 90rpx;
          color: #1b4a5d;
        }
      }
      .btn {
        
        text-align: right;
        width: 30%;
        height: 180rpx;
        line-height: 180rpx;
        float: right;
        
      }
      .gray {
        color: #ccc;
      }
    }
  }
}
</style>
