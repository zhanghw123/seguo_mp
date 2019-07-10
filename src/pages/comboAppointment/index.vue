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
    </div>
    <div class="btn">
      <div class="price">￥600</div>
      <div class="confirm">提交订单</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "我是默认页面",
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
        { name: "姜旭", checked: false },
        { name: "宋伟", checked: false }
      ]
    };
  },
  methods: {
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
  background: #eff3f6;
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
      box-shadow: 0rpx 10rpx 10rpx rgba(15, 15, 15, 0.1);
      margin-bottom: 20px;
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
        padding: 5px 8px;
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
