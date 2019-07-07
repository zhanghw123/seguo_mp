import Vue from 'vue'
import App from './App'
import "mpvue-weui/src/style/weui.css";
import MpvueRouterPatch from "mpvue-router-patch";

import "mpvue-weui/src/style/weui.css";
import "../static/font/iconfont.css";


Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(MpvueRouterPatch);
const app = new Vue(App)
app.$mount()
