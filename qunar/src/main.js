import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'
import FastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// 解决部分游览器 click 延迟问题
FastClick.attach(document.body)
// Vue-Awesome-Swiper 轮播插件
Vue.use(VueAwesomeSwiper)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
