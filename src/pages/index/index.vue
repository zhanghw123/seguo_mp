<template>
  <div class="container">
    
    <div class="a">{{text}}</div>
  </div>
</template>

<script>
import {get, post} from "@/http/api";
import fly from "@/http/config";
export default {
  data () {
    return {
     text: '我是首页'
    }
  },
  onLoad() {
    wx.showLoading({
      title: '加载中',
    })
    this.login();
  },

  methods: {
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
  .a {
    color: red;
  }

}


</style>
