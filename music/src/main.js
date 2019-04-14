import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

// default style
import 'common/stylus/index.styl'
// 解决移动端 300ms 延迟问题
fastclick.attach(document.body)
// 图片懒加载
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable */
import vConsole from 'vconsole'
console.log('test')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
