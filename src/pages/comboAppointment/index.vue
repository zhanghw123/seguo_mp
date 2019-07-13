<template>
  <div class="container">
    <div class="border"></div>
    <div class="question-wrapper">
      <div class="question-list">
        <div class="title">1.请问您几个人拍摄呢？</div>
        <div class="content clearIt">
          <div class="question-item" v-for="(item,index) in qst1"
            @click="qst1Click(item,index)"  
            :class="{'active':item.checked}" 
            :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="question-list">
        <div class="title">2.想拍什么样的风格？</div>
        <div class="content clearIt">
          <div class="question-item" v-for="(item,index) in qst2" 
          @click="qst2Click(item,index)"
          :class="{'active':item.checked}" 
          :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="question-list">
        <div class="title">3.是否需要化妆？</div>
        <div class="content clearIt">
          <div class="question-item" v-for="(item,index) in qst3" 
          @click="qst3Click(item,index)"
          :class="{'active':item.checked}"
          :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="question-list">
        <div class="title">4.您更喜欢哪个摄影师的风格？</div>
        <div class="content clearIt">
          <div class="question-item" v-for="(item,index) in qst4" 
          @click="qst4Click(item,index)"
          :class="{'active':item.checked}"
          :key="index">{{item.name}}</div>
        </div>
      </div>
      <div class="question-list">
        <div class="title">5.什么时候拍摄？</div>
        <div class="content">
          <div class="date-wrapper">
            <picker 
              mode="date" 
              :value="date" 
              start="2018-01-01" 
              @change="bindDateChange"> 
                    <p class="picker">
                      选择预约日期： {{date}}
                    </p>
            </picker>

          </div>
          <div class="time-wrapper">
            <picker @change="bindTimeChange" @cancel="bindTimeCancel" :value="index" :range="timeArray" range-key="time">
              <view class="picker">选择预约时间： {{time}}</view>
            </picker>
          
          </div>
        </div>
      </div>
      <div class="question-list">
        <div class="title">6.您的联系电话？</div>
        <div class="content">
          <input class="ipt"
              v-model="phoneNumber"
              placeholder="请输入联系电话"
              type="text"/>
        </div>
      </div>
    </div>
    <div class="btn">
      <div class="price">￥600</div>
      <div class="confirm" @click="gopayOrder()">提交订单</div>
    </div>
  </div>
</template>

<script>
import {get, post,postJSON} from "@/http/api"
export default {
  data() {
    return {
      text: "我是默认页面",
      phoneNumber:'',
      date:'',
      index: '',
      time: '',
      time_code: '',
      timeArray:[],
      timeShow: false,
      Cameraman_id: '1',
      select1: '',
      select2: '',
      select3: '',
      select4: '',
      qst1: [
        { name: "闺蜜", checked: false },
        { name: "情侣", checked: false },
        { name: "小团队", checked: false },
        { name: "其他", checked: false }
      ],
      qst2: [
        { name: "颜值为先", checked: false },
        { name: "气质派", checked: false },
        { name: "小清新", checked: false },
        { name: "故事性", checked: false }
      ],
      qst3: [
        { name: "需要", checked: false },
        { name: "不需要", checked: false }
      ],
      qst4: [
        { name: "崇明", checked: false },
        { name: "鹿晗", checked: false },
        { name: "陈冠希", checked: false },
        { name: "吴亦凡", checked: false }
      ]
    };
  },
  methods: {
    gopayOrder() {
      this.$router.push({ path: `../${"payOrder/main"}` });
    },
    qst1Click(item,index) {
      this.select1 = item.name
      this.qst1.forEach((ele,i) => {
        if(item.name===ele.name){
           this.$set(this.qst1[index],'checked',true)
        }else {
          this.$set(this.qst1[i],'checked',false)
        }
      });
    },
    qst2Click(item,index) {
      this.select2 = item.name
      this.qst2.forEach((ele,i) => {
        if(item.name===ele.name){
           this.$set(this.qst2[index],'checked',true)
        }else {
          this.$set(this.qst2[i],'checked',false)
        }
      });
    },
    qst3Click(item,index) {
      this.select3 = item.name
      this.qst3.forEach((ele,i) => {
        if(item.name===ele.name){
           this.$set(this.qst3[index],'checked',true)
        }else {
          this.$set(this.qst3[i],'checked',false)
        }
      });
    },
    qst4Click(item,index) {
      this.select4 = item.name
      this.qst4.forEach((ele,i) => {
        if(item.name===ele.name){
           this.$set(this.qst4[index],'checked',true)
        }else {
          this.$set(this.qst4[i],'checked',false)
        }
      });
    },
    bindDateChange(e) {
     
      this.date = e.target.value
      this.getDateStatus(this.Cameraman_id,e.target.value)
    },
    bindTimeChange(e) {
      console.log(e)
      
      this.index = e.target.value
      this.time = this.timeArray[e.target.value].time
      this.time_code = this.timeArray[e.target.value].time_code
      console.log(this.timeArray[e.target.value].time_code)
     
    },
    getDateStatus(Cameraman_id,date) {
      let params = {
        url: /get_cameraman_time/,
        data: {
          Cameraman_id: Cameraman_id,
          date: date
        }
        
      };
      postJSON(params).then(res=>{ 
        console.log('查看某一天的时间',res)
        this.parseDateStatus(res)
        this.timeShow = true
      }) 
    },
    parseDateStatus(arr) {
     
      let box = [];
      let timearr = [
        {time:'08:00 - 10:00',time_code: 1},
        {time:'10:00 - 12:00',time_code: 2},
        {time:'14:00 - 16:00',time_code: 3},
        {time:'16:00 - 18:00',time_code: 4}
      ]
      if(arr.length==0) {
        this.timeArray = timearr;
      }else{
        for(let i = timearr.length - 1; i >= 0; i--) {
          for(let n=0; n<arr.length; n++) {
            if(timearr[i].time_code == arr[n].time_code) {
              console.log(timearr)
              timearr.splice(i, 1)
              break
            }
          }
        }
        this.timeArray = timearr
      }
      console.log('要显示是time',this.timeArray)
    },
  },
};
</script>

<style lang="scss" scoped>
.clearIt { zoom:1; }
 .clearIt:after {
    content:".";
    display:block; 
    height:0;
    visibility:hidden; 
    clear:both; 
}


.container {
  width: 100%;
  height: 100%;
  display: flex;
  background:white;
  flex-direction: column;
  box-sizing: border-box;
  .border {
    margin-bottom: 20px;
  }
  .btn {
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    background: #fff;
    font-size: 18px;
    .price {
      flex: 1;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding-left: 30px;
    }
    .confirm {
      width: 30%;
      height: 100%;
      background:#dc050a;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;

    }
  }
  .question-wrapper {
    
    flex:1;
    overflow: auto;

    .question-list {
      width: 90%;
      margin: 0 auto;
      background: #fff;
      box-sizing: border-box;
      padding: 15px;
      box-shadow: 0rpx 7rpx 7rpx rgba(15, 15, 15, 0.1);
      margin-bottom: 15px;
      .active {
        background: #ccffff !important;
      }
      .title {
        margin-bottom: 5px;
      }
      .content {
        clear:both
      }
      .question-item {
        padding:0 5px;
        float: left;
        background: #e0e0e0;
        border-radius: 2px;
        margin-right: 15px;
        margin-bottom: 5px;
        &:last-child {
          margin: 0;
        }
      }
    }
  }
}
</style>
