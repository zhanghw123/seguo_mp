<template>
  <div class="content">
    <div class="top">
      <image class="topbg" src="/static/images/topbg.png" mode="widthFix"/>
    </div>
    <div class="title">我的作品</div>
    <view style="display:none">
      <image v-for="item in images" :key="item.id" :id="item.id" :src="item.image" @load="onImageLoad"></image>
    </view>
    <swiper 
      :current="currentTab" 
      duration="300"  
      @change="swiperTab"
      :style="{height:scroll_height}">
      <swiper-item >
        <scroll-view 
          class="scrollview" 
          scroll-y="true" 
          :style="{height:scrollH + 'px'}">
          <!-- @scrolltolower="loadImages" -->
          <view style="width:100%">
            <view class="img_item">
              <div style="height: 90rpx"></div>
              <div class="flowPic" v-for="item in col1" :key="item.id">
                <image @click="wxImgShow(item)" :src="item.image" :style="{height:item.height + 'rpx'}" />
                <div class="imgbottom">
                  <div class="more"><i @click="makeImg(item)" class="icon iconfont">&#xe645;</i></div>
                  <!-- <div class="more"><i  class="icon iconfont">&#xe645;</i></div> -->
                </div>
              </div>
            </view>
            <view class="img_item">
              <div style="height: 90rpx"></div>
              <div class="flowPic" v-for="item in col2" :key="item.id">
                <image  @click="wxImgShow(item)" :src="item.image" :style="{height:item.height + 'rpx'}" />
                <div class="imgbottom">
                  <div class="more"><i @click="makeImg(item)" class="icon iconfont">&#xe645;</i></div>
                  <!-- <div class="more"><i @click="makeImg(item)" class="icon iconfont">&#xe645;</i></div> -->
                </div>
              </div>
            </view>
          </view>
        </scroll-view>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import {get, post} from "@/http/api"
export default {
  components: {

  },
  data() {
    return {
      myImgs: [],
      myLikes: [],
      currentTab: 0,
      scroll_height: '',
      scrollH: 0,
      imgWidth: 345,
      col1H: 0,
      col2H: 0,
      loadingCount: 0,
      images: [],
      col1: [],
      col2: []
    };
  },

  onLoad(options) {
    this.col1H = 0
    this.col2H = 0
    this.col1 = []
    this.col2 = []
    this.images = []
    this.loadingCount = 0
    this.scrollH = 0
    let windowHeight = wx.getSystemInfoSync().screenHeight // 屏幕的高度
    let windowWidth = wx.getSystemInfoSync().screenWidth // 屏幕的宽度
    this.scroll_height = windowHeight * 750 / windowWidth - 200 - 100 + 'rpx'
    console.log(windowWidth, windowHeight)
    wx.getSystemInfo({
        success: (res) => {
            let ww = res.windowWidth;
            let wh = res.windowHeight;
            let scrollH = wh - 80;
            this.scrollH = scrollH
        }
    });
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.getUserImg(res.data.user_id)
      }
    })
  },
  methods: {
    makeImg(item) {
      console.log(item)
      wx.showModal({
        title: '温馨提示',
        content: '上传为涩果的优质的摄影作品并且可以在本小程序对外展示',
        confirmText: "确定",
        cancelText: "取消",
        success:  (res) => {
          console.log(res);
          if (res.confirm) {
            console.log('确定')
            let params = {
              url: `/make_user_picture/`,
              data: {
                id: item.imgid
              }
            }
            get(params).then(res=>{
              console.log('make_user_picture',res)
              if(res.code){
                wx.showModal({
                  content: '上传成功',
                  showCancel: false,
                  success:  (res) => {
                    if (res.confirm) {
                      console.log('用户点击确定')
                    }
                  }
                });
              }
              
            })
            
          } else {
            console.log('取消')

          }
        }
      });
    },
    wxImgShow(item) {
      console.log(item)
      wx.previewImage({
        current: item.image, // 当前显示图片的http链接
        urls: [item.image] // 需要预览的图片http链接列表
      })
    },
    getUserImg(user_id) {
      let params = {
        url: `/get_student_image/${user_id}/`,
      }
      get(params).then(res=>{
        console.log('getUserImg',res)
        this.myImgs = res
        this.loadImages()
      })
    },
    onImageLoad(e) {
      
      let imageId = e.target.id;
      let oImgW = e.target.width;         //图片原始宽度
      let oImgH = e.target.height;        //图片原始高度
      let imgWidth = this.imgWidth;       //图片设置的宽度
      let scale = imgWidth / oImgW;       //比例计算
      let imgHeight = oImgH * scale;      //自适应高度
      let images = this.images;
      let imageObj = null;

      for (let i = 0; i < images.length; i++) {
          let img = images[i];
          if (img.id === imageId) {
              imageObj = img;
              break;
          }
      }
      imageObj.height = imgHeight;
      let loadingCount = this.loadingCount - 1;
      let col1 = this.col1;
      let col2 = this.col2;
      if (this.col1H <= this.col2H) {
          this.col1H += imgHeight;
          col1.push(imageObj);
      } else {
          this.col2H += imgHeight;
          col2.push(imageObj);
      }
      if (!loadingCount) {
          this.images = [];
      }
      this.loadingCount = loadingCount;
      this.col1 = col1;
      this.col2 = col2;
      
    },

    loadImages() {
        let images = this.myImgs
        let baseId = "img-" + (+new Date());
        for (let i = 0; i < images.length; i++) {
         
          images[i].imgid = images[i].id
          images[i].id = baseId + "-" + i;
        }
        this.loadingCount = images.length,
        this.images = images
       
    }
    
  },
  
};
</script>

<style lang="scss">
page {
  height: 100%;
}
.content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #eff3f6;
  .title {
     width: 100%;
      color: #fff;
      font-size: 18px;
      text-align: center;
      z-index: 10;
      position: absolute;
      top: 20px;
    
  }
  .top{
    width:100%;
    height:200rpx;
    position:fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .topbg {
      width: 100%;
      height: 100%;
    }
  }
  .swiper-tab{
    width: 100%;
    text-align: center;
    height: 100rpx;
    font-size: 32rpx;
    line-height: 88rpx;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    z-index:10;
    .swiper-tab-item{
      width: 375rpx;
      height: 100rpx;
      margin: 0 50rpx;
      color:#FFF;
    }
    .active{
      color:#FFF;
      border-bottom: 6rpx solid #323c46;
    }
  }
  swiper{
    text-align: center;
    margin-top: 100rpx;
    .scrollview{
      display: flex; 
      flex-flow: column wrap;
      .img_item {
        width: 345rpx;
        float: left;
        margin-left: 20rpx; 
        image{
          width: 100%;
        }
        .flowPic{
          width:345rpx;
          height:auto;
          float: left;
          border-radius:6rpx;
          overflow:hidden;
          margin-bottom: 25rpx;
          image{
            width: 100%;
            display: block;
          }
          .imgbottom{
            height: 80rpx;
            background: #FFF;
            .like {
              width: 50%;
              height: 80rpx;
              line-height: 80rpx;
              float: left;
            }
            .more {
              width: 50%;
              float: right;
              height: 80rpx;
              line-height: 80rpx;
              .icon {
                font-size: 18px;
              }
            }
          }
        }
      }
    }
  }
}  



</style>
