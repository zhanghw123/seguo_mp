<template>
  <div class="container">
    
    <swiper class="swiper"  
              @change="swiperChange"
              :previous-margin="50"
              :next-margin="50"
              :indicator-dots="false" 
              :autoplay="true" 
              :interval="5000" 
              :style="{height:swiperH}"
              :duration="800">
              
          <swiper-item v-for="(item, index) in bannerList"
                        @click="goPhotoer"
                        :key="index">
              <image  @load="getHeight"
                      
                      :style="{height:swiperH}"
                      :class="{ 'le-active': nowIdx===index }"  
                      :src="item.image" class="le-img" />
          </swiper-item>
          
        </swiper>
    <div class="appointment">
      <div class="circle">预</div>
      <div>个人写真拍摄</div>
    </div> 
    <div class="photo-album">
      <div class="album-item">
        <img src="/static/images/timg1.jpg" alt="">
        <div class="album-name">小清新</div>
      </div>
      <div class="album-item">
        <img src="/static/images/timg2.jpg" alt="">
        <div class="album-name">日系</div>
      </div>
      <div class="album-item">
        <img src="/static/images/timg3.jpg" alt="">
        <div class="album-name">古风</div>
      </div>
      <div class="album-item">
        <img src="/static/images/timg4.jpg" alt="">
        <div class="album-name">复古</div>
      </div>
    </div>   
  </div>
</template>

<script>
import {get, post} from "@/http/api";
import fly from "@/http/config";
export default {
  data () {
    return {
      text: '我是首页',
      bannerList: [],
      swiperH: "", //swiper高度
      nowIdx: 0, //当前swiper索引

    }
  },
  onLoad() {
    wx.showLoading({
      title: '加载中',
    })
    this.login();
    this.getBanner();
  },

  methods: {
    goPhotoer() {
      this.$router.push({ path: `../${'photographerWorks/main'}`});
    },

    login() {
      let code ;
      let encryptedData;
      let iv;
      let that = this;
      wx.login({
        success(res) {
          
          code = res.code
          if (res.code) {
            wx.getUserInfo({
              success(res) {
                
                encryptedData = res.encryptedData
                iv = res.iv

                wx.setStorage({
                  key:"wxInfo",
                  data:{
                    code:code,
                    encryptedData:encryptedData,
                    iv:iv
                  },
                  
                })

                that.userInfo = res.userInfo
                that.getJwt(code,res.encryptedData,res.iv);
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
    getJwt(code,encryptedData,iv) {
      let params = {
        url: '/api/enter/',
        data: {
          code: code,
          encryptedData:encryptedData,
          iv: iv
        }
      }
      post(params).then(res=>{ 
        //console.log('getJwt',res)
        fly.interceptors.request.use((request) => {
          let req = request;
          req.headers["Authorization"] = `Bearer ${ res.access }`;
          return req;
        });
        wx.setStorage({
          key:"jwt",
          data:res.access,
          success:() => {
            //this.getUserInfo();
          }
        })
        wx.hideLoading();
      })
    },
    getBanner() {
      let params = {
        url: '/get_rotation_chart/',
      }
      get(params).then(res => {
        this.bannerList = res
      })
    },
    getHeight(e) {
      
      let winWid = wx.getSystemInfoSync().windowWidth - 2 * 50; //获取当前屏幕的宽度
      let imgh = e.target.height; //图片高度
      let imgw = e.target.width;
      let h = winWid * imgh / imgw ;
      let sH = (h-20) + "px"

      this.swiperH = '188px' ;
    },
    swiperChange(e) {
      this.nowIdx = e.target.current;
    },
  },

  created () {
    // let app = getApp()
  }
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

  .appointment {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 90%;
    margin: 15px auto;
    height: 50px;
    background: #a8a9ab;
    border-radius: 25px;

    .circle {
      width: 40px;
      height: 40px;
      background: #fff;
      border-radius: 20px;
      text-align: center;
      line-height: 40px;
      margin: 0 10px;
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
      box-shadow:-8rpx 8rpx 10rpx rgba(15,16,15,0.2);
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
