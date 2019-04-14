# Music

#### 项目介绍
Vue 2.0实战高级开发 - 移动端音乐Web APP

2018-08-27

> 参考网址

- [QQ音乐网址](http://y.qq.com/m/index.html)
- [ECMAScript 6 入门](http://www.nodeclass.com/api/ECMAScript6.html)
- [fastclick](https://github.com/ftlabs/fastclick)
- [jsonp](https://github.com/webmodules/jsonp)
- [better-scroll](https://github.com/ustbhuangyi/better-scroll)
- [axios](https://github.com/axios/axios)
- [vue-lazyload](https://github.com/hilongjw/vue-lazyload)


> 工具

1. Google JOSNView 插件<br />
   谷歌浏览器中访问URL地址返回的格式化的 json 数据

#### Install

> 开发环境


1. 使用脚手架命令行工具 vue-cli 创建 vue 项目
    ```
    // 创建一个基于 webpack 模板的新项目
    vue init webpack Music    // Music => 项目文件存放位置

    ? Target directory exists. Continue? Yes
    ? Project name vue2.0-music
    ? Project description imooc.com vue2.0 music app
    ? Author 风灬 <1439325938@qq.com>
    ? Vue build (Use arrow keys)
    ? Vue build runtime
    ? Install vue-router? Yes
    ? Use ESLint to lint your code? Yes
    ? Pick an ESLint preset Standard
    ? Set up unit tests No
    ? Setup e2e tests with Nightwatch? No
    ? Should we run `npm install` for you after the project has been created? (recom
    ? Should we run `npm install` for you after the project has been created? (recom

    mended) npm

       vue-cli · Generated "Music".

    # Installing project dependencies ...
    # ========================
    ```

#### 准备工作

1. 初始化后目录如下：

    <br />

    ![list](https://images.gitee.com/uploads/images/2018/0827/173516_8c20f1c4_2123176.png "list.png")

    > 所有开发是基于修改 src 的文件

    ```
    api:          用来放跟后端请求相关 
    common：      通用的静态资源（fonts／image／js/stylus） 
    components:   通用组件 
    router:       路由相关组件 
    store：       vuex相关代码 
    App.vue:      模版 
    main.js:      文件入口，用来渲染app的文件
    ```   

2. src/stylus/variable.styl 文件里的变量定义：

    > src/stylus 中基础文件定义
      <br />        
      详情看源码

    ```
    // 颜色定义规范
    $color-background = #222
    $color-background-d = rgba(0, 0, 0, 0.3)
    $color-highlight-background = #333
    $color-dialog-background = #666
    $color-theme = #ffcd32
    $color-theme-d = rgba(255, 205, 49, 0.5)
    $color-sub-theme = #d93f30
    $color-text = #fff
    $color-text-d = rgba(255, 255, 255, 0.3)
    $color-text-l = rgba(255, 255, 255, 0.5)
    $color-text-ll = rgba(255, 255, 255, 0.8)

    //字体定义规范
    $font-size-small-s = 10px
    $font-size-small = 12px
    $font-size-medium = 14px
    $font-size-medium-x = 16px
    $font-size-large = 18px
    $font-size-large-x = 22px
    ```
3. 引用初始化 css

    > src/stylus/index.styl 文件中的引用其他基础样式文件
    ```
    @import "./reset.styl"
    @import "./base.styl"
    @import "./icon.styl"
    ```
    > main.js 中引用 index.styl 文件
    ```
    // requier style
    import 'common/stylus/index.styl'
    ```

4. 修改 package.json 文件

   > 添加 stylus & stylus-loader 依赖<br />npm install 安装依赖
    ```
    "stylus": "^0.54.5",
    "stylus-loader": "^2.1.1"
    ```

5. webpack.base.conf.js 配置路径别名
   
    ```
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        'common': resolve('src/common'),
        'components': resolve('src/components'),
        'base': resolve('src/base'),
        'api': resolve('src/api')
      }
    },
    ```

6. .eslintrc.js 修改检查规则
    
    ```
    'rules': {
      .. ..

      'eol-last': 0,    // 不检查文件末尾是否留出一个空行
      'space-before-function-paren': 0    // function 左括号是否有空格
    }
    ```


#### 页面入口+header组件的编写

1. index.html 适配手机
    
    ```
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    ```

2. 添加依赖
   
    ```
    "dependencies": {
     "babel-runtime": "^6.26.0",    // es6转译
     "fastclick": "^1.0.6"    // 部分移动端点击300ms延时
    }

    "devDependencies": {
      .. ..

      "babel-polyfill": "^6.2.0"
    }
    ```

3. main.js 中引入
    
    ```
    import 'babel-polyfill'    // 必须放在最上面
    import fastclick from 'fastclick'

    fastclick.attach(document.body)    // 绑定在 body 上
    ```

4. 编写 m-header 组件
   > 详情参考源码 

#### 路由配置
1. 路由配置
    ```
    // 引用组件
    // Recommend Singer Rank Search

    import Recommend from 'components/recommend/recommend'
    .. ..
    
    // 配置 router 路径
    routes: [
      {
        path: '/',
        redirect: '/recommend'    // 配置根目录跳转
      },
      {
        path: '/recommend',
        component: Recommend
      },
      .. ..
    ]
    ```
2. main.js 引用 router 实例
   
    ```
    import router from './router'
    
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
    ```
3. App.vue 中使用
    
    ```
    <template>
      <div id="app">
        <m-header></m-header>
        <router-view></router-view>
      </div>
    </template>
    ```

4. 编写 tag 组件
    > 详情参考源码

#### JSONP
https://github.com/webmodules/jsonp

1. Install
    ```
    npm i jsonp --save
    
    // 也可以在 package.json 中添加依赖，再 install i 安装
    "dependencies": {
        "jsonp": "^0.2.1"
    }
    ```

2. jsonp的封装

    > path: src/common/js/jsonp.js
    ```
    import originJSONP from 'jsonp' // 引用第三方资源包 jsonp

    export default function jsonp (url, data, option) {
      url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // url 拼接

      return new Promise((resolve, reject) => {
        originJSONP(url, option, (err, data) => {
          if (!err) {
            resolve(data)
          } else {
            reject(err)
          }
        })
      })
    }

    function param(data) { // 参数拼接
      let url = ''
      for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        // es6 模板字符串
        url += `&${k}=${encodeURIComponent(value)}` // $key=value

        // url += '&' + k + '=' + encodeURIComponent(value)
      }
      return url ? url.substring(1) : '' // key=value$key=value$key=value...
    }
    ```

3. 定义一些公共参数，不用每次再去重写

    > path: src/api/config.js
    ```
    export const commonParams = { // 公共参数
      g_tk: 5381,
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      format: 'jsonp'
    }

    export const options = { // jsonp 参数
      param: 'jsonpCallback'
    }

    export const ERR_OK = 0
    ```

4. 使用jsonp 调取轮播图的数据

    > path: src/api/recommend.js
    ```
    import jsonp from 'common/js/jsonp'
    import {commonParams, options} from './config'

    export function getRecommend () {
      const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      
      const data = Object.assign({}, commonParams, { // es6 语法
        uin: 0,
        platform: 'h5',
        needNewCode: 1
      })

      return jsonp(url, data, options)
    }
    ```

5. 在 recommend 组件中调用接口
    > 配置别名
    ```
    'api': resolve('src/api')
    ```
    ```
    import {getRecommend} from 'api/recommend'
    import {ERR_OK} from 'api/config'

    export default {
      methods: {
        _getRecommend () {
          getRecommend().then((res) => {
            if (res.code === ERR_OK) {
              console.log(res.data.slider)
            }
          })
        }
      },
      created () {
        this._getRecommend()
      }
    }
    ```

6. recommend 组件编写
    > 详情参考源码

#### 轮播基础组件实现

1. slider 组件编写

> path: src/base/slider/slider 详情参考源码
```
<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots"></div>
  </div>
</template>
```

2. 配置别名 & 添加 better-scroll 依赖
    ```
    'base': resolve('src/base')，
    ```
    
    ```
    npm i better-scroll --save // ^1.12.6
    // 视频中的版本号 ^0.1.15
    ```

3. recommend 组件编写 slot DOM结构

    _注: v-if="recommend.length"  JSONP 异步操作，需要获取数据后渲染_ 
    ```
    <div v-if="recommend.length" class="slider-wrapper">
      <slider>
        <div v-for="item of recommend" :key="item.id">
          <a :href="item.linkUrl">
            <img :src="item.picUrl" alt="">
          </a>
        </div>
      </slider>
    </div>
    ```
     
4. slider 通过第三方资源 better-scroll 实现轮播

```
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'

export default {
  props: { // 外部控制组件实现相应的功能
    loop: { // 循环轮播
      type: Boolean,
      default: true
    },
    autoPlay: { // 自动轮播
      type: Boolean,
      default: true
    },
    interval: { // 时间间隔
      type: Number,
      default: 4000
    }
  },
  methods: {
    _setSliderWidth () {},
    _initSlider () {},
  },
  mounted () {
    setTimeout(() => { // 游览器渲染帧间隔为 16ms 左右
      this._setSliderWidth()
      this._initSlider()
    }, 20)
  }
}
```

> 通用 DOM 操作 -- addClass
  <br />
  path: src/common/dom.js

```
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ') // 拆分 class => ["aaa", "bbb"]
  newClass.push(className)
  el.className = newClass.join(' ') // 合并 class => ["aaa", "bbb", "className"]
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

```

> this._setSliderWidth()
```
_setSliderWidth () { // 横向滚动，设置所需宽度
  this.childer = this.$refs.sliderGroup.children // 获取 slider

  let width = 0
  let sliderWidth = this.$refs.slider.clientWidth
  for (let i = 0; i < this.childer.length; i++) {
    let child = this.childer[i]
    addClass(child, 'slider-item')
    child.style.width = sliderWidth + 'px'
    width += sliderWidth
  }

  if (this.loop) { // BScroll 循环播放自动增加两个 slider
    width += 2 * sliderWidth
  }
  this.$refs.sliderGroup.style.width = width + 'px' // slider 父级元素宽度
}
```

> this._initSlider()

  [参数配置参考链接](https://github.com/ustbhuangyi/better-scroll)
 ```
_initSlider () { // 在 PC 端滑动会触发 click 事件
  this.slider = new BScroll(this.$refs.slider, {
    scrollX: true,
    scrollY: false,
    momentum: false,
    snapLoop: this.loop,
    snapThreshold: 0.3,
    snapSpeed: 400,
    // snap: true // 循环播放 better-scroll@0.1.15
    snap: { // better-scroll@1.12.6
      loop: true
    }
  })
}
```

4. 轮播 pages

> 定义数据， mounted 中使用 _initDots()
```
data () {
  return {
    dots: [], // 用于记录 pages 长度
    currentPageIndex: 0 // 当前位置索引
  }
}

mounted () {
  setTimeout(() => { // 游览器渲染帧间隔为 16ms 左右
      .. ..
      this._initDots()
  }, 20)
}
```

> this._initDots()
```
_initDots () { // pages 长度
  this.dots = new Array(this.childer.length)
}
```

> 轮播 pages 位置
```
_initSlider () {
  .. ..

  this.slider.on('scrollEnd', () => { // BScroll scrollEnd 事件
    let pageIndex = this.slider.getCurrentPage().pageX
    /* if (this.loop) { // better-scroll@0.1.15
         pageIndex -= 1
       } */
    this.currentPageIndex = pageIndex
  })
}
```

> DOM 编写
```
<div class="dots">
  <span class="dot"
        v-for="(item, index) of dots"
        :key="index"
        :class="{active : currentPageIndex === index}"
  ></span>
</div>
```

5. 自动轮播

> mounted 中使用 _play()
```
mounted () {
  setTimeout(() => { // 游览器渲染帧间隔为 16ms 左右
    .. ..

    if (this.autoPlay) {
      this._play()
    }
  }, 20)
}
```

> _play()
```
_play () {
  let pageIndex = this.currentPageIndex + 1
  // if (this.loop) { ^0.1.15
  //   pageIndex -= 1
  // }

  this.timer = setTimeout(() => {
    this.slider.goToPage(pageIndex, 0, 400) // BScroll 接口
  }, this.interval)
}
```

> scrollEnd 监听事件中调用 _play()
```
this.slider.on('scrollEnd', () => { // BScroll scrollEnd 事件
  .. ..

  if (this.autoPlay) {
    clearInterval(this.timer)
    this._play()
  }
})
```

6. 优化

> 浏览器窗口调整大小
```
    mounted () {
      .. ..
    
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
    
        this._setSliderWidth(true)
        this.slider.refresh() // BScroll 接口
      })
    }
```

> 为 _setSliderWidth() 添加一个 isResized 参数
```
    _setSliderWidth (isResized) {
      .. ..
  
      // 在浏览器窗口调整大小时，不再为父级增加宽度
      if (this.loop && !isResized) { // BScroll 循环播放自动增加两个 slider
        width += 2 * sliderWidth
      }
    }
```

> 缓存 -- 列表切换时，不重复调用 ajax
  <br />
  path: src/App.vue
  ```
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  ```

> 切换列表时，destroyed 生命周期函数销毁 timer
  ```
  destroyed () {
    clearTimeout(timer)
  }
  ```

#### 歌单列表

1. axios ajax请求

> [axios 文档](https://github.com/axios/axios)
```
npm i axios --save // ^0.18.0
```

2. 后端接口代理

 _Vue-cli 废除了 dev-server.js_ 

> 在 webpack.dev.conf.js 中配置

```
// 后端代理
const axios = require('axios'
const express = require('express')
const app = express() // 请求server
const apiRoutes = express.Router()
app.use('/api', apiRoutes) // 通过路由请求数据

// 在 devServer 中配置
devServer: {
    // 通过axios代理请求
    before(app) {
      app.get('/api/getDiscList', (req, res) => {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

        axios.get(url, {
          headers: { // 发送 http 请求修改请求头 -- 欺骗手段
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          // 是由nodejs默认提供，无需载入中间件,
          // 此方法多适用于GET请求，解析GET请求中的参数包含在路由中每个查询字符串参数属性的对象，如果没有则为{} 
          params: req.query // nodejs的express框架
        }).then((response) => {
          res.json(response.data)  //  发送一个 JSON 格式的响应
        }).catch((e) => {
          console.log('axios err' + e)
        })
      })
    },
    
    .. ..
}
```

3. recommend.js 中
```
import axios from 'axios'
.. ..

export function getDiscList () {
  const url = '/api/getDiscList'

  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
```

4. recommend 组件使用
```
methods: {
  _getRecommend () {
    .. ..
  },
  _getDiscList () {
    getRecommend().then((res) => {
      if (res.code === ERR_OK) {
        console.log(res.data.list)
      }
    })
  }
},
created () {
  this._getRecommend()
  this._getDiscList()
}
```

5. recommend 组件编写
> 详情参考源码


#### scroll 基础组件的抽象和应用
> path: src/base/scroll

1. 使用 slot 插槽
```
<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
```

2. scroll 组件逻辑代码
```
import BScroll from 'better-scroll'

export default {
  props: { // 外界可控参数，达到不同的需求
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  methods: {
    _initScroll () { // 初始化加载 BScroll 达到局部滚动
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, { // 传递参数
        probeType: this.probeType,
        click: this.click
      })
    },
    // 代理方法
    enable () {
      this.scroll && this.scroll.enable()
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    }
  },
  watch: { // 监听数据变化，改变数据执行 refresh 重新计算
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  },
  mounted () {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  }
}
```

3. recommend 使用 scroll 组件


> BScroll 需要加个 div 包裹层

```
<scroll class="recommend-content" :data="discList" ref="scroll">
  <div>
  .. ..
  </div>
</scroll>
```

> 为 img 添加一个监听事件  @load="loadImg"
```
<img :src="item.picUrl" @load="loadImg" alt="">
```

> 当 img 加载时，重新计算 BScroll 高度<br />
```
methods: {
  .. ..

  loadImg () {
    if (!this.checkLoaded) { // 第一张图片加载
      this.$refs.scroll.refresh() // scroll 组件中的代理方法
      this.checkLoaded = true
    }
  }
}
```

> 测试
```
created () {
  setTimeout(() => { // 延迟加载 header 达到高度未确定的测试效果
    this._getRecommend()
  }, 2000)
  this._getDiscList()
}
```

#### 图片懒加载

1. 安装 vue-lazyload 第三方依赖包

[vue-lazyload  文档](https://github.com/hilongjw/vue-lazyload)

```
npm i vue-lazyload --save // ^1.2.6
```

2. 引入 & 注册<br />
> path: src/main.js

```
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('common/image/default.png') // 默认图片
})
```

3. 使用

```
// recommend 组件中, 将歌单推荐中的 :src 改成 v-lazy

<img :src="item.imgurl" width="60" height="60" alt="">

<img v-lazy="item.imgurl" width="60" height="60" alt="">
```

4. 在 better-scroll@0.1.15 版本，默认会阻止浏览器的原生 click 事件

- 详情参考 [fastclick 官方文档](https://github.com/ftlabs/fastclick)

```
// 添加 needclick 样式
// fastclick 监听 click 事件，如果有 needsclik，它会抑制click浏览器之后创建的其他事件

<img class="needsclick" :src="item.picUrl" @load="loadImg" alt=""> 
```

#### loading 组件

1. loading 组件编写 => gif 图
> 详情参考源码<br />
  path: src/base/loading

2. recommend 组件使用

```
<scroll class="recommend-content" :data="discList" ref="scroll">
  .. ..

  <div class="loading-container" v-show="!discList.length">
    <loading></loading>
  </div>
</scroll>
```

> 弱网测试
```
import Loading from 'base/loading/loading'

created () {
  this._getRecommend()
  setTimeout(() => {
    this._getDiscList()
  }, 2000)
}
```

#### singer 组件 -- 获取数据

1. JSONP
> path: src/api/singer.js

```
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getSingerList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonp(url, data, options)
}
```

2. 引用数据

```
data () {
  return {
    singers: []
  }
},
methods: {
  _getSingerList () {
    getSingerList().then((res) => {
      if (res.code === ERR_OK) {
       this.singers = res.data.list
        console.log(this.singers)
      }
    })
  }
},
created () {
  this._getSingerList()
}
```

3. 处理数据

> 创建一个　class, 封装对象<br />
  path: src/common/js/singer.js
```
export default class Singer {
  constructor ({id, name}) {
    this.id = id
    this.name = name
    this.avatar = `https://y.gtimg.cn/music/photo_new/T001R300x300M000${id}.jpg?max_age=2592000`
  }
}
```

> singer 组件处理数据
```
    _normalizeSinger (list) {
      let map = { // 定义一个对象存储
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => { // 获取所需数据
        if (index < HOT_SINGER_LENGHT) { // 获取热门数据
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        // 将数据通过 Findex 进行分类
        const key = item.Findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
      // 获取有序列表，处理map
      let hot = []
      let ret = []
      for (let key in map) { // 拆分数组
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => { // 排序
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      return hot.concat(ret) // 返回一个数组
    }
```

#### listview 基础组件
> 详情参考源码
  path: src/base/listview

```
<!-- singer 组件调用,传入 singer 数据  -->
<scroll class="listview" :data="data">
  .. ..
</scroll>

<!-- 注：图片使用懒加载 -->
<img v-lazy="item.avatar" alt="" class="avatar">
```

```
import Scroll from 'base/scroll/scroll'

export default {
  props: {
    data: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Scroll
  }
}
```

#### listview基础组件 -- 右侧快速入口实现

1. 处理数据，获取 title 数组
```
  computed: { 
    shortcutList () {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  }
```

2. DOM 结构
> 绑定 touch 触发时间。添加一个自定义属性，用于监听
```
    <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList" :key="index" :data-index="index" class="item">
          {{item}}
        </li>
      </ul>
    </div>
```

3. dom.js 定义用于获取属性值的方法
```
export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) { // 如果有传入 val , 覆盖原先的值
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
```

4. scroll 基础组件添加代理方法
```
methods: {
  .. ..
  
  scrollTo () {
    this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
              },
  scrollToElement () {
    this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
  }
}
```

5. 点击 & 滚动联动

    > 为何不在 data 中定义？
    - Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化
    - 这个值的作用是用于暂时性的存储数据，不需要监听
    
```
created () { 
  this.touch = {} // 存储数据的临时变量，不需要监听它的变化
}

methods: {
  onShortcutTouchStart (e) {
    let anchorIndex = getData(e.target, 'index')
    let firstTouch = e.touches[0]
    this.touch.y1 = firstTouch.pageY // 鼠标开始位置
    this.touch.anchorIndex = anchorIndex // 记录开始位置的 index
    this._scrollTo(anchorIndex) // 鼠标点击事件触发
  },
  onShortcutTouchMove (e) {
    let firstTouch = e.touches[0]
    this.touch.y2 = firstTouch.pageY // 鼠标结束位置
    // 高度差 / 高度，获取经过几个位置
    // | 0 相当于 Math.floor() 向下舍入
    let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
    // 鼠标结束位置下标
    let anchorIndex = parseInt(this.touch.anchorIndex) + delta
    this._scrollTo(anchorIndex) // 鼠标滑动触发
  },
  _scrollTo (index) {
    // BScroll 方法
    // 第二个参数 time 滚动动画执行的时长（单位 ms）
    this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
  }
}
```

6. 右侧高亮样式联动

> scroll 基础组件方法扩展
```
 props: {
  .. ..
  listenScroll: { // 是否监听滚动
    type: Boolean,
      default: false
    }
 }
 
 methods: {
   _initScroll () {
     .. ..
     
     // 监听滚动事件
     if (this.listenScroll) {
       let _that = this
          
       // BScroll 方法 {x, y} 滚动的实时坐标, 取决于 probeType 值
       this.scroll.on('scroll', (pos) => {
         _that.$emit('scroll', pos)
       })
     }
   }
 }
 ```
 
> DOM
```
<scroll class="listview"
  :data="data"
  ref="listview"
  :listenScroll="listenScroll"
  @scroll="scroll"
  :probeType="probeType"
>
 .. ..
 <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
   <ul>
     <li v-for="(item, index) in shortcutList"
         :key="index"
         :data-index="index"
         :class="{'current' : currentIndex===index}"
         class="item"
     >
       {{item}}
     </li>
   </ul>
 </div>
</scroll>
```

> 逻辑代码
```
data () {
  return {
    scrollY: -1, // 用于监听滚动 Y 轴偏移量
    currentIndex: 0 // 用于记录滚动到第几个位置
  }
},
methods: {
    scroll (pos) { // 从 scroll 基础组件中接收到的值
      this.scrollY = pos.y
    },
    _calculateHeight () { // 每一个内容可视区域的高度的 Array 集合
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0, l = list.length; i < l; i++) { // 获取内容可视区域的高度
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
},
watch: {
  data () { // 父组件传入的数据
    setTimeout(() => {
      this._calculateHeight()
    }, 20)
  },
  scrollY (newY) { // 改变 currentIndex 实现切换样式
    const listHeight = this.listHeight
    // 当滚动到顶部，newY>0
    if (newY > 0) {
      this.currentIndex = 0
      return
    }
    // 在中间部分
    for (let i = 0; i < listHeight.length - 1; i++) {
      let height1 = listHeight[i]
      let height2 = listHeight[i + 1]
      if (-newY >= height1 && -newY < height2) { // -newY >= height1 的意义在于
        this.currentIndex = i
        return
      }
    }
    // 当滚动到底部，且 -newY 大于最后一个元素的上限
    this.currentIndex = listHeight.length - 2
  }
},
// Vue 实例的数据对象。
// Vue 将会递归将 data 的属性转换为 getter/setter，从而让 data 的属性能够响应数据变化。
created () { // 只为存储数据，不需要 vue 内部进行转换
 this.touch = {}
 this.listHeight = []
 this.listenScroll = true
 this.probeType = 3
}
```

7. 功能优化

> 点击实现样式联动 & 边界处理
```
_scrollTo (index) {
  // 上下 padding 处理
  if (!index && index !== 0) { // index === null
    return
  }
  // 边界处理
  if (index < 0) {
    index = 0
  } else if (index > this.listHeight.length - 2) {
    index = this.listHeight - 2
  }

  // 修改 scrollY 的值，在 watch 中自动触发事件
  this.scrollY = -this.listHeight[index]
  this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
}
```

8. 滚动固定标题实现

> DOM
```
<scroll>
  .. ..

  <div class="list-fixed" v-show="fixedTitle" ref="fixed">
    <h1 class="fixed-title">{{fixedTitle}}</h1>
  </div>
</scroll>
```

> 部分功能实现
```
data () {
  return {
    .. ..
    
    diff: -1 // 用于记录两个内容区块的高度差
  }
},
computed: {
  .. ..

  fixedTitle () { 
    if (this.scrollY > 0) { // 顶部消失
      return
    }

    // 此处 this.data 是父组件传入的数据数组
    return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
  }
},
watch: {
  scrollY (newY) {
    for (let i = 0; i < listHeight.length - 1; i++) {
      if (-newY >= height1 && -newY < height2) {
        this.currentIndex = i
        this.diff = height2 + newY // 获取高度差
        return
    }
    }
  }

  diff (newVal) {
    // 高度差 - title 的高度，获得一个负值
    let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0 
    if (this.fixedTop === fixedTop) { // 未重叠时，不操作
      return
    }
    this.fixedTop = fixedTop // fixedTop 最终会等于 0
    this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0` // 改变偏移量
  }
}
```

9. loading 加载

> DOM
```
<scroll>
  .. ..

  <div v-show="!data.length" class="loading-container">
    <loading></loading>
  </div>
</scroll>
```

> 引用组件
```
import Loading from 'base/loading/loading'

components: {
  Scroll,
  Loading
}
```

#### 歌手详情页

> DOM 部分，详情参考源码 <br />
  path: src/components/singer-detail

> 路由配置

```
import SingerDetail from 'components/singer-detail/singer-detail'
export default new Router({
  routes: [
    .. ..

    {
      path: '/singer',
      component: Singer,
      children: [
        {
          path: ':id',
          component: SingerDetail
        }
      ]
    }
  ]
})
```

> listview 基础组件
```
<li v-for="item of group.items"
    :key="item.id"
    @click="selectItem(item)"
    class="list-group-item"
>
  .. ..
</li>

methods: {
  selectItem (item) { // 将 item 数据作为第一个参数
    this.$emit('select', item)
  }

  .. ..
}
```

> singer 组件
```
<template>
  <div class="singer">
    <list-view :data="singers" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>


methods: {
  selectSinger (singer) { // 接收 item 获取 id
    this.$router.push({
      path: `/singer/${singer.id}`
    })
  },
  
  .. ..
}
```

#### Vuex 初始化

1. 目录结构

![目录结构](https://images.gitee.com/uploads/images/2018/0904/103734_361297fc_2123176.png "屏幕截图.png")

2. 配置

    > mutations.js
    
    ```
    import * as types from './mutation-types'
    
    const mutations = {
      [types.SET_SINGER] (state, singer) {
        state.singer = singer
      }
    }
    
    export default mutations
    ```

    > mutation-types.js
    
    ```
    // 使用常量替代 Mutation 事件类型
    export const SET_SINGER = 'SET_SINGER'
    ```

    > getters.js
    
    ```
    export const singer = state => state.singer
    ```

    > state
    
    ```
    const state = {
      singer: {}
    }
    
    export default state
    ```

    > index.js
    
    ```
    import Vue from 'vue'
    import Vuex from 'vuex'
    import * as actions from './action'
    import * as getters from './getters'
    import state from './state'
    import mutations from './mutations'
    // 内置 Logger 插件
    import createLogger from 'vuex/dist/logger'
    
    Vue.use(Vuex)
    // 严格模式
    const debug = process.env.NODE_ENV !== 'production'
    
    export default new Vuex.Store({
      actions,
      getters,
      state,
      mutations,
      strict: debug,
      plugins: debug ? [createLogger()] : []
    })
    
    ```

3. main.js 引用

    ```
    import store from './store'
    
    new Vue({
      el: '#app',
      render: h => h(App),
      router,
      store
    })
    ```

4. singer 组件中提交 mutation
    ```
    import {mapMutations} from 'vuex'
    
    methods: {
      selectSinger (singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer) // 提交 Mutation
      },
      .. ..
      
      ...mapMutations({
        setSinger: 'SET_SINGER' // 创建方法
      })
    }
    ```

5. singer-detail 组件中接收 vuex 传入的 singer

    ```
    import {mapGetters} from 'vuex'
    export default {
      computed: {
        ...mapGetters([ // 将 store 中的 getter 映射到局部计算属性
          'singer'
        ])
      },
      created () {
        console.log(this.singer)
      }
    }
    ```

#### JSONP 歌手详情数据抓取

1. singer.js 定义

```
export function getSingerDetail (singerId) {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'

  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 80,
    songstatus: 1,
    singermid: singerId
  })

  return jsonp(url, data, options)
}
```

2. singer-detail 组件调用

```
methods: {
  _getSingerDetail () { // 将 singer.id 作为参数传入
    getSingerDetail(this.singer.id).then((res) => {
      if (res.code === ERR_OK) {
        console.log(res.data.list)
      }
    })
  }
},
created () {
  this._getSingerDetail()
  console.log(this.singer)
}
```

#### 数据处理 & Song 类的封装

1. 数据处理

> path: src/common/js/song.js

```
export default class Song { // 所需数据
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}

export function createSong (musicData) { // 封装处理后的数据
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/${musicData.songid}.m4a?fromtag=46`
  })
}

function filterSinger (singer) { // 只获取名字
  let ret = []
  if (!singer) {
    return ''
  }
  singer.forEach((item) => {
    ret.push(item.name)
  })

  return ret.join('/')
}
```

2. singer-detail 组件使用

```
import {createSong} from 'common/js/song'

data () {
  return {
    songs: []
  }
},
methods: {
  _getSingerDetail () {
    if (!this.singer.id) { // 没有数据，返回 singer 页面
      this.$router.push('/singer')
      return
    }
    getSingerDetail(this.singer.id).then((res) => {
      if (res.code === ERR_OK) {
        this.songs = this._normalizeSongs(res.data.list)
        console.log(this.songs)
      }
    })
  },
  _normalizeSongs (list) { // 处理数据
    let ret = []
    list.forEach((item) => {
      let {musicData} = item // 解构赋值
      if (musicData.songid && musicData.albummid) {
        ret.push(createSong(musicData))
      }
    })
    return ret
  }
},
```

#### music-list 组件 - 1

1. DOM结构

```
<template>
  <div class="music-list">
    <div class="back">
      <i class="icon-back"></i>
    </div>
    <h1 class="title" v-html="title"></h1>
    <div class="bg-image" :style="bgStyle">
      <div class="filter"></div>
    </div>
  </div>
</template>
```

2. singer-detail 组件传入参数

```
<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
```

3. 传入参数 - 数据处理

```
computed: {
  title () {
    console.log(this.singer)
    return this.singer.name
  },
  bgImage () {
    return this.singer.avatar
  },
  ...mapGetters([
    'singer'
  ])
}
```


4. 接收参数

```
props: {
  bgImage: {
    type: String,
    default: ''
  },
  songs: {
    type: Array,
    default () {
      return []
    }
  },
  title: {
    type: String,
    default: ''
  }
},
computed: {
  bgStyle () {
    return `background-image: url(${this.bgImage})`
  }
}
```

#### song-list 基础组件

1. DOM

```
<template>
  <div class="song-list">
    <ul>
      <li v-for="(song, index) in songs" :key="index" class="item">
        <div class="rank"></div>
       <div class="content">
         <h2 class="name">{{song.name}}</h2>
         <p class="desc">{{getDes(song)}}</p>
       </div>
      </li>
    </ul>
  </div>
</template>
```

2. 接收 & 处理数据

```
props: { // 接收所需的数据
  songs: {
    type: Array,
    default () {
      return {}
    }
  }
},
methods: {
  getDes (song) { // ES6 模板字符串
    return `${song.singer}·${song.album}`
  }
}
```

#### music-list 组件 - 2

1. DOM
> 详情参考源码

```
.. ..

<div class="bg-image" :style="bgStyle" ref="bgImage">
  <div class="filter" ref="filter"></div>
</div>

<!-- 底部遮罩层，解决元素滑动向上背景问题 -->
<div class="bg-layer" ref="layer"></div>

<scroll :probe-type="probeType"
        :listen-scroll="listenScroll"
        :data="songs"
        ref="list"
        class="list"
        @scroll="scroll"
>
 <div class="song-list-wrapper">
    <song-list :songs="songs"></song-list>
  </div>   
</scroll>
```

2. 实现滑动效果

```
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'

methods: {
  scroll (pos) { // 获取滑动高度
    this.scrollY = pos.y
  }
},
components: {
  Scroll,
  SongList
},
watch: {
  scrollY (newY) {
    // this.minTranslateY 起到一个最大高度的限制作用
    let translateY = Math.max(this.minTranslateY, newY)
    let zIndex = 0 // 至于顶层，遮盖歌单列表
    let scale = 1
    let blur = 0

    // 歌单列表滑动动画
    this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`
    this.$refs.layer.style['webkit-transform'] = `translate3d(0,${translateY}px,0)`

    // 下拉图片缩放效果
    const percent = Math.abs(newY / this.imageHeight)
    if (newY > 0) {
      scale = 1 + percent
      zIndex = 10
    } else { // 模糊，仅限于 ios
      blur = Math.min(20 * percent, 20)
    }
    this.$refs.filter.style['backdrop-filter'] = `blur(${blur}px)`
    this.$refs.filter.style['webkitBackdrop-filter'] = `blur(${blur}px)`
    this.$refs.bgImage.style['transform'] = `scale(${scale})`
    this.$refs.bgImage.style['webkitTransform'] = `scale(${scale})`
    
    // 歌单滑动向上移动效果
    if (newY < this.minTranslateY) { // 最大高度时，bgImage 定高
      zIndex = 10
      this.$refs.bgImage.style.paddingTop = 0
      this.$refs.bgImage.style.height = `${RESERVED_HEIGHT}px`
    } else {
      this.$refs.bgImage.style.paddingTop = '70%'
      this.$refs.bgImage.style.height = 0
    }
    this.$refs.bgImage.style.zIndex = zIndex
  }
},
created () { // scroll 基础组件中 BScroll 所需的参数
  this.probeType = 3
  this.listenScroll = true
},
mounted () { // 计算高度
  this.imageHeight = this.$refs.bgImage.clientHeight // 263
  // 歌单列表滑动至最上方高度
  this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT // -263 + 40

  // 歌单列表 top 值计算，用于定位在图片下方
  this.$refs.list.$el.style.top = `${this.imageHeight}px`
}
```

3. 封装 css3 特性

```
// 获取所以 css 属性
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = { // 定义游览器内核
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    strandard: 'transform'
  }

  for (let key in transformNames) { // 如果存在,至少是 ''
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle (style) {
  if (vendor === false) { // 以上所定义的游览器内核都不存在
    return false
  }

  if (vendor === 'strandard') {
    return style
  }
  
  // 前缀 + 首字母大写拼接 ==> webkitTransform
  return vendor + style.charAt(0).toUpperCase + style.substr(1)
}
```

4. music-list 组件中使用

```
import {prefixStyle} from 'common/js/dom'

// 定义 css3 属性
const transform = prefixStyle('transform')
const backdrop = prefixStyle('backdrop-filter')

.. ..

this.$refs.filter.style[backdrop] = `blur(${blur}px)`
this.$refs.bgImage.style[transform] = `scale(${scale})`
```

5. 返回按钮 & 随机播放按钮

```
<div class="back" @click="back">
  <i class="icon-back"></i>
</div>

.. ..

<div class="bg-image" :style="bgStyle" ref="bgImage">
  <div class="play-wrapper">
    <div class="play" v-show="songs.length" ref="playBtn">
      <i class="icon-play"></i>
      <span class="text">随机播放</span>
    </div>
    </div>
  <div class="filter" ref="filter"></div>
</div>
```

```
methods: {
  .. ..

  back () {
    this.$router.back()
  }
}

watch: {
  if (newY < this.minTranslateY) { // 下滑移动到上方隐藏，使用绝对定位实现的布局
    .. ..

    this.$refs.playBtn.style.display = 'none'
  } else {
    .. ..

    this.$refs.playBtn.style.display = ''
  }
}
```

6. loading 基础组件使用

> 注册详情参考源码

```
<scroll>
  .. ..
  <div class="loading-container" v-show="!songs.length">
    <loading></loading>
  </div>
</scroll>
```

#### 播放器 Vuex 数据设计

1. state.js

```
const state = {
  singer: {},

  // 音乐播放所需参数
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}
```

2. getters.js

```
// 在获取数据时可以处理数据，充当 computed 角色

// 音乐播放所需参数
export const playing = state => state.playing

export const fullScreen = state => state.fullScreen

export const playlist = state => state.playlist

export const sequenceList = state => state.sequenceList

export const mode = state => state.mode

export const currentIndex = state => state.currentIndex

export const currentSong = (state) => {
  return state.playlist[state.currentIndex] || {}
}
```

3. mutation-types.js

```
// 使用常量替代 Mutation 事件类型

// 音乐播放所需参数
export const SET_PLAYING_STATE = 'SET_PLAYING_STATE'

export const SET_FULL_SCREEN = 'SET_FULL_SCREEN'

export const SET_PLAYLIST = 'SET_PLAYLIST'

export const SET_SEQUENCE_LIST = 'SET_SEQUENCE_LIST'

export const SET_PLAY_MODE = 'SET_PLAY_MODE'

export const SET_CURRENT_INDEX = 'SET_CURRENT_INDEX'
```

4. mutations.js

```
// 同步改变 player 数据

// 音乐播放所需
// flag => Boole

[types.SET_PLAYING_STATE] (state, flag) {
  state.playing = flag
},
[types.SET_FULL_SCREEN] (state, flag) {
  state.fullScreen = flag
},
[types.SET_PLAYLIST] (state, list) {
  state.playlist = list
},
[types.SET_SEQUENCE_LIST] (state, list) {
  state.sequenceList = list
},
[types.SET_PLAY_MODE] (state, mode) {
  state.mode = mode
},
[types.SET_CURRENT_INDEX] (state, index) {
  state.currentIndex = index
}
```

5. actions.js

```
import * as types from './mutation-types'

// 异步操作行为， 提交给 mutation 改变 player 数据
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_PLAYING_STATE, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
}
```

6. config.js

> path: common/js/config.js
```
// 语义化
export const playMode = { // 控制 player 播放模式
  sequence: 0,
  loop: 1,
  random: 2
}
```

#### 应用

1. player 组件

```
<template>
  <div class="player" v-show="playlist.length>0">
    <div class="normal-player" v-show="fullScreen">
      播放器
    </div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>
```

```
import {mapGetters} from 'vuex'
computed: {
  ...mapGetters([ // 从 vuex 中获取数据，控制 player 状态
    'fullScreen',
    'playlist'
  ])
}
```

2. App.vue

```
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    
    <!-- 在 App.vue 中使用，因为 player 组件是一个独立的个体 -->
    <player></player>
  </div>
</template>
```

3. song-list 基础组件

```
<li v-for="(song, index) in songs"
    :key="index"
    class="item"
    @click="selectItem(song, index)"
>
    .. ..
</li>
```

```
methods: {
  selectItem (item, index) { // 派发一个事件
    this.$emit('select', item, index)
  }
}
```

4. music-list 组件

```
<song-list :songs="songs" @select="selectItem"></song-list>
```

```
import {mapActions} from 'vuex'

methods: {
  .. ..
  
  selectItem (item, index) { // 父组件接收
    this.selectPlay({ // 将数据传入 vuex，相当于 store.commit
      list: this.songs,
      index
    })
  },
  ...mapActions([ // vuex 异步操作
    'selectPlay'
  ])
}
```

5. 数据应用

```
<div class="back" @click="back"></div>
<div class="mini-player" v-show="!fullScreen" @click="open"></div>
```

```
import {mapGetters, mapMutations} from 'vuex'


methods: {
  back () {
    this.setFullScreen(false)
  },
  open () {
    this.setFullScreen(true)
  },
  ...mapMutations({

    // 将 `this.SET_FULL_SCREEN()` 映射为 `this.$store.commit('SET_FULL_SCREEN')`

    setFullScreen: 'SET_FULL_SCREEN'
  })
}

computed: {
  ...mapGetters([
    'fullScreen',
    'playlist',
    'currentSong'
  ])
}
```

#### player 动画

1. 添加 transition 标签

```
<transition name="normal"
            @enter="enter"
            @after-enter="afterEnter"
            @leave="leave"
            @after-leave="leaveEnter"
>
  <div class="normal-player" v-show="fullScreen">
    .. ..
  </div>
</transition>

<transition name="mini">
  <div class="mini-player" v-show="!fullScreen" @click="open">
    .. ..
  </div>
</transition>
```


2. create-keyframe-animaiton 插件安装

```
npm i create-keyframe-animaiton --save // ^0.1.0
```

3. js钩子函数定义动画

```
import animations from 'create-keyframe-animation'
import {prefixStyle} from 'common/js/dom'

const transform = prefixStyle('transform')



enter (el, done) {
  const {x, y, scale} = this._getPosAndScale()

  let animation = { // 定义动画
    0: { // 小图标位置
      transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`
    },
    60: {
      transform: `translate3d(0, 0, 0) scale(1.1)`
    },
    100: {
      transform: `translate3d(0, 0, 0) scale(1)`
    }
  }

  animations.registerAnimation({ // 第三方插件
    name: 'move',
    animation,
    presets: { // 预设
      duration: 400,
      easing: 'linear'
    }
  })

  // done 回调函数
  animations.runAnimation(this.$refs.cdWrapper, 'move', done)
},
afterEnter () { // 进入动画结束，清空 animations
  animations.unregisterAnimation('move')
  this.$refs.cdWrapper.style.animation = ''
},
leave (el, done) { // 离开动画，使用 css3 动画
  this.$refs.cdWrapper.style.transition = 'all 0.4s'
  const {x, y, scale} = this._getPosAndScale()
  this.$refs.cdWrapper.style[transform] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
  this.$refs.cdWrapper.addEventListener('transitionend', done) // 监听动画结束，执行回调函数 done
},
leaveEnter () { // 离开动画结束，清空 css3 样式
  this.$refs.cdWrapper.style.transition = ''
  this.$refs.cdWrapper.style[transform] = ''
},
_getPosAndScale () { // 大圆向小圆变化
  const targetWidth = 40
  // mini-player 图标
  const paddingLeft = 40 // 中心坐标距离左侧距离
  const paddingBottom = 30 // 中心坐标距离底部距离
  const paddingTop = 80 // normal-player 图标距离顶部位置
  const width = window.innerWidth * 0.8 // css 样式中定义 nomal-plaer 宽度 80%
  const scale = targetWidth / width // 小图标 / 大图标，获取缩放比例
  // 偏移量
  const x = -(window.innerWidth / 2 - paddingLeft)
  const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
  return {
    x,
    y,
    scale
  }
},
```

#### H5 audio 标签实现音乐播放

1. 使用 audio 标签

```
<audio ref="audio" :src="currentSong.url"></audio>
```

2. 调用 audio 方法实现播放音乐

```
watch: {
  currentSong () { // 当 currentSong 改变时播放动画
    // 异步更新队列
    // 回调函数在 DOM 更新完成后就会调用
    this.$nextTick(() => {
      this.$refs.audio.play()
    })
  }
}
```

3. 暂停 & 播放功能

```
methods: {
  togglePlaying () { // 点击切换 playing 状态
    this.setPlayingState(!this.playing)
  },
  ...mapMutations({
    // 将 `this.SET_FULL_SCREEN()` 映射为 `this.$store.commit('SET_FULL_SCREEN')`
    setFullScreen: 'SET_FULL_SCREEN',

    setPlayingState: 'SET_PLAYING_STATE' // 改变播放状态，实现暂停 & 播放功能
  })
},
computed: {
  playIcon () { // 监听 playing 切换图标的状态
    return this.playing ? 'icon-pause' : 'icon-play'
  },
  miniIcon () {
    return this.playing ? 'icon-pause-mini' : 'icon-play-mini'
  },
  cdCls () { // 图标旋转动画
    return this.playing ? 'play' : 'play pause'
  },
  ...mapGetters([
    .. ..

    'playing' // 获取播放状态
  ])
},
watch: {
  currentSong () {
    this.$nextTick(() => {
      this.$refs.audio.play()
    })
  },
  playing (newPlaying) { // playing 状态的改变，调用 audio 方法实现功能
    this.$nextTick(() => {
      const audio = this.$refs.audio
      newPlaying ? audio.play() : audio.pause() // H5 audio 实例方法
    })
  }
}
```

#### 前进后退功能

1. 添加事件 prev & next

```
<i class="icon-prev" @click="prev"></i>

<i class="icon-next" @click="next"></i>
```

2. 实现 prev & next 功能

```
...mapGetters([ // 从 mapGetters 中获取 currentIndex
  .. ..

   'currentIndex'
])

...mapMutations({ // setCurrentIndex 方法改变 currentIndex
  .. ..

  setCurrentIndex: 'SET_CURRENT_INDEX'
})

```

```
next () { // 改变 currentIndex 实现切换歌曲
  let index = this.currentIndex + 1
  if (index === this.playlist.length) {
    index = 0
  }
  this.setCurrentIndex(index)
  if (!this.playing) { // 如果 playing 是关闭状态
    this.togglePlaying() // 将 playing 切换为播放状态
  }
},
prev () {
  let index = this.currentIndex - 1
  if (index === -1) {
    index = this.playlist.length - 1
  }
  this.setCurrentIndex(index)
  if (!this.playing) {
    this.togglePlaying()
  }
}
```

3. 连续（快速）点击优化

```
<!-- H5 内置方法 -->
<audio ref="audio" :src="currentSong.url" @canplay="ready" @error="error"></audio>
```

```
data () {
  return { // 状态索引
    songReady: false
  }
},
methods: {
  togglePlaying () {
    if (!this.songReady) { // 未结束操作，不执行
      return
    }
    this.setPlayingState(!this.playing)
  },
  next () {
    if (!this.songReady) {
      return
    }
    
    .. ..
    
    this.songReady = false // 阻止后续多次点击操作
  },
  prev () {
    if (!this.songReady) {
      return
    }
    
    .. ..
    
    this.songReady = false
  },
  ready () { // 当浏览器可以播放音频/视频时
    this.songReady = true
  },
  error () {
    // 当在音频/视频加载期间发生错误时
    // 若不将 songReady 设置为 true, 将无法切换歌曲
    this.songReady = true
  },
},
coumputed: {
  .. ..
  
  disableCls () { // 阻止操作时改变样式
    return this.songReady ? '' : 'disable'
  }
}
```

#### 时间获取和更新

```
<div class="progress-wrapper">
  <span class="time time-l">{{format(currentTime)}}</span>
  <div class="progress-bar-wrapper">
  </div>
  <span class="time time-r">{{format(currentSong.duration)}}</span>
</div>


<audio ref="audio" :src="currentSong.url" @canplay="ready" @error="error" @timeupdate="updateTime"></audio>
```

```
data () {
  return {
    .. ..
    
    currentTime: 0
  }
}
methods: {
  .. ..
  
  updateTime (e) {
    // H5 内置方法，获取进度时间戳
    this.currentTime = e.target.currentTime
  },
  format (interval) { // 将时间戳格式化 ==> 00:00
    // 向下取整 Math.floor() 或者 | 0
    interval = interval | 0
    const minute = interval / 60 | 0
    const second = this._pad(interval % 60)
    return `${minute}:${second}`
  },
  _pad (num, n = 2) { // 秒数为一位数时，补0
    let len = num.toString().length
    while (len < 2) {
      num = '0' + num
      len++
    }
    return num
  }
}
```


#### Progress-bar进度条组件

1. Progress-bar 基础组件 DOM

```
<template>
  <div class="progress-bar" ref="progressBar">
    <div class="bar-inner">
      <div class="progress" ref="progress"></div>
      <div class="progress-btn-wrapper" ref="progressBtn">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>
```

2. player 组件中注册使用

```
<progress-bar :percent="percent"></progress-bar>
```

```
computed: {
  percent () { // 获取进度
    return this.currentTime / this.currentSong.duration
  }
}
```

3. 根据进度改变 css 样式

```
import {prefixStyle} from 'common/js/dom'

const progressBtnWidth = 16
const transform = prefixStyle('transform')

export default {
  props: {
    percent: { // 接收父组件传入的进度值
      type: Number,
      default: 0
    }
  },
  watch: {
    percent (newPercen) {
      if (newPercen >= 0) {
        // 进度条 - 圆形按钮, 获取最大偏移量
        const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
        const offsetWidth = newPercen * barWidth
        this.$refs.progress.style.width = `${offsetWidth}px`
        this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
        this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
      }
    }
  }
}
```

4. 实现拖动播放效果

```
<!-- 鼠标拖动触发事件 -->
<div class="progress-btn-wrapper"
     ref="progressBtn"
     @touchstart.prevent="progressTouchStart"
     @touchmove.prevent="progressTouchMove"
     @touchend="progressTouchEnd"
>
  <div class="progress-btn"></div>
</div>
```

```
created () { // 不同回调之间的通信
  this.touch = {}
},
methods: {
  progressTouchStart (e) {
    this.touch.initiated = true // 设置鼠标状态
    this.touch.startX = e.touches[0].pageX // 获取鼠标开始位置
    this.touch.left = this.$refs.progress.clientWidth // 记录进度
  },
  progressTouchMove (e) {
    if (!this.touch.initiated) { // 未进入 progressTouchStart，结束操作
      return
    }
    const deltaX = e.touches[0].pageX - this.touch.startX // 获取偏移量
    // 最大偏移量 & 最小偏移量限制 this.touch.left + deltaX
    const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
    this._offset(offsetWidth) // 改变进度条的位置
  },
  progressTouchEnd () { // 结束
    this.touch.initiated = false // 开放通道
    // 优先执行于监听事件 percent，以此获得拖动的位置
    this._triggerPercent()
  },
  _offset (offsetWidth) { // 多次使用，封装成方法，减少代码量
    this.$refs.progress.style.width = `${offsetWidth}px`
    this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
    this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
  },
  _triggerPercent () { // 将拖动后的进度传回给 父组件改变音乐播放进度
    // 进度条总宽度
    const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
    // 获取新的进度
    const percent = this.$refs.progress.clientWidth / barWidth
    this.$emit('percentChange', percent)
  }
},
watch: {
  percent (newPercen) {
    // 在鼠标拖动时，不处理，否则调回正常进度
    if (newPercen >= 0 && !this.touch.initiated) {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const offsetWidth = newPercen * barWidth
      this._offset(offsetWidth)
    }
  }
}
```
  
> player 中操作监听器回调
```
// H5 audio 中的 @timeupdate="updateTime" 是一个可读写属性

onProgressBarChange (percent) { // 改变音乐进度，实现歌曲进度正确播放
  this.$refs.audio.currentTime = this.currentSong.duration * percent
  if (!this.playing) { // 暂停状态，播放歌曲
    this.togglePlaying()
  }
}
```

5. 点击进度条位置播放效果

```
<div class="progress-bar" ref="progressBar" @click="progressClick">
  .. ..
</div>
```

```
progressClick (e) {
  this._offset(e.offsetX) // 获取点击位置，跳转，不需要计算
  this._triggerPercent() // 传回父组件进行修改
}
```

#### progress-circle 基础组件实现，mini-player 圆形进度

1. DOM 结构

```
<div class="progress-circle">
  <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
    
    <!-- stroke-dasharray 属性用来设置描边的点划线的图案范式。就是设置实线和虚线的宽度 -->
    <!-- stroke-dashoffset 则指定了dash模式到路径开始的距离，就是实线虚线绘制的起点距路径开始的距离 -->
    
    <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset"/>
  </svg>
  <slot></slot>
</div>
```

2. player 组件使用

```
<progress-circle :radius="radius" :percent="percent">
  <i :class="miniIcon" class="icon-mini" @click.stop="togglePlaying"></i>
</progress-circle>
```

```
data () {
  return {
    .. ..
    
    // 需要在 data 中定义，不能直接写值
    radius: 32
  }
},
```

3. 通过父组件传入的 percent 进度，改变 SVG 中 circle 的周长度

```
data () {
  return {
    dashArray: Math.PI * 100
  }
},
props: {
  // 使用外部传值定义 SVG 中 circle 的宽高
  // 可以通过外部调用设置不同的高度，可扩展性
  radius: {
    type: Number,
    default: 100
  },
  percent: {
    type: Number,
    default: 0
  }
},
computed: {
  dashOffset () {
    // 0 的时候代表 100% 覆盖（周长最大）, 1 的时候代表 0% 覆盖（周长为0）
    return (1 - this.percent) * this.dashArray
  }
}
```

#### player 切换功能实现


1. 切换功能实现

```
<div class="operators">
  <div class="icon i-left" @click="changeMode">
    <i :class="iconMode"></i>
  </div>
  
  .. ..
</div>
```

```
import {playMode} from 'common/js/config'

...mapGetters([
  .. ..
  
  'mode'
])

...mapMutations({
  .. ..
  
  setPlayMode: 'SET_PLAY_MODE'
])

methods: {
  .. ..
  
  changeMode () { // 修改 vuex 中的 mode
    const mode = (this.mode + 1) % 3
    this.setPlayMode(mode)
  }
}

computed: {
  .. ..
  
  iconMode () { // 通过 mode 改变样式
    return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
  }
}
```

2. 随机播放

```
> vuex 获取
...mapGetters([ // 获取歌单顺序列表
  .. ..

  'sequenceList'
])

...mapMutations({ // 改变歌单列表
  .. ..
  
  setPlayList: 'SET_PLAYLIST'
})
```

> 定义随机数方法<br />path: common/js/util.js

```
export function shuffle (arr) { // 将数组重新洗牌，会出现重复现象
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  return arr
}

function getRandomInt (min, max) { // 获取区间内的随机一个整数
  // + 1 的目的是可以取到 max
  return Math.floor(Math.random() * (max - min + 1) + min)
}
```

> 随机选择出一首歌

```
changeMode () {
  const mode = (this.mode + 1) % 3
  this.setPlayMode(mode)
  
  let list = null // 存储洗牌后的列表顺序
  if (mode === playMode.random) { // 洗牌
    list = shuffle(this.sequenceList)
  } else {
    list = this.sequenceList
  }
  this.resetCurentIndex(list)
  this.setPlayList(list) // 传入洗牌后的歌单列表
},
resetCurentIndex (list) { // 改变当前歌曲在洗牌后的歌单位置
  let index = list.findIndex((item) => { // 寻找当前歌曲的下标
    return item.id === this.currentSong.id
  })
  this.setCurrentIndex(index)
},


watch: {
  currentSong (newSong, oldSong) {
    if (newSong.id === oldSong.id) { // 歌曲没有变换，不操作
      return
    }
    
    .. ..
  }
  
  .. ..
}  
```

3. 随机播放 -- 歌曲列表改变

> 播放结束，切换下一曲

```
<!-- H5 ended 事件 -->
<audio ref="audio" :src="currentSong.url" @canplay="ready" @error="error" @timeupdate="updateTime" @ended="end"></audio>

```

```

end () {
  if (this.mode === playMode.loop) { // 单曲循环播放
    this.loop()
  } else {
    this.next()
  }
},
loop () {
  // H5 audio 的属性 currentTime，可读写
  this.$refs.audio.currentTime = 0
  this.$refs.audio.play() // audio 设置currentTime 后，需要调取 play 播放音乐
}

```

> 优化

```
progressClick (e) {
  // 点击 progressBtn 的时候， e.offset 获取不对
  // this._offset(e.offsetX)
  
  // 获取元素位置
  const rect = this.$refs.progressBar.getBoundingClientRect()
  const offsetWidth = e.pageX - rect.left
  this._offset(offsetWidth)
  
  this._triggerPercent()
}
```

> music-list 随机播放按钮

```
<div class="play" v-show="songs.length" ref="playBtn" @click="random"></div>
```

```
random () {
  this.randomPlay({
    list: this.songs
  })
},
...mapActions([
  'selectPlay',
  'randomPlay'
])
```

```
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'


function findIndex (list, song) {
  return list.findIndex((item) => {
    return item.id === song.id
  })
}

export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SEQUENCE_LIST, list)
  
  // 在歌单列表中，随机播放状态
  // 洗牌后寻找所选的 index
  if (state.mode === playMode.random) {
    let randomList = shuffle(list) // 洗牌
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  
  .. ..
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random) // 设置播放模式
  commit(types.SET_SEQUENCE_LIST, list) // 播放顺序列表
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList) // 传入洗牌后的歌单列表
  commit(types.SET_CURRENT_INDEX, 0) // 洗牌后的第一首播放
  commit(types.SET_FULL_SCREEN, true) // 播放大屏
  commit(types.SET_PLAYING_STATE, true) // 播放状态
}
```

```
export function shuffle (arr) {
  let _arr = arr.slice() // 不改变原数组
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }

  return _arr
}
```

#### 歌词数据抓取

> 数据获取<br />path: api/song

```
import {commonParams} from './config'
import axios from 'axios'

export function getLyric (mid) {
  const url = '/api/lyric'

  const data = Object.assign({}, commonParams, {
    songmid: mid,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0,
    categoryId: 10000000,
    pcachetime: +new Date(),
    g_tk: 67232076,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
```

```
app.get('/api/lyric', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    var ret = response.data
    if (typeof ret === 'string') { // 正则表达式修改数据
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1]) // 转换 json 格式
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})
```

```
import {getLyric} from 'api/song'
import {ERR_OK} from 'api/config'

// 在 music-list 中使用，传入数据，用 vuex 进行数据传递
export default class Song {
  constructor ({.. ..}) {
    .. ..
  }

  getLyric () { // 定义一个 Song 方法，获取歌词
    getLyric(this.mid).then((res) => {
      if (res.retcode === ERR_OK) {
        this.lyric = res.lyric
        console.log(this.lyric)
      }
    })
  }
}
```

> player 组件中使用
```
watch: {
  currentSong (newSong, oldSong) { // 在调取歌曲的时候获取歌词
    .. ..
    
    this.$nextTick(() => {
      .. ..
      
      this.currentSong.getLyric()
    })
  },
  
  .. ..
}
```

#### 歌词数据解析

1. base-64 解码

> install

```
npm i js-base64 --save // js-base64@2.4.9
```

> 解码

```
getLyric () {
  getLyric(this.mid).then((res) => {
    if (res.retcode === ERR_OK) {
      this.lyric = Base64.decode(res.lyric)
      console.log(this.lyric)
    }
  })
}
```

2. 解析

> install

```
npm i lyric-parser --save // lyric-parser@1.0.1
```

> 数据处理<br/>common/js/song

```
getLyric () {
  if (this.lyric) { // 多次调用
    return Promise.resolve((this.lyric))
  }
  return new Promise((resolve, reject) => { // 返回 Promise 对象
    getLyric(this.mid).then((res) => {
      if (res.retcode === ERR_OK) {
        this.lyric = Base64.decode(res.lyric)
        resolve(this.lyric)
      } else {
        reject(res.error)
      }
    })
  })
}
```

> player 组件使用

```
watch: {
  currentSong (newSong, oldSong) {
    .. ..
    
    this.$nextTick(() => {
      .. ..
      
      this.getLyric() // 定义一个方法
    })
  }
  
  .. ..
}

methods: {
  getLyric () {
    this.currentSong.getLyric().then((lyric) => {
      this.currentLyric = new Lyric(lyric)
      console.log(this.currentLyric)
    })
  }
  
  .. ..
}
```

#### 歌词滚动列表实现

> DOM

```
<scroll class="middle-r"
        ref="lyricList"
        :data="currentLyric && currentLyric.lines">
  <div class="lyric-wrapper">
    <div v-if="currentLyric">
      <p ref="lyricLine"
         class="text"
         :class="{'current' : currentLineNum === index}"
         v-for="(line, index) in currentLyric.lines"
         :key="index"
      >{{line.txt}}</p>
    </div>
  </div>
</scroll>
```

> 

```
import Scroll from 'base/scroll/scroll'


data () {
  return {
    .. ..
    
    currentLyric: null,
    currentLineNum: 0 // 歌词高亮
  }
},
methods: {
  getLyric () {
    this.currentSong.getLyric().then((lyric) => {
      this.currentLyric = new Lyric(lyric, this.handleLyric) // 传入回调函数
      if (this.playing) {
        this.currentLyric.play() // 播放音乐
      }
    })
  },
  handleLyric ({lineNum, txt}) { // 传入对象参数
    this.currentLineNum = lineNum // 歌词高亮
    if (lineNum > 5) { // 歌词始终居中显示
      let lineEl = this.$refs.lyricLine[lineNum - 5] // 滚动元素位置
      this.$refs.lyricList.scrollToElement(lineEl, 1000) // 歌词滚动
    } else {
      this.$refs.lyricList.scrollTo(0, 0, 1000)
    }
  },
  
  .. ..
}
```

#### 播放器歌词左右滑动

> DOM

```
<div class="middle-l" ref="middleL">
  .. ..
</div>

<!-- 拖动 -->
<div class="middle"
     @touchstart.prevent="middleTouchStart"
     @touchmove.prevent="middleTouchMove"
     @touchend="middleTouchEnd"
>
  .. ..
</div>

.. ..

<div class="bottom">
  <div class="dot-wrapper">
    <span class="dot" :class="{'active':currentShow === 'cd'}"></span>
    <span class="dot" :class="{'active':currentShow === 'lyric'}"></span>
  </div>
  
  .. ..
</div>
```


> 拖动事件

```

created () { //  不需要 getter & setter
  this.touch = {}
}



middleTouchStart (e) { // 开始位置
  this.touch.initiated = true // 拖动开始
  const touch = e.touches[0]
  this.touch.startX = touch.pageX
  this.touch.startY = touch.pageY
},
middleTouchMove (e) {
  if (!this.touch.initiated) { // 未开始
    return
  }
  const touch = e.touches[0]
  
  // 获取偏移量
  // 从左往右为正
  // 从下往上为正
  const deltaX = touch.pageX - this.touch.startX
  const deltaY = touch.pageY - this.touch.startY
  if (Math.abs(deltaY) > Math.abs(deltaX)) { // 纵向滚动，不操作
    return
  }
  
  // cd 时，从右往左
  // lyric 时，从左往右
  const left = this.currentShow === 'cd' ? 0 : -window.innerWidth
  
  // 获取偏移位置，最大0, 最小屏幕宽度为限制
  const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX))
  // 偏移相对于屏幕百分比
  this.touch.percent = Math.abs(offsetWidth / window.innerWidth)
  
  // 偏移位置
  this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
  this.$refs.lyricList.$el.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
  
  // 动画过渡时间
  this.$refs.lyricList.$el.style[transitionDuration] = 0
  this.$refs.lyricList.$el.style.transitionDuration = 0
  
  // 唱片透明度
  this.$refs.middleL.style.opacity = 1 - this.touch.percent
  
  // 动画过渡时间
  this.$refs.middleL.style[transitionDuration] = 0
  this.$refs.middleL.style.transitionDuration = 0
},
middleTouchEnd () { // 结束
  let offsetWidth
  let opacity
  if (this.currentShow === 'cd') { // 从右向左滑
    if (this.touch.percent > 0.1) { // 拖动条件
      offsetWidth = -window.innerWidth
      opacity = 0
      this.currentShow = 'lyric'
    } else {
      offsetWidth = 0
      opacity = 1
    }
  } else { // 从左向右滑
    if (this.touch.percent < 0.9) {
      offsetWidth = 0
      this.currentShow = 'cd'
      opacity = 1
    } else {
      offsetWidth = -window.innerWidth
      opacity = 0
    }
  }
  const time = 300 // 过渡时间
  
  // 偏移位置
  this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
  this.$refs.lyricList.$el.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
  
  // 过渡动画
  this.$refs.lyricList.$el.style[transitionDuration] = `${time}ms`
  this.$refs.lyricList.$el.style.transitionDuration = `${time}ms`
  
  // 唱片透明度
  this.$refs.middleL.style.opacity = opacity
  
  // 过渡动画
  this.$refs.middleL.style[transitionDuration] = `${time}ms`
  this.$refs.middleL.style.transitionDuration = `${time}ms`
  
  // 结束操作, 将初始化设置为 false
  this.touch.initiated = false
}
```

#### 优化 & 剩余功能实现

1. 切换歌曲，歌词出现跳动现象
```
watch: {
  currentSong (newSong, oldSong) {
    if (newSong === oldSong) {
      return
    }
    if (this.currentLyric) { // 结束 currentLyric
      this.currentLyric.stop()
    }
    this.$nextTick(() => {
      .. ..
    })
  }
  
  .. ..
}
```

2. 切换播放状态
```
togglePlaying () {
  .. ..
  
  if (this.currentLyric) { // 切换播放状态
    this.currentLyric.togglePlay()
  }
}
```

3. 循环播放
```
loop () {
  this.$refs.audio.currentTime = 0
  this.$refs.audio.play()
  if (this.currentLyric) { // 歌词回到最顶部
    this.currentLyric.seek(0)
  }
}
```

4. 拖动滚动时间
```
onProgressBarChange (percent) {
  const currentTime = this.currentSong.duration * percent
  this.$refs.audio.currentTime = currentTime
  if (!this.playing) { // 暂停状态，播放歌曲
    this.togglePlaying()
  }
  
  
  if (this.currentLyric) { // 改变歌词跳动位置
    this.currentLyric.seek(currentTime * 1000)
  }
}
```

5. 歌词

> DOM
```
<div class="middle-l" ref="middleL">
  .. ..
  
  <div class="playing-lyric-wrapper">
    <div class="playing-lyric">{{playingLyric}}</div>
  </div>
</div>
```

> 处理歌词
```
handleLyric ({lineNum, txt}) {
  .. ..
  
  this.playingLyric = txt
}
```

6. getLyric 获取错误处理
```
getLyric () {
  this.currentSong.getLyric().then((lyric) => {
    .. ..
  }).catch(() => { // 清理操作
    this.currentLyric = null
    this.playingLyric = ''
    this.currentLineNum = 0
  })
}
```

7. 歌曲只有一首时
```
next () {
  if (!this.songReady) {
    return
  }
  if (this.playlist.length === 1) { // 单曲循环播放
    this.loop()
  } else {
    .. ..
  }
  .. ..
},
prev () {
  if (!this.songReady) {
    return
  }
  if (this.playlist.length === 1) { // 单曲循环播放
    this.loop()
  } else {
    .. ..
  }
  .. ..
}
```

8. 后台运行切换到前台正常播放
```
watch: {
  currentSong (newSong, oldSong) {
    .. ..
    
    setTimeout(() => { // 使用延迟播放
      this.$refs.audio.play()
      this.getLyric()
    }, 1000)
  }
  
  .. ..
```

#### 底部播放器适配

1. 创建 mixin
>全局注册一个混入，影响注册之后所有创建的每个 Vue 实例。插件作者可以使用混入，向组件注入自定义的行为 <br />path: common/js/mixin
```
import {mapGetters} from 'vuex'

export const playlistMixin = { // 混入对象
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted () { // el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子
    this.handlePlaylist(this.playlist)
  },
  activated () { // keep-alive 组件激活时调用
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist (newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: { // 若存在相同的方法，则覆盖 minxin 中的方法
    handlePlaylist () { // 输出一个错误指令
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
```

2. music-list 组件应用 mixin
```
import {playlistMixin} from 'common/js/mixin'

export default {
  mixins: [playlistMixin], // 使用 mixin
  
  .. ..
  
  methods: {
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : '' // 设置 bottom
      this.$refs.list.$el.style.bottom = bottom
      this.$refs.list.refresh() // scroll 重新计算高度
    },
    
    .. ..
  }
  
  .. ..
}
```

3. singer 组件应用 mixin
```
<template>
  <div class="singer" ref="singer">
    <list-view :data="singers" @select="selectSinger" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>
```

> listview 基础组件中定义方法
```
methods: {
  refresh () {
    this.$refs.listview.refresh()
  },
}
```

```
import {playlistMixin} from 'common/js/mixin'

export default {
  mixins: [playlistMixin],
  
  .. ..
  
  methods: {
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.singer.style.bottom = bottom
      this.$refs.list.refresh() // 父组件调用方法，实现重新计算高度
    },
    
    .. ..
  }
  
  .. ..
}
```

4. recommend 组件应用 mixin
```
import {playlistMixin} from 'common/js/mixin'

export default {
  mixins: [playlistMixin],
  
  .. ..
  
  methods: {
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.recommend.style.bottom = bottom
      this.$refs.scroll.refresh()
    },
    
    .. ..
  }
  
  .. ..
}
```


#### disc组件 - 歌单详情页

1. DOM
> 详情参考源码

2. vue-router 二级目录
```
import Disc from 'components/disc/disc'

export default new Router({
  routes: [
    {
      path: '/recommend',
      component: Recommend,
      children: [
        {
          path: ':id',
          component: Disc
        }
      ]
    }
    
    .. ..
  ]
})    
```

3. Vuex 实现路由数据通讯
```
// state.js
const state = {
  .. ..
  
  disc: {}
}


// mutations-type.js
export const SET_DISC = 'SET_DISC'


// mutations.js
const mutations = {
  .. ..
  
  [types.SET_DISC] (state, disc) {
    state.disc = disc
  }
}


// getters.js
export const disc = state => state.disc
```

4. recommend 组件跳转
```
<!-- 添加点击事件 -->
<li v-for="item of discList" :key="item.dissid" class="item" @click="selectItem(item)">
  .. ..
</li>
```

```
// 访问路由
selectItem (item) {
  this.$router.push({
    path: `/recommend/${item.dissid}`
  })
  this.setDisc(item)
},
...mapMutations({
  setDisc: 'SET_DISC'
})
```

5. disc 组件接收与传递参数
```
computed: {
  title () {
    return this.disc.dissname
  },
  bgImage () {
    return this.disc.imgurl
  },
  ...mapGetters([
    'disc'
  ])
}
```

#### disc 数据抓取

> 视频中的 jsonp 请求数据<br />qq 音乐现使用 json 请求
```
export function getSongList(disstid) {
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  const data = Object.assign({}, commonParams, {
    disstid,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    platform: 'yqq',
    hostUin: 0,
    needNewCode: 0
  })

  return jsonp(url, data, options)
}
```

> json 请求数据

```
// 后端代理 json 请求数据
app.get('/api/getSongList', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})
```

```
export function getSongList (disstid) {
  const url = '/api/getSongList'

  const data = Object.assign({}, commonParams, {
    disstid,
    uin: 0,
    platform: 'h5',
    needNewCode: 1,
    new_format: 1,
    pic: 500,
    type: 1,
    json: 1,
    utf8: 1,
    onlysong: 0,
    picmid: 1,
    nosign: 1,
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
```

> disc 组件请求数据
```
import {getSongList} from 'api/recommend'
import {ERR_OK} from 'api/config'

created () {
  this._getSongList()
}

methods: {
  _getSongList () {
    getSongList(this.disc.dissid).then((res) => {
      if (res.code === ERR_OK) {
        console.log(res.cdlist[0].songlist)
      }
    })
  }
}
```

> disc 页数据的处理和应用
```
// 数据不同
export function createRecommendSong (musicData) {
  return new Song({
    id: musicData.id,
    mid: musicData.mid,
    singer: filterSinger(musicData.singer),
    name: musicData.name,
    album: musicData.album.name,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.album.mid}.jpg?max_age=2592000`,
    url: `http://ws.stream.qqmusic.qq.com/C100${musicData.file.media_mid}.m4a?fromtag=0&guid=126548448`
  })
}
```

```
import {createRecommendSong} from 'common/js/song'

_getSongList () {
  if (!this.disc.dissid) {
    this.$router.push('/recommend')
    return
  }
  getSongList(this.disc.dissid).then((res) => {
    if (res.code === ERR_OK) {
      this.songs = this._normalizeSongs(res.cdlist[0].songlist)
    }
  })
}
```

#### rank 组件
1. 获取数据

> jsonp 请求数据
```
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getTopList () {
  const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
```

```
import {getTopList} from 'api/rank'
import {ERR_OK} from 'api/config'

export default {
  methods: {
    _getTopList () {
      getTopList().then((res) => {
        if (res.code === ERR_OK) {
          console.log(res.data.topList)
        }
      })
    }
  },
  created () {
    this._getTopList()
  }
}
```

2. 数据应用

> DOM
```
<div class="rank" ref="rank">
  <scroll :data="topList" class="toplist" ref="topList">
    <ul>
      <li class="item" v-for="item in topList" :key="item.id">
        <div class="icon">
          <!-- 图片懒加载，js 第三方插件 -->
          <img width="100" height="100" v-lazy="item.picUrl"/>
        </div>
        <ul class="songlist">
          <li class="song" v-for="(song, index) in item.songList" :key="index">
            <span>{{index+1}}</span>
            <span>{{song.songname}} - {{song.singername}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="loading-container" v-if="!topList.length">
      <loading></loading>
    </div>
  </scroll>
  <router-view></router-view>
</div>
```

```
data () {
  return {
    topList: []
  }
},
methods: {
  _getTopList () {
    getTopList().then((res) => {
      if (res.code === ERR_OK) {
        this.topList = res.data.topList
      }
    })
  }
}
```

> scroll 基础组件 & 底部播放器适配
```
import Loading from 'base/loading/loading'
import {playlistMixin} from 'common/js/mixin'


mixins: [playlistMixin],

methods: {
  handlePlaylist (playlist) {
    const bottom = playlist.length ? '60px' : ''
    this.$refs.rank.style.bottom = bottom
    this.$refs.topList.refresh()
  },
  
  .. ..
},
components: {
  Scroll,
  Loading
},
```

#### top-list 组件

1. 二级路由
```
import TopList from 'components/top-list/top-list'

{
  path: '/rank',
  component: Rank,
  children: [
    {
      path: ':id',
      component: TopList
    }
  ]
}
```

2. Vuex 实现路由数据通讯

> 状态管理
```
// state.js
const state = {
  .. ..
  
  topList: {}
}

// mutation-types.js
export const SET_TOP_LIST = 'SET_TOP_LIST'

// mutations.js
const mutations = {
  .. ..
  
  [types.SET_TOP_LIST] (state, topList) {
    state.topList = topList
  }
}

// getters.js
export const topList = state => state.topList
```

> rank 父组件跳转 & 传递参数
```
import {mapMutations} from 'vuex'


selectItem (item) {
  this.$router.push({
    path: `/rank/${item.id}`
  })
  this.setTopList(item)
},
...mapMutations({
  setTopList: 'SET_TOP_LIST'
})
```

> top-list 获取数据
```
import {mapGetters} from 'vuex'

export default {
  computed: {
    title () {
      return this.topList.topTitle
    },
    bgImage () {
      return this.topList.picUrl
    },
    ...mapGetters([
      'topList'
    ])
  },
  components: {
    MusicList
  }
}
```

3. top-list 数据抓取

> jsonp 请求数据
```
export function getMusicList (topid) {
  const url = `https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg`

  const data = Object.assign({}, commonParams, {
    topid,
    needNewCode: 1,
    uin: 0,
    tpl: 3,
    page: 'detail',
    type: 'top',
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
```

> 数据应用
```
import {getMusicList} from 'api/rank'
import {createSong} from 'common/js/song'

computed: {
  .. ..
  
  bgImage () { // 使用 top-list 抓取数据的图片
    if (this.songs.length) {
      return this.songs[0].image
    }
    return ''
  }
},
methods: {
  _getMusicList () {
    if (!this.topList.id) {
      this.$router.push('/rank')
      return
    }
    getMusicList(this.topList.id).then((res) => {
      this.songs = this._normalizeSongs(res.songlist)
    })
  },
  _normalizeSongs (list) {
    let ret = []
    list.forEach((item) => {
      const musicData = item.data
      if (musicData.songid && musicData.albummid) {
        ret.push(createSong(musicData))
      }
    })
    return ret
  }
},
created () {
  this._getTopList()
}
```

4. 带排行的 song-list 组件扩展

> song-list 组件添加 DOM
```
<div class="rank" v-show="rank">
  <span :class="getRankCls(index)">{{getRankText(index)}}</span>
</div>
```

```
props: { // 接收 rank
  .. ..
  
  rank: {
    type: Boolean,
    default: false
  }
},
methods: {
  .. ..
  
  getRankCls (index) {
    if (index <= 2) { // 前三名返回 icon 样式
      return `icon icon${index}`
    } else {
      return 'text'
    }
  },
  getRankText (index) {
    if (index > 2) { // 返回一个文字
      return index + 1
    }
  }
}
```
> music-list 父组件
```
<song-list :songs="songs" :rank="rank" @select="selectItem"></song-list>
```

```
props: { // 接收 rank
  .. ..
  
  rank: {
    type: Boolean,
    default: false
  }
}
```

> top-list 组件使用排行
```
<music-list :title="title"
            :bgImage="bgImage"
            :songs="songs"
            :rank="rank"
></music-list>
```

```
data () { // 定义 rank
  return {
    .. ..
    
    rank: true
  }
}
```


#### search-box 基础组件开发

```
<div class="search-box">
  <i class="icon-search"></i>
  <!-- 双向绑定 -->
  <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
  <i @click="clear" v-show="query" class="icon-dismiss"></i>
</div>
```

```
data () {
  return { // 用于双向绑定
    query: ''
  }
},
props: {
  placeholder: {
    type: String,
    default: '搜索歌词、歌手'
  }
},
methods: {
  clear () { // 清空内容
    this.query = ''
  }
},
created () {
  this.$watch('query', (newQuery) => { // 监听 quert 值，并派发一个事件给父级
    this.$etmit('query', newQuery)
  })
}
```

#### search 组件

1. 热门搜索数据抓取
> path: api/search.js
```
import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'

export function getHotKey () {
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/gethotkey.fcg'

  const data = Object.assign({}, commonParams, {
    uin: 0,
    needNewCode: 1,
    platform: 'h5'
  })

  return jsonp(url, data, options)
}
```

2. 应用
```
<li v-for="(item, index) in hotkey"
    :key="index"
    @click="addQuery(item.k)"
    class="item"
>
  <span>{{item.k}}</span>
</li>
```

```
import SearchBox from 'base/search-box/search-box'
import {getHotKey} from 'api/search'
import {ERR_OK} from 'api/config'

export default {
  data () {
    return { // 用于循环
      hotkey: []
    }
  },
  methods: {
    addQuery (query) { // 点击传入 searchBox 中
      this.$refs.searchBox.setQuery(query)
    },
    _getHotKey () {
      getHotKey().then((res) => { // 获取数据
        if (res.code === ERR_OK) {
          this.hotkey = res.data.hotkey.splice(0, 10)
        }
      })
    }
  },
  components: {
    SearchBox
  },
  created () { // 生命周期函数 created 阶段执行函数
    this._getHotKey()
  }
}
```

> search-box 定义方法，改变 query
```
setQuery (query) {
  this.query = query
}
```

#### suggest 组件

1. 获取数据

> 后端代理
```
app.get('/api/search', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})
```

> 使用 axios 插件进行 json 请求 
```
export function search (query, page, zhida) {
  const url = '/api/search'

  const data = Object.assign({}, commonParams, {
    w: query,
    p: page,
    perpage: 20,
    n: 0,
    catZhida: zhida ? 1 : 0,
    zhidaqu: 1,
    t: 0,
    flag: 1,
    ie: 'utf-8',
    sem: 1,
    aggr: 0,
    remoteplace: 'txt.mqq.all',
    uin: 0,
    needNewCode: 1,
    platform: 'h5',
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
```

2. 数据应用
```
import {search} from 'api/search'
import {ERR_OK} from 'api/config'
import {filterSinger} from 'common/js/song'

// 语义化
const TYPE_SINGER = 'singer'

export default {
  data () {
    return {
      page: 1,
      result: []
    }
  },
  props: {
    query: { // search 组件传递 query
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    search () { // 数据获取
      search(this.query, this.page, this.showSinger).then((res) => {
        if (res.code === ERR_OK) {
          this.result = this._genResult(res.data)
        }
      })
    },
    getIconCls (item) { // 动态改变样式
      if (item.type === TYPE_SINGER) {
        return 'icon-mine'
      } else {
        return 'icon-music'
      }
    },
    getDisplayName (item) { // 歌手显示数据处理
      if (item.type === TYPE_SINGER) {
        return item.singername
      } else {
        return `${item.songname} - ${filterSinger(item.singer)}`
      }
    },
    _genResult (data) { // 数据处理
      let ret = []
      if (data.zhida && data.zhida.singerid) {
        // type: TYPE_SINGER
        // 自定义对象，通过解构将对象合并，用于区分是否含有歌手 
        ret.push({...data.zhida, ...{type: TYPE_SINGER}})
      }
      if (data.song) {
        ret = ret.concat(data.song.list)
      }
      return ret
    }
  },
  watch: {
    query () { // 监听 query 的变化
      this.search()
    }
  }
}
```

3. search 组件使用
```
<search-box ref="searchBox" @query="onQueryChange"></search-box>

.. ..

<suggest :query="query"></suggest>
```

```
onQueryChange (query) {
  this.query = query
},
```

4. 部分优化
```
import {createSong} from 'common/js/song'


getDisplayName (item) {
  if (item.type === TYPE_SINGER) {
    .. ..
  } else { // 修改数据键值
    return `${item.name} - ${item.singer}`
  }
},
_genResult (data) {
  .. ..
  
  if (data.song) {
    ret = ret.concat(this._normalizeSongs(data.song.list))
  }
  return ret
},
_normalizeSongs (list) { // 使用 Song 类，进行数据格式化
  let ret = []
  list.forEach((musicData) => {
    if (musicData.songid && musicData.albumid) {
      ret.push(createSong(musicData))
    }
  })
  return ret
}
```


#### 上拉加载

1. scroll 扩展 
```
props: {
  .. ..
  
  pullup: { // 下拉刷新
    type: Boolean,
    default: false
  }
}


methods: {
  _initScroll () {
    .. ..

    if (this.pullup) { // 下拉刷新
      this.scroll.on('scrollEnd', () => { // 监听, scroll 方法
        // scroll 方法
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.$emit('scrollToEnd') // 派发事件
        }
      })
    }
  },
}
```

```
data () {
  return {
    .. ..
    
    pullup: true, // 传递给 scroll 派发事件
    hasMore: true
  }
},
methods: {
  search () {
    this.hasMore = true
    this.page = 1 // 第一次请求回到第一页
    this.$refs.suggest.scrollTo(0, 0) // scroll 返回顶部
    search(this.query, this.page, this.showSinger, perpage).then((res) => {
      if (res.code === ERR_OK) {
        this.result = this._genResult(res.data)
        this._checkMore(res.data)
      }
    })
  },
  searchMore () { // scrollToEnd 派发事件
      if (!this.hasMore) {
        return
      }
      this.page++ // 请求页数
      search(this.query, this.page, this.showSinger, perpage).then((res) => {
        if (res.code === ERR_OK) {
          this.result = this.result.concat(this._genResult(res.data)) // 合并两项数组
          this._checkMore(res.data)
        }
      })
    },
  _checkMore (data) { // 检查是否还有数据
    const song = data.song
    if (!song.list.length || (song.curnum + song.curpage * perpage) >= song.totalnum) {
      this.hasMore = false
    }
  },
}
```

#### suggest 组件点击跳转

1. 歌手跳转
```
<!-- 添加跳转事件 -->
<li class="suggest-item"
    v-for="(item, index) in result"
    :key="index"
    @click="selectItem(item)"
>
  .. ..
  
</li>
```

```
import {mapMutations} from 'vuex'


selectItem (item) {
  if (item.type === TYPE_SINGER) {
    const singer = new Singer({ // 创建歌手类
      id: item.singermid,
      name: item.singername
    })
    this.$router.push({ // 跳转页面
      path: `/search/${singer.id}`
    })
    this.setSinger(singer) // 改变 vuex 实现数据传递
  }
},
...mapMutations({
  setSinger: 'SET_SINGER'
})
```

> router 添加二级目录
```
// search 中添加 router-view 标签
{
  path: '/search',
  component: Search,
  children: [
    {
      path: ':id',
      component: SingerDetail
    }
  ]
}
```

2. 歌曲播放跳转

> 通过 vuex action 异步传递数据
```
export const insertSong = function ({commit, state}, song) {
  // mutations 外部修改
  // slice() 方法可从已有的数组中返回选定的元素，不会改变原数组
  let playlist = state.playlist.slice() // .slice() 副本修改
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex // 值

  // 记录当前歌曲
  let currentSong = playlist[currentIndex]

  // 查找当前列表中是否有待插入的歌曲并返回索引
  let fpIndex = findIndex(playlist, song)
  // 在当前歌曲后插入歌曲，索引 +1
  currentIndex++
  playlist.splice(currentIndex, 0, song)
  // 存在待插入歌曲，删除原位置的歌曲
  if (fpIndex > -1) {
    // 如果当前插入的序号 > 列表中的序号
    if (currentIndex > fpIndex) {
      playlist.splice(fpIndex, 1)
      currentIndex--
    } else {
      playlist.splice(fpIndex + 1, 1)
    }
  }
  
  // 歌单顺序列表
  // playlist 与 sequenceList 是两个独立的状态
  let currentSIndex = findIndex(sequenceList, currentSong) + 1
  let fsIndex = findIndex(sequenceList, song)
  sequenceList.splice(currentSIndex, 0, song)
  if (fsIndex > -1) {
    if (currentSIndex > fsIndex) {
      sequenceList.splice(fsIndex, 1)
    } else {
      sequenceList.splice(fsIndex + 1, 1)
    }
  }

  commit(types.SET_PLAYLIST, playlist) // 歌单
  commit(types.SET_SEQUENCE_LIST, sequenceList)  // 播放顺序列表
  commit(types.SET_CURRENT_INDEX, currentIndex)  // 改变当前播放位置
  commit(types.SET_FULL_SCREEN, true)  // 播放大屏
  commit(types.SET_PLAYING_STATE, true)  // 播放状态
}
```

> suggest 中调用
```
import {mapMutations, mapActions} from 'vuex'

selectItem (item) {
  if (item.type === TYPE_SINGER) {
  
    .. ..
    
  } else { // 插入歌曲
    this.insertSong(item)
  }
},
...mapActions([
  'insertSong'
])
```

#### suggest 组件优化

1. no-result 组件，无查询结果
```
<div v-show="!hasMore && !result.length" class="no-result-wrapper">
  <no-result title="抱歉，暂无搜索数据"></no-result>
</div>
```

2. 节流

> path: common/js/util.js
```
export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // apply()方法 接收两个参数，一个是函数运行的作用域（this），另一个是参数数组。
      func.apply(this, args)
    }, delay)
  }
}
```

> search-box 组件，进行节流
```
created () {
  this.$watch('query', debounce((newQuery) => {
    this.$emit('query', newQuery)
  }, 200))
}
```

3. 手机端滑动失去焦点（输入法隐藏）

> scroll 组件扩展方法
```
props: {
  .. ..
  
  beforeScroll: {  // 滚动前事件
    type: Boolean,
    default: false
  }
}

methods: {
  .. ..
  
  if (this.beforeScroll) {  // 对外派发事件
    // scroll 方法
    this.scroll.on('beforeScrollStart', () => {
      this.$emit('beforeScroll')
    })
  }
}
```

> suggest 组件调用 scroll，获取事件
```
<scroll class="suggest"
        :data="result"
        :pullup="pullup"
        :beforeScroll="beforeScroll"
        @scrollToEnd="searchMore"
        @beforeScroll="listScroll"
        ref="suggest"
>
  .. ..
</scroll>


data () {
  return {  // 传入 scroll 组件
    .. ..
    
    beforeScroll: true
  }
},
methods: {
  .. ..
  
  // 向父组件派发事件
  listScroll () {  // search 组件执行
    this.$emit('listScroll')
  }
}
```

> search-box 组件，触发事件
```
<!-- ref 调用对象 -->
<input ref="query" v-model="query" class="box" :placeholder="placeholder"/>


methods: {
  .. ..
  
  blur () {  // 失去焦点事件
    this.$refs.query.blur()
  }
}
```

> search 组件
```
<!-- suggest 执行函数 -->
<suggest @listScroll="blurInput" :query="query"></suggest>


methods: {
  .. .. 

  blurInput () {  // 执行 search-box 组件方法
    this.$refs.searchBox.blur()
  }
}
```


#### 保存功能

> install storage
```
npm install good-storage --save
```

> suggest
```
selectItem (item) {  // 点击列表
  .. ..

  this.$emit('select')  // 对外派发事件
}
```

> search 组件执行操作
```
<suggest @select="saveSearch"
         @listScroll="blurInput"
         :query="query">
</suggest>



import {mapActions} from 'vuex'


saveSearch () {  // 缓存数据
  this.saveSearchHistory(this.query)
},
...mapActions([
  'saveSearchHistory'
])
```

> vuex 数据传递
```
// state.js
import {loadSearch} from 'common/js/cache'

const state = {
  // searchHistory: []
  searchHistory: loadSearch()  // 从本地中获取数据
}


// mutation-types.js
export const SET_SEARCH_HISTORY = 'SET_SEARCH_HISTORY'


// mutation.js
[types.SET_SEARCH_HISTORY] (state, history) {
  state.searchHistory = history
}

// getters.js
export const searchHistory = state => state.searchHistory


// actions.js
import {saveSearch} from 'common/js/cache'

export const saveSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, saveSearch(query))
}
```

> cache.js 数据缓存到本地
```
// 引用第三方包
import storage from 'good-storage'

// key，内部 __key__
const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

function insertArray (arr, val, compare, maxLen) {  // 插入 query
  // compare 回调函数
  const index = arr.findIndex(compare)
  
  if (index === 0) {  // 在第一位，不操作
    return
  }
  if (index > 0) {  // 存在值，删除
    arr.splice(index, 1)
  }

  arr.unshift(val)  // 插入第一位
  if (maxLen && arr.length > maxLen) {  // 检查是否大于最大长度
    arr.pop()  // 删除最后一位
  }
}

export function saveSearch (query) {  // 缓存本地
  // 第三方包 good-storage
  // 获取 key 值，第二个参数为默认值
  let searches = storage.get(SEARCH_KEY, [])
  
  insertArray(searches, query, (item) => {  // 回调函数
    return item === query
  }, SEARCH_MAX_LENGTH)
  
  // 设置本地缓存
  storage.set(SEARCH_KEY, searches)
  // 返回缓存值
  return searches
}

export function loadSearch () {  // 获取本地缓存
  return storage.get(SEARCH_KEY, [])
}
```


#### 搜索历史

1. search-list 组件
```
<div class="search-list" v-show="searches.length">
  <ul>
    <li class="search-item" v-for="item in searches" :key="item" @click="selectItem(item)">
      <span class="text">{{item}}</span>
      <span class="icon" @click.stop="deleteOne(item)">
        <i class="icon-delete"></i>
      </span>
    </li>
  </ul>
</div>


props: {
  searches: {
    type: Array,
    default () {
      return []
    }
  }
},
methods: {
  selectItem (item) { // 基础组件，对外派发事件，进行逻辑代码
    this.$emit('select', item)
  },
  deleteOne (item) {
    this.$emit('delete', item)
  }
}
```

> search 组件使用 search-list 组件
```
import {mapActions, mapGetters} from 'vuex'
import SearchList from 'base/search-list/search-list'


computed: {
  ...mapGetters([
    'searchHistory'
  ])
},
```

```
<!-- addQuery 实现点击事件 -->
<search-list @select="addQuery" :searches="searchHistory"></search-list>
```

2. 删除操作

> deleteOne
```
<!-- deleteAll -->
<span class="clear" @click="clearSearchHistory">

<!-- deleteOne -->
<search-list
    @select="addQuery"
    @delete="deleteSearchHistory"
    :searches="searchHistory"
></search-list>
```

```
// deleteOne (item) {
//   this.deleteSearchHistory(item)
// },
// deleteAll () {
//   this.clearSearchHistory()
// },


...mapActions([
  'saveSearchHistory',
  'deleteSearchHistory',
  'clearSearchHistory'
])
```

> action.js 中定义事件
```
import {saveSearch, deletSearch, clearSearch} from 'common/js/cache'


export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deletSearch(query))
}

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
```

> cache.js 删除本地缓存
```
function deleteFromArray (arr, compare) {  // 删除缓存
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}


export function deletSearch (query) {
  let searches = storage.get(SEARCH_KEY, [])  // 获取缓存
  deleteFromArray(searches, (item) => { // 回调函数，查找位置
    return item === query
  })
  
  // 保存本地缓存
  storage.set(SEARCH_KEY, searches)
  return searches
}

// 清空
export function clearSearch () {  // storage 方法
  storage.remove(SEARCH_KEY)
  return []
}
```

#### confrim 基础组件

> confirm
```
<transition name="confirm-fade">
  <div class="confirm" v-show="showFlag" @click.stop>
    <div class="confirm-wrapper">
      <div class="confirm-content">
        <p class="text">{{text}}</p>
        <div class="operate">
          <div @click="cancel" class="operate-btn left">{{cancelBtnText}}</div>
          <div @click="confirm" class="operate-btn">{{confirmBtnText}}</div>
        </div>
      </div>
    </div>
  </div>
</transition>
```

```
export default {
  props: {  // 外部传递文案
    text: {
      type: String,
      default: ''
    },
    confirmBtnText: {
      type: String,
      default: '确定'
    },
    cancelBtnText: {
      type: String,
      default: '取消'
    }
  },
  data () {
    return {  // 控制 confirm 显示
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    cancel () {  // 监听取消操作，对外派发事件
      this.hide()
      this.$emit('cancel')
    },
    confirm () {  // 监听确认操作，对外派发事件
      this.hide()
      this.$emit('confirm')
    }
  }
}
```

> search 组件使用 confirm 组件
```
<span class="clear" @click="showConfirm">
  .. ..
</span>


<confirm ref="comfirm"
         @confirm="clearSearchHistory"
         confirmBtnText="清空"
         text="是否清空所以搜索历史"
></confirm>
```

```
import Confirm from 'base/confirm/confirm'


showConfirm () {  // 调用 confirm 组件方法
  this.$refs.comfirm.show()
},
```

#### search 部分优化

1. 搜索历史滚动
```
<!-- scroll 只根据第一个 div 滚动，需要加个包裹层 -->
<scroll class="shortcut" :data="shortcut" ref="shortcut">
  <div>
  
    .. ..
  
  </div>
</scroll>
```

```
computed: {
  // scroll 组件传入 data 数据
  shortcut () {  // 根据 hotkey & searchHistory 改变重新计算 scorll
    return this.hotkey.concat(this.searchHistory)
  },
  
  .. ..
},
watch: {
  query (newQuery) {
    if (!newQuery) {  // 没有新的数据，重新计算 scroll
      setTimeout(() => {  // 重新计算 scroll
        this.$refs.shortcut.refresh()
      }, 20)
    }
  }
},
```

2. 高度自适应
```
import {playlistMixin} from 'common/js/mixin'

mixins: [playlistMixin],
methods: {
  handlePlaylist (playlist) {
    const bottom = playlist.length > 0 ? '60px' : ''
    
    // 重新计算 scroll 高度
    this.$refs.shortcutWrapper.style.bottom = bottom
    this.$refs.shortcut.refresh()

    this.$refs.searchResult.style.bottom = bottom
    this.$refs.suggest.refresh()  // suggest 方法
  },
  
  .. ..
}
```

> suggest 组件方法
```
refresh () {  // scroll 重新计算高度
  this.$refs.suggest.refresh()
}
```


#### playlist 组件

1. DOM结构
> 详情参考源码

2. playlist 组件显示和隐藏

> playlist 定义方法

```
<div class="playlist" v-show="showFlag" @click="hide">
  <!-- 阻止冒泡事件 -->
  <div class="list-wrapper" @click.stop>
  
    .. ..
    
    <div class="list-close" @click="hide">
      <span>关闭</span>
    </div>
  </div>
</div>
```

```
data () {
  return {
    showFlag: false
  }
},
methods: {
  show () {
    this.showFlag = true
  },
  hide () {
    this.showFlag = false
  }
}
```

> player 中显示 playlist

```
<div class="control" @click="showPlaylist">
  <i class="icon-playlist"></i>
</div>


<playlist ref="playlist"></playlist>
```

```
showPlaylist () {
  this.$refs.playlist.show()
}
```

3. 列表渲染
```
<scroll ref="listContent" class="list-content" :data="sequenceList">
  <ul>
    <li class="item"
        v-for="(item, index) in sequenceList"
        :key="index"
        @click="selectItem(item, index)"
    >
      <i class="current" :class="getCurrentIcon(item)"></i>
      
      .. ..
      
    </li>
  </ul>
</scroll>
```

```
import {mapGetters, mapMutations} from 'vuex'
import {playMode} from 'common/js/config'
import Scroll from 'base/scroll/scroll'


computed: {
  ...mapGetters([
    'sequenceList',
    'currentSong',
    'playlist',
    'mode'
  ])
},
methods: {
  show () {
    this.showFlag = true
    setTimeout(() => { // 渲染结束重新计算 scroll
      this.$refs.listContent.refresh()
    }, 20)
  },
  
  .. ..
  
  getCurrentIcon (item) {
    if (this.currentSong.id === item.id) {
      return 'icon-play'
    }
    return ''
  },
  selectItem (item, index) {
    if (this.model === playMode.random) { // 随机播放
      index = this.playlist.findIndex((song) => {
        return song.id === item.id
      })
    }

    this.setCurrentIndex(index)
  },
  ...mapMutations({
    setCurrentIndex: 'SET_CURRENT_INDEX'
  })
},
```

4. 当前播放始终在顶部

> 播放状态
```
selectItem (item, index) {
  .. ..
  
  // 暂停播放时，改变播放状态
  this.setPlayingState(true)
},
...mapMutations({
  .. ..
  setPlayingState: 'SET_PLAYING_STATE'
})
```

> player 组件，阻止点击冒泡
```
<!-- 阻止冒泡 -->
<div class="control" @click.stop="showPlaylist">
  .. ..
</div>
```

> 当前播放歌曲始终在顶部

```
show () {
  this.showFlag = true
  setTimeout(() => {
    this.$refs.listContent.refresh()
    
    // 在显示的歌单列表时，当前播放歌曲在顶部
    this.scrollToCurrent(this.currentSong)
  }, 20)
},
scrollToCurrent (current) {
  // 播放顺序列表中寻找，当前播放歌曲
  const index = this.sequenceList.findIndex((song) => {
    return current.id === song.id
  })
  
  // scroll 方法
  this.$refs.listContent.scrollToElement(this.$refs.listItem[index], 300)
},


watch: {
  currentSong (newSong, oldSong) { // 监听 currentSong 的改变
    if (!this.showFlag || newSong.id === oldSong.id) {
      return
    }
    
    this.scrollToCurrent(newSong)
  }
}
```

5. 删除 playlist 歌曲

> action.js 中定义方法
```
export const deleteSong = function ({commit, state}, song) {
  // 获取数据
  let playlist = state.playlist.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  
  // 找到歌曲索引值，删除
  let pIndex = findIndex(playlist, song)
  playlist.splice(pIndex, 1)
  let sIndex = findIndex(sequenceList, song)
  sIndex.splice(sIndex, 1)

  // 删除的歌曲在当前播放状态的前面 || 删除最后一首歌曲
  if (currentIndex > pIndex || currentIndex === playlist.length) {
    currentIndex--
  }
  
  // 提交修改后的数据
  commit(types.SET_PLAYLIST, playlist)
  commit(types.SET_SEQUENCE_LIST, sequenceList)
  commit(types.SET_CURRENT_INDEX, currentIndex)
  
  // 列表为空
  const playingState = playlist.length > 0
  commit(types.SET_PLAYING_STATE, playingState)

  // if (!playlist.length) {
  //   commit(types.SET_PLAYING_STATE, false)
  // } else {
  //   commit(types.SET_PLAYING_STATE, true)
  // }
}
```

> deletOne 方法

```
import {mapGetters, mapMutations, mapActions} from 'vuex'


deleteOne (item) {
  this.deleteSong(item) // vuex 中的 action 方法

  if (!this.playlist.length) { // playlist 为空，隐藏
    this.hide()
  }
},
...mapActions([
  'deleteSong'
])
```

> player 组件中监听 currentSong
```
watch: {
  currentSong (newSong, oldSong) {
    if (!newSong.id) { // 没有歌曲
      return
    }
    
    .. ..
  }
  
  .. ..
} 
```

> delete 动画
```
<transition-group name="list" tag="ul">
  .. ..
</transition-group>
```

6. 清空 playlist

> action.js
```
export const deleteSongList = function ({commit}) {
  commit(types.SET_PLAYLIST, [])
  commit(types.SET_SEQUENCE_LIST, [])
  commit(types.SET_CURRENT_INDEX, -1)
  commit(types.SET_PLAYING_STATE, false)
}
```

```
<span class="clear" @click="showConfirm"><i class="icon-clear"></i></span>


<confirm ref="confirm" @confirm="confirmClear" title="是否清空播放列表" confirmBtnText="清空"></confirm>
```

```
import Confirm from 'base/confirm/confirm'


showConfirm () {
  this.$refs.confirm.show()
},
confirmClear () { // 清空列表，隐藏
  this.deleteSongList()
  this.hide()
},
...mapActions([
  .. ..
  
  'deleteSongList'
])
```

> confirm 组件阻止冒泡
```
<div class="confirm" v-show="showFlag" @click.stop>
  .. ..
</div>
```

#### playerMixin

> mixin.js <br /> 删除 player & playlist 中的重复代码
```
import {mapGetters, mapMutations} from 'vuex'
import {playMode} from 'common/js/config'
import {shuffle} from 'common/js/util'

export const playerMixin = {
  computed: {
    iconMode () {
      return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
    },
    ...mapGetters([
      'sequenceList',
      'currentSong',
      'playlist',
      'mode'
    ])
  },
  methods: {
    changeMode () {
      const mode = (this.mode + 1) % 3
      this.setPlayMode(mode)
      let list = null
      if (mode === playMode.random) {
        list = shuffle(this.sequenceList)
      } else {
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlayList(list)
    },
    resetCurrentIndex (list) {
      let index = list.findIndex((item) => {
        return item.id === this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    ...mapMutations({
      setPlayingState: 'SET_PLAYING_STATE',
      setCurrentIndex: 'SET_CURRENT_INDEX',
      setPlayMode: 'SET_PLAY_MODE',
      setPlayList: 'SET_PLAYLIST'
    })
  }
}
```

```
<i class="icon" :class="iconMode" @click="changeMode"></i>
<span class="text">{{modeText}}</span>
```

```
import {playerMixin} from 'common/js/mixin'

export default {
  mixins: [playerMixin],
  
  .. ..
}
```

#### add-song 组件

1. 显示 add-song 组件
```
<transition name="slide">
  <!-- 阻止冒泡 -->
  <div class="add-song" v-show="showFlag" @click.stop>
    <div class="header">
      <h1 class="title">添加歌曲到列表</h1>
      <div class="close" @click="hide">
        <i class="icon-close"></i>
      </div>
    </div>
    <div class="search-box-wrapper">
    </div>
    <div class="shortcut">
    </div>
    <div class="search-result">
    </div>
  </div>
</transition>
```

```
export default {
  data () {
    return {
      showFlag: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    }
  }
}
```

> playlist 组件调用 add-song 组件
```
<div class="add" @click="addSong">
  .. ..
</div>

<add-song ref="addSong"></add-song>
```

```
import AddSong from 'components/add-song/add-song'


addSong () {
  this.$refs.addSong.show()
},
```

2. searchMixin 实现

> minxin.js<br />删除重复代码
```
import {mapGetters, mapMutations, mapActions} from 'vuex'

export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch () {
      this.saveSearchHistory(this.query)
    },
    onQueryChange (query) {
      this.query = query
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory'
    ])
  }
}
```

```
<div class="search-box-wrapper">
  <search-box @query="onQueryChange" placeholder="搜索歌曲" ref="searchBox"></search-box>
</div>
<div class="shortcut" v-show="!query"></div>
<div class="search-result" v-show="query">
  <suggest :query="query" :showSinger="showSinger" @select="selectSuggest" @listScroll="blurInput"></suggest>
</div>
```

```
import SearchBox from 'base/search-box/search-box'
import Suggest from 'components/suggest/suggest'
import {searchMixin} from 'common/js/mixin'

export default {
  mixins: [searchMixin],
  data () {
    return {
      showFlag: false,
      showSinger: false
    }
  },
  methods: {
    show () {
      this.showFlag = true
    },
    hide () {
      this.showFlag = false
    },
    selectSuggest () { // mixin 中的方法
      this.saveSearch()
    }
  },
  components: {
    SearchBox,
    Suggest
  }
}
```

#### switches 组件

1. switches 组件实现
```
<ul class="switches">
  <li class="switch-item" v-for="(item,index) in switches" :key="index" :class="{'active':currentIndex === index}"
      @click="switchItem(index)">
    <span>{{item.name}} </span>
  </li>
</ul>
```

```
props: {
  switches: { // 标题内容
    type: Array,
    default () {
      return []
    }
  },
  currentIndex: {
    type: Number,
    default: 0
  }
},
methods: {
  switchItem (index) { // 对外派发事件
    this.$emit('switch', index)
  }
}
```

2. add-song 组件调用

```
<switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
```

```
data () {
  return {
    .. ..
    
    switches: [
      {name: '最近播放'},
      {name: '搜索历史'}
    ]
  }
},
methods: {
  .. ..
  
  currentIndex: 0,
  switchItem (index) {
    this.currentIndex = index
  }
},
components: {
  .. ..
  
  Switches
}
```

#### 播放历史缓存

1. vuex 共享数据
```
// state.js
import {loadSearch, loadPlay} from 'common/js/cache'

// playHistory: []
// 播放历史，缓存读取
playHistory: loadPlay()


// mutation-types.js
export const SET_PLAY_HISTORY = 'SET_PLAY_HISTORY'


// mutation.js
[types.SET_PLAY_HISTORY] (state, history) {
  state.playHistory = history
}


// getters.js
export const playHistory = state => state.playHistory


// action.js
export const savePlayHistory = function ({commit}, song) {
  commit(types.SET_PLAY_HISTORY, savePlay(song))
}
```

2. cache.js 缓存
```
const PLAY_KEY = '__play__'
const PLAY_MAX_LEN = 200

export function savePlay (song) {
  let songs = storage.get(PLAY_KEY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, PLAY_MAX_LEN)
  storage.set(PLAY_KEY, songs)
  return songs
}

export function loadPlay () {
  return storage.get(PLAY_KEY, [])
}
```

3. player 组件调用本地缓存
```
import {mapGetters, mapMutations, mapActions} from 'vuex'


ready () { // 数据加载时获取本地缓存
  this.songReady = true
  this.savePlayHistory(this.currentSong)
},
...mapActions([
  'savePlayHistory'
])
```

4. add-song 组件
```
<scroll v-if="currentIndex===0" :data="playHistory" class="list-scroll">
  <div class="list-inner">
    <song-list :songs="playHistory"></song-list>
  </div>
</scroll>
```
  
```
import Scroll from 'base/scroll/scroll'
import {mapGetters} from 'vuex'
import SongList from 'base/song-list/song-list'


computed: {
  ...mapGetters([
    'playHistory'
  ])
},
components: {
  .. ..
  
  Scroll,
  SongList
}
```

#### add-song 组件剩余功能

1. 插入歌曲
```
<song-list :songs="playHistory" @select="selectSong"></song-list>
```

```
import {mapGetters, mapActions} from 'vuex'
import Song from 'common/js/song'

selectSong (song, index) {
  if (index !== 0) {
    // song 是一个对象，并不是 Song 实例
    // 转化成 Song 实例
    this.insertSong(new Song(song))
  }
},
...mapActions([
  'insertSong'
])
```

2. searchMixin 实现
```
export const searchMixin = {
  data () {
    return {
      query: ''
    }
  },
  computed: {
    ...mapGetters([
      'searchHistory'
    ])
  },
  methods: {
    blurInput () {
      this.$refs.searchBox.blur()
    },
    saveSearch () {
      this.saveSearchHistory(this.query)
    },
    onQueryChange (query) {
      this.query = query
    },
    addQuery (query) {
      this.$refs.searchBox.setQuery(query)
    },
    ...mapActions([
      'saveSearchHistory',
      'deleteSearchHistory'
    ])
  }
}
```

3. 搜素历史
```
<scroll ref="songList" v-if="currentIndex===0" :data="playHistory" class="list-scroll">
  .. ..
</scroll>
<scroll ref="searchList" v-if="currentIndex===1" :data="searchHistory" class="list-scroll">
  <div class="list-inner">
    <search-list @delete="deleteSearchHistory" @select="addQuery" :searches="searchHistory"></search-list>
  </div>
</scroll>
```

```
import SearchList from 'base/search-list/search-list'


show () {
  this.showFlag = true
  setTimeout(() => { // 重新计算 scroll 高度
    if (this.currentIndex === 0) {
      this.$refs.songList.refresh()
    } else {
      this.$refs.searchList.refresh()
    }
  }, 20)
},
```

> search-list 组件使用 transition-group
```
<div class="search-list" v-show="searches.length">
  <transition-group name="list" tag="ul">
    .. ..
  </transition-group>
</div>
```

#### top-tip 组件
```
<transition name="drop">
  <div class="top-tip" v-show="showFlag" @click.stop="hide">
    <slot></slot>
  </div>
</transition>
```

```
data () {
  return {
    showFlag: false
  }
},
props: {
  delay: { // 延迟时间
    type: Number,
    default: 2000
  }
},
methods: {
  show () {
    this.showFlag = true
    clearInterval(this.timer)
    this.timer = setTimeout(() => { // 定时器，关闭 top-tip
      this.hide()
    }, this.delay)
  },
  hide () {
    this.showFlag = false
  }
}
```

> add-song 组件使用 top-tip 组件
```
<top-tip ref="topTip">
  <div class="tip-title">
    <i class="icon-ok"></i>
    <span class="text">1首歌曲已经添加到播放队列</span>
  </div>
</top-tip>
```

```
import TopTip from 'base/top-tip/top-tip'

selectSuggest () {
  .. ..
  
  this.showTip()
},
selectSong (song, index) {
  if (index !== 0) {
    .. ..
    
    this.showTip()
  }
},
showTip () { // 显示 top-tip
  this.$refs.topTip.show()
},
```

#### 部分优化

1. scroll 组件扩展
```
props: {
  refreshDelay: { // 控制延迟时间
    type: Number,
    default: 20
  }
},
mounted () {
  setTimeout(() => {
    this._initScroll()
  }, this.refreshDelay)
}
```

2. playlist 组件中包裹 transition 动画的 scroll 做延迟
```
<scroll ref="listContent"
        class="list-content"
        :data="sequenceList"
        :refreshDelay="refreshDelay"
>
  .. ..
</scroll>

data () {
  return {
    showFlag: false,
    refreshDelay: 100
  }
},
```

3. add-song & search 组件

> add-song
```
<scroll ref="searchList"
        v-if="currentIndex===1"
        :data="searchHistory"
        :refreshDelay="refreshDelay"
        class="list-scroll"
>
  .. ..
</scroll>
```

> search
```
<scroll class="shortcut" :data="shortcut" ref="shortcut" :refreshDelay="refreshDelay">
  .. ..
</scroll>
```

> 两个组件共用 mixin
```
export const searchMixin = {
  data () {
    return {
      .. ..
      
      refreshDelay: 100
    }
  },
  
  .. ..
}
```

#### user-center 组件

1. DOM 结构
> 详情参考源码

2. m-header 组件跳转 user-center
```
<router-link to="/user" class="mine" tag="div">
  <i class="icon-mine"></i>
</router-link>
```

> router 配置
```
import UserCenter from 'components/user-center/user-center'

{
  path: '/user',
  component: UserCenter
}
```

3. 使用 switches 组件
```
<switches :currentIndex="currentIndex" :switches="switches" @switch="switchItem"></switches>
```

```
import Switches from 'base/switches/switches'

export default {
  data () {
    return {
      currentIndex: 0,
      switches: [
        {name: '我喜欢的'},
        {name: '最近听的'}
      ]
    }
  },
  methods: {
    switchItem (index) {
      this.currentIndex = index
    }
  },
  components: {
    Switches
  }
}
```

#### 收藏功能实现

1. vuex 数据共享
```
// state.js
favoriteList: []


// mutation-types.js
export const SET_FAVORITE_LIST = 'SET_FAVORITE_LIST'


// mutation.js
[types.SET_FAVORITE_LIST] (state, list) {
  state.favoriteList = list
}


// getters.js
export const favoriteList = state => state.favoriteList


// action.js
import {saveSearch, deletSearch, clearSearch, savePlay, saveFavorite, deleteFavorite} from 'common/js/cache'

export const savePlayHistory = function ({commit}, song) {
  commit(types.SET_PLAY_HISTORY, savePlay(song))
}

export const saveFavoriteList = function ({commit}, song) {
  commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}

export const deleteFavoriteList = function ({commit}, song) {
  commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}
```

2. cache.js
```
const FAVORITE_KTY = '__favorite__'
const FAVORITE_MAX_LENGTH = 200

export function saveFavorite (song) {
  let songs = storage.get(FAVORITE_KTY, [])
  insertArray(songs, song, (item) => {
    return song.id === item.id
  }, FAVORITE_MAX_LENGTH)

  storage.set(FAVORITE_KTY, songs)
  return songs
}

export function deleteFavorite (song) {
  let songs = storage.get(FAVORITE_KTY, [])
  deleteFromArray(songs, (item) => {
    return song.id === item.id
  })

  storage.set(FAVORITE_KTY, songs)
  return songs
}

export function loadFavorite () {
  return storage.get(FAVORITE_KTY, [])
}
```

3. mixin 方法实现 favorite 数据共享
```
// playerMixin


...mapGetters([
  .. ..
  
  'favoriteList'
])


getFavoriteIcon (song) { // 动态改变样式
  if (this.isFavorite(song)) {
    return 'icon-favorite'
  } else {
    return 'icon-not-favorite'
  }
},
toggleFavorite (song) {
  if (this.isFavorite(song)) {
    this.deleteFavoriteList(song)
  } else {
    this.saveFavorite(song)
  }
},
isFavorite (song) { // 查找是否收藏
  const index = this.favoriteList.findIndex((item) => {
    return item.id === song.id
  })
  return index > -1
},
...mapActions([
  'saveFavoriteList',
  'deleteFavoriteList'
])
```

4. 实现收藏功能
> player
```
<i class="icon" :class="getFavoriteIcon(currentSong)" @click="toggleFavorite(currentSong)"></i>
```

> playlist
```
<span class="like" @click.stop="toggleFavorite(item)">
  <i :class="getFavoriteIcon(item)"></i>
</span>
```

#### user-center 组件渲染 DOM
```
<scroll ref="favoriteList"
        v-if="currentIndex===0"
        :data="favoriteList"
        class="list-scroll"
>
  <div class="list-inner">
    <song-list :songs="favoriteList" @select="selectSong"></song-list>
  </div>
</scroll>
<scroll ref="playList"
        v-if="currentIndex===1"
        :data="playHistory"
        class="list-scroll"
>
  <div class="list-inner">
    <song-list :songs="playHistory" @select="selectSong"></song-list>
  </div>
</scroll>
```

```
import SongList from 'base/song-list/song-list'
import Scroll from 'base/scroll/scroll'
import Song from 'common/js/song'
import {mapGetters, mapActions} from 'vuex'

computed: {
  ...mapGetters([
    'favoriteList',
    'playHistory'
  ])
},
methods: {
  .. ..
  
  selectSong (song) { // 添加歌曲播放
    // song 是 object, 并非 Song 实例
    // 将 song 转换为 Song 实例
    this.insertSong(new Song(song))
  },
  ...mapActions([
    'insertSong'
  ])
},
components: {
  .. ..
  
  Scroll,
  SongList
}
```

#### user-center 部分优化

1. back 回退事件
```
<div class="back" @click="back">
  .. ..
</div>


back () {
  this.$router.back()
},
```

2. 随机播放
```
<div ref="playBtn" class="play-btn" @click="random">
  .. ..
</div>



import Song from 'common/js/song'
import {mapGetters, mapActions} from 'vuex'

random () {
  let list = this.currentIndex === 0 ? this.favoriteList : this.playHistory
  if (list.length === 0) {
    return
  }
  list = list.map((song) => { // song 转化成 Song 实例
    return new Song(song)
  })
  this.randomPlay({
    list
  })
},
...mapActions([
  .. ..
  
  'randomPlay'
])
```

3. 播放器高度自适应
```
import {playlistMixin} from 'common/js/mixin'

mixins: [playlistMixin]

handlePlaylist (playlist) {
  const bottom = playlist.length > 0 ? '60px' : ''
  this.$refs.listWrapper.style.bottom = bottom
  
  // 判断条件
  this.$refs.favoriteList && this.$refs.favoriteList.refresh()
  this.$refs.playList && this.$refs.playList.refresh()
},
```

4. no-result 组件的使用
```
<div class="no-result-wrapper" v-show="noResult">
  <no-result :title="noResultDesc"></no-result>
</div>
```

```
computed: {
  noResult () { // 显示 no-result
    if (this.currentIndex === 0) {
      return !this.favoriteList.length
    } else {
      return !this.playHistory.length
    }
  },
  noResultDesc () { // no-result 组件的 title
    if (this.currentIndex === 0) {
      return '暂无收藏歌曲'
    } else {
      return '你还没有听过歌曲'
    }
  },
  
  .. ..
},
```

#### 快速切换歌曲 优化
```
<!-- canplay 与 play 的区别 -->
<audio ... @play="ready"></audio>
```

```
watch: {
  currentSong (newSong, oldSong) {
    .. ..
    
    // 清空定时器
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      .. ..
    }, 1000)
  },
}
```

```
getLyric () {
  this.currentSong.getLyric().then((lyric) => {
    if (this.currentSong.lyric !== lyric) { // 当前歌曲与获取的不匹配
      return
    }

    .. ..
  }).catch(() => { // 清理操作
    .. ..
  })
}
```

```
next () {
  .. ..
  // 不关闭点击按钮
  if (this.playlist.length === 1) { // 歌曲只有一首时
    this.loop()
    return
  } else {
    .. ..
  }
  this.songReady = false
},
prev () {
  .. ..
  
  if (this.playlist.length === 1) { // 歌曲只有一首时
    this.loop()
    return
  } else {
    .. ..
  }
  this.songReady = false
}
```

#### 编译打包

1. 编译打包
```
npm run bulid

// 实际执行
package.json 文件中的 scripts.bulid
```

```
Time: 17776ms
                                                  Asset       Size  Chunks                    Chunk Names
    static/css/app.7b6b1b45d410cd0b903b34552e5df7ad.css     113 kB       1  [emitted]         app
                    static/img/no-result@3x.2858208.png    12.7 kB          [emitted]
               static/js/vendor.2323179061594fc3ceb7.js     339 kB       0  [emitted]  [big]  vendor
                  static/js/app.cf7a3b3fbb71033fab11.js    74.3 kB       1  [emitted]         app
             static/js/manifest.2ae2e69a05c33dfc65f8.js  857 bytes       2  [emitted]         manifest
                      static/img/music-icon.8a34857.svg    26.9 kB          [emitted]
static/css/app.7b6b1b45d410cd0b903b34552e5df7ad.css.map     141 kB          [emitted]
           static/js/vendor.2323179061594fc3ceb7.js.map    1.49 MB       0  [emitted]         vendor
              static/js/app.cf7a3b3fbb71033fab11.js.map     321 kB       1  [emitted]         app
         static/js/manifest.2ae2e69a05c33dfc65f8.js.map    4.97 kB       2  [emitted]         manifest
                                             index.html  563 bytes          [emitted]

  Build complete.
```

2. express 服务启动

> 新建 prod.server.js 文件
```

// webpack.dev.conf.js 中复制

// 后端代理
const axios = require('axios')
const express = require('express')
const app = express() // 请求server
const apiRoutes = express.Router()
app.use('/api', apiRoutes) // 通过路由请求数据

app.get('/api/getDiscList', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

app.get('/api/lyric', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    var ret = response.data
    if (typeof ret === 'string') {
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1])
      }
    }
    res.json(ret)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

app.get('/api/getSongList', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

app.get('/api/search', (req, res) => { // res 传入值
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  axios.get(url, {
    headers: { // 发送 http 请求修改请求头 -- 欺骗手段
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response 返回值
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

// 端口
app.use(express.static('./dist'))

// 开启服务
var config = require('./config/index')
var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
```

> config/index.js 中配置一个 port 端口
```
build: {
  // Template for index.html
  index: path.resolve(__dirname, '../dist/index.html'),
  port: 9000,
}
```

> 执行
```
node prod.server.js

// 执行完毕, 页面中的 js 加载文件会有变化
```

> js 编译后文件说明
```
// 维护静态资源清单文件
manifest.2ae2e69a05c33dfc65f8.js

// node_modules
vendor.2323179061594fc3ceb7.js

// 源码
app.cf7a3b3fbb71033fab11.js
```

#### 路由懒加载

> 详情查看 Vue Router 官方文档
```
// import Recommend from 'components/recommend/recommend'
// import Singer from 'components/singer/singer'
// import Rank from 'components/rank/rank'
// import Search from 'components/search/search'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import Disc from 'components/disc/disc'
// import TopList from 'components/top-list/top-list'
// import UserCenter from 'components/user-center/user-center'

// 视频中的 路由懒加载
// const Recommend = (resolve) => {
//   import('components/recommend/recommend').then((module) => {
//     resolve(module)
//   })
// }


// 路由懒加载
const Recommend = () => import('components/recommend/recommend')
const Singer = () => import('components/singer/singer')
const Rank = () => import('components/rank/rank')
const Search = () => import('components/search/search')
const SingerDetail = () => import('components/singer-detail/singer-detail')
const Disc = () => import('components/disc/disc')
const TopList = () => import('components/top-list/top-list')
const UserCenter = () => import('components/user-center/user-center')
```

> 重新编译打包
```
npm run build
```

#### vConsole 手机端调试

> install
```
npm install vconsole --save dev
```

> main.js 中引用，上线时注释此段代码
```
// 命名不使用，需要加注释
/* eslint-disable no-unused-vars */
import vConsole from 'vconsole'

console.log('test')
```

#### Charles 手机端抓包工具
