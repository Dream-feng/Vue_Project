# Music

#### ��Ŀ����
Vue 2.0ʵս�߼����� - �ƶ�������Web APP

2018-08-27

> �ο���ַ

- [QQ������ַ](http://y.qq.com/m/index.html)
- [ECMAScript 6 ����](http://www.nodeclass.com/api/ECMAScript6.html)
- [fastclick](https://github.com/ftlabs/fastclick)
- [jsonp](https://github.com/webmodules/jsonp)
- [better-scroll](https://github.com/ustbhuangyi/better-scroll)
- [axios](https://github.com/axios/axios)
- [vue-lazyload](https://github.com/hilongjw/vue-lazyload)


> ����

1. Google JOSNView ���<br />
   �ȸ�������з���URL��ַ���صĸ�ʽ���� json ����

#### Install

> ��������


1. ʹ�ý��ּ������й��� vue-cli ���� vue ��Ŀ
    ```
    // ����һ������ webpack ģ�������Ŀ
    vue init webpack Music    // Music => ��Ŀ�ļ����λ��

    ? Target directory exists. Continue? Yes
    ? Project name vue2.0-music
    ? Project description imooc.com vue2.0 music app
    ? Author ���� <1439325938@qq.com>
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

       vue-cli �� Generated "Music".

    # Installing project dependencies ...
    # ========================
    ```

#### ׼������

1. ��ʼ����Ŀ¼���£�

    <br />

    ![list](https://images.gitee.com/uploads/images/2018/0827/173516_8c20f1c4_2123176.png "list.png")

    > ���п����ǻ����޸� src ���ļ�

    ```
    api:          �����Ÿ����������� 
    common��      ͨ�õľ�̬��Դ��fonts��image��js/stylus�� 
    components:   ͨ����� 
    router:       ·�������� 
    store��       vuex��ش��� 
    App.vue:      ģ�� 
    main.js:      �ļ���ڣ�������Ⱦapp���ļ�
    ```   

2. src/stylus/variable.styl �ļ���ı������壺

    > src/stylus �л����ļ�����
      <br />        
      ���鿴Դ��

    ```
    // ��ɫ����淶
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

    //���嶨��淶
    $font-size-small-s = 10px
    $font-size-small = 12px
    $font-size-medium = 14px
    $font-size-medium-x = 16px
    $font-size-large = 18px
    $font-size-large-x = 22px
    ```
3. ���ó�ʼ�� css

    > src/stylus/index.styl �ļ��е���������������ʽ�ļ�
    ```
    @import "./reset.styl"
    @import "./base.styl"
    @import "./icon.styl"
    ```
    > main.js ������ index.styl �ļ�
    ```
    // requier style
    import 'common/stylus/index.styl'
    ```

4. �޸� package.json �ļ�

   > ��� stylus & stylus-loader ����<br />npm install ��װ����
    ```
    "stylus": "^0.54.5",
    "stylus-loader": "^2.1.1"
    ```

5. webpack.base.conf.js ����·������
   
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

6. .eslintrc.js �޸ļ�����
    
    ```
    'rules': {
      .. ..

      'eol-last': 0,    // ������ļ�ĩβ�Ƿ�����һ������
      'space-before-function-paren': 0    // function �������Ƿ��пո�
    }
    ```


#### ҳ�����+header����ı�д

1. index.html �����ֻ�
    
    ```
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
    ```

2. �������
   
    ```
    "dependencies": {
     "babel-runtime": "^6.26.0",    // es6ת��
     "fastclick": "^1.0.6"    // �����ƶ��˵��300ms��ʱ
    }

    "devDependencies": {
      .. ..

      "babel-polyfill": "^6.2.0"
    }
    ```

3. main.js ������
    
    ```
    import 'babel-polyfill'    // �������������
    import fastclick from 'fastclick'

    fastclick.attach(document.body)    // ���� body ��
    ```

4. ��д m-header ���
   > ����ο�Դ�� 

#### ·������
1. ·������
    ```
    // �������
    // Recommend Singer Rank Search

    import Recommend from 'components/recommend/recommend'
    .. ..
    
    // ���� router ·��
    routes: [
      {
        path: '/',
        redirect: '/recommend'    // ���ø�Ŀ¼��ת
      },
      {
        path: '/recommend',
        component: Recommend
      },
      .. ..
    ]
    ```
2. main.js ���� router ʵ��
   
    ```
    import router from './router'
    
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
    ```
3. App.vue ��ʹ��
    
    ```
    <template>
      <div id="app">
        <m-header></m-header>
        <router-view></router-view>
      </div>
    </template>
    ```

4. ��д tag ���
    > ����ο�Դ��

#### JSONP
https://github.com/webmodules/jsonp

1. Install
    ```
    npm i jsonp --save
    
    // Ҳ������ package.json ������������� install i ��װ
    "dependencies": {
        "jsonp": "^0.2.1"
    }
    ```

2. jsonp�ķ�װ

    > path: src/common/js/jsonp.js
    ```
    import originJSONP from 'jsonp' // ���õ�������Դ�� jsonp

    export default function jsonp (url, data, option) {
      url += (url.indexOf('?') < 0 ? '?' : '&') + param(data) // url ƴ��

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

    function param(data) { // ����ƴ��
      let url = ''
      for (var k in data) {
        let value = data[k] !== undefined ? data[k] : ''
        // es6 ģ���ַ���
        url += `&${k}=${encodeURIComponent(value)}` // $key=value

        // url += '&' + k + '=' + encodeURIComponent(value)
      }
      return url ? url.substring(1) : '' // key=value$key=value$key=value...
    }
    ```

3. ����һЩ��������������ÿ����ȥ��д

    > path: src/api/config.js
    ```
    export const commonParams = { // ��������
      g_tk: 5381,
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      format: 'jsonp'
    }

    export const options = { // jsonp ����
      param: 'jsonpCallback'
    }

    export const ERR_OK = 0
    ```

4. ʹ��jsonp ��ȡ�ֲ�ͼ������

    > path: src/api/recommend.js
    ```
    import jsonp from 'common/js/jsonp'
    import {commonParams, options} from './config'

    export function getRecommend () {
      const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
      
      const data = Object.assign({}, commonParams, { // es6 �﷨
        uin: 0,
        platform: 'h5',
        needNewCode: 1
      })

      return jsonp(url, data, options)
    }
    ```

5. �� recommend ����е��ýӿ�
    > ���ñ���
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

6. recommend �����д
    > ����ο�Դ��

#### �ֲ��������ʵ��

1. slider �����д

> path: src/base/slider/slider ����ο�Դ��
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

2. ���ñ��� & ��� better-scroll ����
    ```
    'base': resolve('src/base')��
    ```
    
    ```
    npm i better-scroll --save // ^1.12.6
    // ��Ƶ�еİ汾�� ^0.1.15
    ```

3. recommend �����д slot DOM�ṹ

    _ע: v-if="recommend.length"  JSONP �첽��������Ҫ��ȡ���ݺ���Ⱦ_ 
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
     
4. slider ͨ����������Դ better-scroll ʵ���ֲ�

```
import BScroll from 'better-scroll'
import {addClass} from 'common/js/dom'

export default {
  props: { // �ⲿ�������ʵ����Ӧ�Ĺ���
    loop: { // ѭ���ֲ�
      type: Boolean,
      default: true
    },
    autoPlay: { // �Զ��ֲ�
      type: Boolean,
      default: true
    },
    interval: { // ʱ����
      type: Number,
      default: 4000
    }
  },
  methods: {
    _setSliderWidth () {},
    _initSlider () {},
  },
  mounted () {
    setTimeout(() => { // ��������Ⱦ֡���Ϊ 16ms ����
      this._setSliderWidth()
      this._initSlider()
    }, 20)
  }
}
```

> ͨ�� DOM ���� -- addClass
  <br />
  path: src/common/dom.js

```
export function addClass (el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ') // ��� class => ["aaa", "bbb"]
  newClass.push(className)
  el.className = newClass.join(' ') // �ϲ� class => ["aaa", "bbb", "className"]
}

export function hasClass (el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

```

> this._setSliderWidth()
```
_setSliderWidth () { // �������������������
  this.childer = this.$refs.sliderGroup.children // ��ȡ slider

  let width = 0
  let sliderWidth = this.$refs.slider.clientWidth
  for (let i = 0; i < this.childer.length; i++) {
    let child = this.childer[i]
    addClass(child, 'slider-item')
    child.style.width = sliderWidth + 'px'
    width += sliderWidth
  }

  if (this.loop) { // BScroll ѭ�������Զ��������� slider
    width += 2 * sliderWidth
  }
  this.$refs.sliderGroup.style.width = width + 'px' // slider ����Ԫ�ؿ��
}
```

> this._initSlider()

  [�������òο�����](https://github.com/ustbhuangyi/better-scroll)
 ```
_initSlider () { // �� PC �˻����ᴥ�� click �¼�
  this.slider = new BScroll(this.$refs.slider, {
    scrollX: true,
    scrollY: false,
    momentum: false,
    snapLoop: this.loop,
    snapThreshold: 0.3,
    snapSpeed: 400,
    // snap: true // ѭ������ better-scroll@0.1.15
    snap: { // better-scroll@1.12.6
      loop: true
    }
  })
}
```

4. �ֲ� pages

> �������ݣ� mounted ��ʹ�� _initDots()
```
data () {
  return {
    dots: [], // ���ڼ�¼ pages ����
    currentPageIndex: 0 // ��ǰλ������
  }
}

mounted () {
  setTimeout(() => { // ��������Ⱦ֡���Ϊ 16ms ����
      .. ..
      this._initDots()
  }, 20)
}
```

> this._initDots()
```
_initDots () { // pages ����
  this.dots = new Array(this.childer.length)
}
```

> �ֲ� pages λ��
```
_initSlider () {
  .. ..

  this.slider.on('scrollEnd', () => { // BScroll scrollEnd �¼�
    let pageIndex = this.slider.getCurrentPage().pageX
    /* if (this.loop) { // better-scroll@0.1.15
         pageIndex -= 1
       } */
    this.currentPageIndex = pageIndex
  })
}
```

> DOM ��д
```
<div class="dots">
  <span class="dot"
        v-for="(item, index) of dots"
        :key="index"
        :class="{active : currentPageIndex === index}"
  ></span>
</div>
```

5. �Զ��ֲ�

> mounted ��ʹ�� _play()
```
mounted () {
  setTimeout(() => { // ��������Ⱦ֡���Ϊ 16ms ����
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
    this.slider.goToPage(pageIndex, 0, 400) // BScroll �ӿ�
  }, this.interval)
}
```

> scrollEnd �����¼��е��� _play()
```
this.slider.on('scrollEnd', () => { // BScroll scrollEnd �¼�
  .. ..

  if (this.autoPlay) {
    clearInterval(this.timer)
    this._play()
  }
})
```

6. �Ż�

> ��������ڵ�����С
```
    mounted () {
      .. ..
    
      window.addEventListener('resize', () => {
        if (!this.slider) {
          return
        }
    
        this._setSliderWidth(true)
        this.slider.refresh() // BScroll �ӿ�
      })
    }
```

> Ϊ _setSliderWidth() ���һ�� isResized ����
```
    _setSliderWidth (isResized) {
      .. ..
  
      // ����������ڵ�����Сʱ������Ϊ�������ӿ��
      if (this.loop && !isResized) { // BScroll ѭ�������Զ��������� slider
        width += 2 * sliderWidth
      }
    }
```

> ���� -- �б��л�ʱ�����ظ����� ajax
  <br />
  path: src/App.vue
  ```
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
  ```

> �л��б�ʱ��destroyed �������ں������� timer
  ```
  destroyed () {
    clearTimeout(timer)
  }
  ```

#### �赥�б�

1. axios ajax����

> [axios �ĵ�](https://github.com/axios/axios)
```
npm i axios --save // ^0.18.0
```

2. ��˽ӿڴ���

 _Vue-cli �ϳ��� dev-server.js_ 

> �� webpack.dev.conf.js ������

```
// ��˴���
const axios = require('axios'
const express = require('express')
const app = express() // ����server
const apiRoutes = express.Router()
app.use('/api', apiRoutes) // ͨ��·����������

// �� devServer ������
devServer: {
    // ͨ��axios��������
    before(app) {
      app.get('/api/getDiscList', (req, res) => {
        const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

        axios.get(url, {
          headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
            referer: 'https://c.y.qq.com/',
            host: 'c.y.qq.com'
          },
          // ����nodejsĬ���ṩ�����������м��,
          // �˷�����������GET���󣬽���GET�����еĲ���������·����ÿ����ѯ�ַ����������ԵĶ������û����Ϊ{} 
          params: req.query // nodejs��express���
        }).then((response) => {
          res.json(response.data)  //  ����һ�� JSON ��ʽ����Ӧ
        }).catch((e) => {
          console.log('axios err' + e)
        })
      })
    },
    
    .. ..
}
```

3. recommend.js ��
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

4. recommend ���ʹ��
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

5. recommend �����д
> ����ο�Դ��


#### scroll ��������ĳ����Ӧ��
> path: src/base/scroll

1. ʹ�� slot ���
```
<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
```

2. scroll ����߼�����
```
import BScroll from 'better-scroll'

export default {
  props: { // ���ɿز������ﵽ��ͬ������
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
    _initScroll () { // ��ʼ������ BScroll �ﵽ�ֲ�����
      if (!this.$refs.wrapper) {
        return
      }
      this.scroll = new BScroll(this.$refs.wrapper, { // ���ݲ���
        probeType: this.probeType,
        click: this.click
      })
    },
    // ������
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
  watch: { // �������ݱ仯���ı�����ִ�� refresh ���¼���
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

3. recommend ʹ�� scroll ���


> BScroll ��Ҫ�Ӹ� div ������

```
<scroll class="recommend-content" :data="discList" ref="scroll">
  <div>
  .. ..
  </div>
</scroll>
```

> Ϊ img ���һ�������¼�  @load="loadImg"
```
<img :src="item.picUrl" @load="loadImg" alt="">
```

> �� img ����ʱ�����¼��� BScroll �߶�<br />
```
methods: {
  .. ..

  loadImg () {
    if (!this.checkLoaded) { // ��һ��ͼƬ����
      this.$refs.scroll.refresh() // scroll ����еĴ�����
      this.checkLoaded = true
    }
  }
}
```

> ����
```
created () {
  setTimeout(() => { // �ӳټ��� header �ﵽ�߶�δȷ���Ĳ���Ч��
    this._getRecommend()
  }, 2000)
  this._getDiscList()
}
```

#### ͼƬ������

1. ��װ vue-lazyload ������������

[vue-lazyload  �ĵ�](https://github.com/hilongjw/vue-lazyload)

```
npm i vue-lazyload --save // ^1.2.6
```

2. ���� & ע��<br />
> path: src/main.js

```
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload, {
  loading: require('common/image/default.png') // Ĭ��ͼƬ
})
```

3. ʹ��

```
// recommend �����, ���赥�Ƽ��е� :src �ĳ� v-lazy

<img :src="item.imgurl" width="60" height="60" alt="">

<img v-lazy="item.imgurl" width="60" height="60" alt="">
```

4. �� better-scroll@0.1.15 �汾��Ĭ�ϻ���ֹ�������ԭ�� click �¼�

- ����ο� [fastclick �ٷ��ĵ�](https://github.com/ftlabs/fastclick)

```
// ��� needclick ��ʽ
// fastclick ���� click �¼�������� needsclik����������click�����֮�󴴽��������¼�

<img class="needsclick" :src="item.picUrl" @load="loadImg" alt=""> 
```

#### loading ���

1. loading �����д => gif ͼ
> ����ο�Դ��<br />
  path: src/base/loading

2. recommend ���ʹ��

```
<scroll class="recommend-content" :data="discList" ref="scroll">
  .. ..

  <div class="loading-container" v-show="!discList.length">
    <loading></loading>
  </div>
</scroll>
```

> ��������
```
import Loading from 'base/loading/loading'

created () {
  this._getRecommend()
  setTimeout(() => {
    this._getDiscList()
  }, 2000)
}
```

#### singer ��� -- ��ȡ����

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

2. ��������

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

3. ��������

> ����һ����class, ��װ����<br />
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

> singer �����������
```
    _normalizeSinger (list) {
      let map = { // ����һ������洢
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => { // ��ȡ��������
        if (index < HOT_SINGER_LENGHT) { // ��ȡ��������
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        // ������ͨ�� Findex ���з���
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
      // ��ȡ�����б�����map
      let hot = []
      let ret = []
      for (let key in map) { // �������
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      ret.sort((a, b) => { // ����
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })

      return hot.concat(ret) // ����һ������
    }
```

#### listview �������
> ����ο�Դ��
  path: src/base/listview

```
<!-- singer �������,���� singer ����  -->
<scroll class="listview" :data="data">
  .. ..
</scroll>

<!-- ע��ͼƬʹ�������� -->
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

#### listview������� -- �Ҳ�������ʵ��

1. �������ݣ���ȡ title ����
```
  computed: { 
    shortcutList () {
      return this.data.map((group) => {
        return group.title.substr(0, 1)
      })
    }
  }
```

2. DOM �ṹ
> �� touch ����ʱ�䡣���һ���Զ������ԣ����ڼ���
```
    <div class="list-shortcut" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList" :key="index" :data-index="index" class="item">
          {{item}}
        </li>
      </ul>
    </div>
```

3. dom.js �������ڻ�ȡ����ֵ�ķ���
```
export function getData (el, name, val) {
  const prefix = 'data-'
  name = prefix + name
  if (val) { // ����д��� val , ����ԭ�ȵ�ֵ
    return el.setAttribute(name, val)
  } else {
    return el.getAttribute(name)
  }
}
```

4. scroll ���������Ӵ�����
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

5. ��� & ��������

    > Ϊ�β��� data �ж��壿
    - Vue ����ݹ齫 data ������ת��Ϊ getter/setter���Ӷ��� data �������ܹ���Ӧ���ݱ仯
    - ���ֵ��������������ʱ�ԵĴ洢���ݣ�����Ҫ����
    
```
created () { 
  this.touch = {} // �洢���ݵ���ʱ����������Ҫ�������ı仯
}

methods: {
  onShortcutTouchStart (e) {
    let anchorIndex = getData(e.target, 'index')
    let firstTouch = e.touches[0]
    this.touch.y1 = firstTouch.pageY // ��꿪ʼλ��
    this.touch.anchorIndex = anchorIndex // ��¼��ʼλ�õ� index
    this._scrollTo(anchorIndex) // ������¼�����
  },
  onShortcutTouchMove (e) {
    let firstTouch = e.touches[0]
    this.touch.y2 = firstTouch.pageY // ������λ��
    // �߶Ȳ� / �߶ȣ���ȡ��������λ��
    // | 0 �൱�� Math.floor() ��������
    let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
    // ������λ���±�
    let anchorIndex = parseInt(this.touch.anchorIndex) + delta
    this._scrollTo(anchorIndex) // ��껬������
  },
  _scrollTo (index) {
    // BScroll ����
    // �ڶ������� time ��������ִ�е�ʱ������λ ms��
    this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
  }
}
```

6. �Ҳ������ʽ����

> scroll �������������չ
```
 props: {
  .. ..
  listenScroll: { // �Ƿ��������
    type: Boolean,
      default: false
    }
 }
 
 methods: {
   _initScroll () {
     .. ..
     
     // ���������¼�
     if (this.listenScroll) {
       let _that = this
          
       // BScroll ���� {x, y} ������ʵʱ����, ȡ���� probeType ֵ
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

> �߼�����
```
data () {
  return {
    scrollY: -1, // ���ڼ������� Y ��ƫ����
    currentIndex: 0 // ���ڼ�¼�������ڼ���λ��
  }
},
methods: {
    scroll (pos) { // �� scroll ��������н��յ���ֵ
      this.scrollY = pos.y
    },
    _calculateHeight () { // ÿһ�����ݿ�������ĸ߶ȵ� Array ����
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (let i = 0, l = list.length; i < l; i++) { // ��ȡ���ݿ�������ĸ߶�
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
},
watch: {
  data () { // ��������������
    setTimeout(() => {
      this._calculateHeight()
    }, 20)
  },
  scrollY (newY) { // �ı� currentIndex ʵ���л���ʽ
    const listHeight = this.listHeight
    // ��������������newY>0
    if (newY > 0) {
      this.currentIndex = 0
      return
    }
    // ���м䲿��
    for (let i = 0; i < listHeight.length - 1; i++) {
      let height1 = listHeight[i]
      let height2 = listHeight[i + 1]
      if (-newY >= height1 && -newY < height2) { // -newY >= height1 ����������
        this.currentIndex = i
        return
      }
    }
    // ���������ײ����� -newY �������һ��Ԫ�ص�����
    this.currentIndex = listHeight.length - 2
  }
},
// Vue ʵ�������ݶ���
// Vue ����ݹ齫 data ������ת��Ϊ getter/setter���Ӷ��� data �������ܹ���Ӧ���ݱ仯��
created () { // ֻΪ�洢���ݣ�����Ҫ vue �ڲ�����ת��
 this.touch = {}
 this.listHeight = []
 this.listenScroll = true
 this.probeType = 3
}
```

7. �����Ż�

> ���ʵ����ʽ���� & �߽紦��
```
_scrollTo (index) {
  // ���� padding ����
  if (!index && index !== 0) { // index === null
    return
  }
  // �߽紦��
  if (index < 0) {
    index = 0
  } else if (index > this.listHeight.length - 2) {
    index = this.listHeight - 2
  }

  // �޸� scrollY ��ֵ���� watch ���Զ������¼�
  this.scrollY = -this.listHeight[index]
  this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
}
```

8. �����̶�����ʵ��

> DOM
```
<scroll>
  .. ..

  <div class="list-fixed" v-show="fixedTitle" ref="fixed">
    <h1 class="fixed-title">{{fixedTitle}}</h1>
  </div>
</scroll>
```

> ���ֹ���ʵ��
```
data () {
  return {
    .. ..
    
    diff: -1 // ���ڼ�¼������������ĸ߶Ȳ�
  }
},
computed: {
  .. ..

  fixedTitle () { 
    if (this.scrollY > 0) { // ������ʧ
      return
    }

    // �˴� this.data �Ǹ�����������������
    return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
  }
},
watch: {
  scrollY (newY) {
    for (let i = 0; i < listHeight.length - 1; i++) {
      if (-newY >= height1 && -newY < height2) {
        this.currentIndex = i
        this.diff = height2 + newY // ��ȡ�߶Ȳ�
        return
    }
    }
  }

  diff (newVal) {
    // �߶Ȳ� - title �ĸ߶ȣ����һ����ֵ
    let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0 
    if (this.fixedTop === fixedTop) { // δ�ص�ʱ��������
      return
    }
    this.fixedTop = fixedTop // fixedTop ���ջ���� 0
    this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0` // �ı�ƫ����
  }
}
```

9. loading ����

> DOM
```
<scroll>
  .. ..

  <div v-show="!data.length" class="loading-container">
    <loading></loading>
  </div>
</scroll>
```

> �������
```
import Loading from 'base/loading/loading'

components: {
  Scroll,
  Loading
}
```

#### ��������ҳ

> DOM ���֣�����ο�Դ�� <br />
  path: src/components/singer-detail

> ·������

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

> listview �������
```
<li v-for="item of group.items"
    :key="item.id"
    @click="selectItem(item)"
    class="list-group-item"
>
  .. ..
</li>

methods: {
  selectItem (item) { // �� item ������Ϊ��һ������
    this.$emit('select', item)
  }

  .. ..
}
```

> singer ���
```
<template>
  <div class="singer">
    <list-view :data="singers" @select="selectSinger"></list-view>
    <router-view></router-view>
  </div>
</template>


methods: {
  selectSinger (singer) { // ���� item ��ȡ id
    this.$router.push({
      path: `/singer/${singer.id}`
    })
  },
  
  .. ..
}
```

#### Vuex ��ʼ��

1. Ŀ¼�ṹ

![Ŀ¼�ṹ](https://images.gitee.com/uploads/images/2018/0904/103734_361297fc_2123176.png "��Ļ��ͼ.png")

2. ����

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
    // ʹ�ó������ Mutation �¼�����
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
    // ���� Logger ���
    import createLogger from 'vuex/dist/logger'
    
    Vue.use(Vuex)
    // �ϸ�ģʽ
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

3. main.js ����

    ```
    import store from './store'
    
    new Vue({
      el: '#app',
      render: h => h(App),
      router,
      store
    })
    ```

4. singer ������ύ mutation
    ```
    import {mapMutations} from 'vuex'
    
    methods: {
      selectSinger (singer) {
        this.$router.push({
          path: `/singer/${singer.id}`
        })
        this.setSinger(singer) // �ύ Mutation
      },
      .. ..
      
      ...mapMutations({
        setSinger: 'SET_SINGER' // ��������
      })
    }
    ```

5. singer-detail ����н��� vuex ����� singer

    ```
    import {mapGetters} from 'vuex'
    export default {
      computed: {
        ...mapGetters([ // �� store �е� getter ӳ�䵽�ֲ���������
          'singer'
        ])
      },
      created () {
        console.log(this.singer)
      }
    }
    ```

#### JSONP ������������ץȡ

1. singer.js ����

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

2. singer-detail �������

```
methods: {
  _getSingerDetail () { // �� singer.id ��Ϊ��������
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

#### ���ݴ��� & Song ��ķ�װ

1. ���ݴ���

> path: src/common/js/song.js

```
export default class Song { // ��������
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

export function createSong (musicData) { // ��װ����������
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

function filterSinger (singer) { // ֻ��ȡ����
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

2. singer-detail ���ʹ��

```
import {createSong} from 'common/js/song'

data () {
  return {
    songs: []
  }
},
methods: {
  _getSingerDetail () {
    if (!this.singer.id) { // û�����ݣ����� singer ҳ��
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
  _normalizeSongs (list) { // ��������
    let ret = []
    list.forEach((item) => {
      let {musicData} = item // �⹹��ֵ
      if (musicData.songid && musicData.albummid) {
        ret.push(createSong(musicData))
      }
    })
    return ret
  }
},
```

#### music-list ��� - 1

1. DOM�ṹ

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

2. singer-detail ����������

```
<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage" :songs="songs"></music-list>
  </transition>
</template>
```

3. ������� - ���ݴ���

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


4. ���ղ���

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

#### song-list �������

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

2. ���� & ��������

```
props: { // �������������
  songs: {
    type: Array,
    default () {
      return {}
    }
  }
},
methods: {
  getDes (song) { // ES6 ģ���ַ���
    return `${song.singer}��${song.album}`
  }
}
```

#### music-list ��� - 2

1. DOM
> ����ο�Դ��

```
.. ..

<div class="bg-image" :style="bgStyle" ref="bgImage">
  <div class="filter" ref="filter"></div>
</div>

<!-- �ײ����ֲ㣬���Ԫ�ػ������ϱ������� -->
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

2. ʵ�ֻ���Ч��

```
import Scroll from 'base/scroll/scroll'
import SongList from 'base/song-list/song-list'

methods: {
  scroll (pos) { // ��ȡ�����߶�
    this.scrollY = pos.y
  }
},
components: {
  Scroll,
  SongList
},
watch: {
  scrollY (newY) {
    // this.minTranslateY ��һ�����߶ȵ���������
    let translateY = Math.max(this.minTranslateY, newY)
    let zIndex = 0 // ���ڶ��㣬�ڸǸ赥�б�
    let scale = 1
    let blur = 0

    // �赥�б�������
    this.$refs.layer.style['transform'] = `translate3d(0,${translateY}px,0)`
    this.$refs.layer.style['webkit-transform'] = `translate3d(0,${translateY}px,0)`

    // ����ͼƬ����Ч��
    const percent = Math.abs(newY / this.imageHeight)
    if (newY > 0) {
      scale = 1 + percent
      zIndex = 10
    } else { // ģ���������� ios
      blur = Math.min(20 * percent, 20)
    }
    this.$refs.filter.style['backdrop-filter'] = `blur(${blur}px)`
    this.$refs.filter.style['webkitBackdrop-filter'] = `blur(${blur}px)`
    this.$refs.bgImage.style['transform'] = `scale(${scale})`
    this.$refs.bgImage.style['webkitTransform'] = `scale(${scale})`
    
    // �赥���������ƶ�Ч��
    if (newY < this.minTranslateY) { // ���߶�ʱ��bgImage ����
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
created () { // scroll ��������� BScroll ����Ĳ���
  this.probeType = 3
  this.listenScroll = true
},
mounted () { // ����߶�
  this.imageHeight = this.$refs.bgImage.clientHeight // 263
  // �赥�б��������Ϸ��߶�
  this.minTranslateY = -this.imageHeight + RESERVED_HEIGHT // -263 + 40

  // �赥�б� top ֵ���㣬���ڶ�λ��ͼƬ�·�
  this.$refs.list.$el.style.top = `${this.imageHeight}px`
}
```

3. ��װ css3 ����

```
// ��ȡ���� css ����
let elementStyle = document.createElement('div').style

let vendor = (() => {
  let transformNames = { // �����������ں�
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    strandard: 'transform'
  }

  for (let key in transformNames) { // �������,������ ''
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  return false
})()

export function prefixStyle (style) {
  if (vendor === false) { // ������������������ں˶�������
    return false
  }

  if (vendor === 'strandard') {
    return style
  }
  
  // ǰ׺ + ����ĸ��дƴ�� ==> webkitTransform
  return vendor + style.charAt(0).toUpperCase + style.substr(1)
}
```

4. music-list �����ʹ��

```
import {prefixStyle} from 'common/js/dom'

// ���� css3 ����
const transform = prefixStyle('transform')
const backdrop = prefixStyle('backdrop-filter')

.. ..

this.$refs.filter.style[backdrop] = `blur(${blur}px)`
this.$refs.bgImage.style[transform] = `scale(${scale})`
```

5. ���ذ�ť & ������Ű�ť

```
<div class="back" @click="back">
  <i class="icon-back"></i>
</div>

.. ..

<div class="bg-image" :style="bgStyle" ref="bgImage">
  <div class="play-wrapper">
    <div class="play" v-show="songs.length" ref="playBtn">
      <i class="icon-play"></i>
      <span class="text">�������</span>
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
  if (newY < this.minTranslateY) { // �»��ƶ����Ϸ����أ�ʹ�þ��Զ�λʵ�ֵĲ���
    .. ..

    this.$refs.playBtn.style.display = 'none'
  } else {
    .. ..

    this.$refs.playBtn.style.display = ''
  }
}
```

6. loading �������ʹ��

> ע������ο�Դ��

```
<scroll>
  .. ..
  <div class="loading-container" v-show="!songs.length">
    <loading></loading>
  </div>
</scroll>
```

#### ������ Vuex �������

1. state.js

```
const state = {
  singer: {},

  // ���ֲ����������
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
// �ڻ�ȡ����ʱ���Դ������ݣ��䵱 computed ��ɫ

// ���ֲ����������
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
// ʹ�ó������ Mutation �¼�����

// ���ֲ����������
export const SET_PLAYING_STATE = 'SET_PLAYING_STATE'

export const SET_FULL_SCREEN = 'SET_FULL_SCREEN'

export const SET_PLAYLIST = 'SET_PLAYLIST'

export const SET_SEQUENCE_LIST = 'SET_SEQUENCE_LIST'

export const SET_PLAY_MODE = 'SET_PLAY_MODE'

export const SET_CURRENT_INDEX = 'SET_CURRENT_INDEX'
```

4. mutations.js

```
// ͬ���ı� player ����

// ���ֲ�������
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

// �첽������Ϊ�� �ύ�� mutation �ı� player ����
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
// ���廯
export const playMode = { // ���� player ����ģʽ
  sequence: 0,
  loop: 1,
  random: 2
}
```

#### Ӧ��

1. player ���

```
<template>
  <div class="player" v-show="playlist.length>0">
    <div class="normal-player" v-show="fullScreen">
      ������
    </div>
    <div class="mini-player" v-show="!fullScreen"></div>
  </div>
</template>
```

```
import {mapGetters} from 'vuex'
computed: {
  ...mapGetters([ // �� vuex �л�ȡ���ݣ����� player ״̬
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
    
    <!-- �� App.vue ��ʹ�ã���Ϊ player �����һ�������ĸ��� -->
    <player></player>
  </div>
</template>
```

3. song-list �������

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
  selectItem (item, index) { // �ɷ�һ���¼�
    this.$emit('select', item, index)
  }
}
```

4. music-list ���

```
<song-list :songs="songs" @select="selectItem"></song-list>
```

```
import {mapActions} from 'vuex'

methods: {
  .. ..
  
  selectItem (item, index) { // ���������
    this.selectPlay({ // �����ݴ��� vuex���൱�� store.commit
      list: this.songs,
      index
    })
  },
  ...mapActions([ // vuex �첽����
    'selectPlay'
  ])
}
```

5. ����Ӧ��

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

    // �� `this.SET_FULL_SCREEN()` ӳ��Ϊ `this.$store.commit('SET_FULL_SCREEN')`

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

#### player ����

1. ��� transition ��ǩ

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


2. create-keyframe-animaiton �����װ

```
npm i create-keyframe-animaiton --save // ^0.1.0
```

3. js���Ӻ������嶯��

```
import animations from 'create-keyframe-animation'
import {prefixStyle} from 'common/js/dom'

const transform = prefixStyle('transform')



enter (el, done) {
  const {x, y, scale} = this._getPosAndScale()

  let animation = { // ���嶯��
    0: { // Сͼ��λ��
      transform: `translate3d(${x}px, ${y}px, 0) scale(${scale})`
    },
    60: {
      transform: `translate3d(0, 0, 0) scale(1.1)`
    },
    100: {
      transform: `translate3d(0, 0, 0) scale(1)`
    }
  }

  animations.registerAnimation({ // ���������
    name: 'move',
    animation,
    presets: { // Ԥ��
      duration: 400,
      easing: 'linear'
    }
  })

  // done �ص�����
  animations.runAnimation(this.$refs.cdWrapper, 'move', done)
},
afterEnter () { // ���붯����������� animations
  animations.unregisterAnimation('move')
  this.$refs.cdWrapper.style.animation = ''
},
leave (el, done) { // �뿪������ʹ�� css3 ����
  this.$refs.cdWrapper.style.transition = 'all 0.4s'
  const {x, y, scale} = this._getPosAndScale()
  this.$refs.cdWrapper.style[transform] = `translate3d(${x}px, ${y}px, 0) scale(${scale})`
  this.$refs.cdWrapper.addEventListener('transitionend', done) // ��������������ִ�лص����� done
},
leaveEnter () { // �뿪������������� css3 ��ʽ
  this.$refs.cdWrapper.style.transition = ''
  this.$refs.cdWrapper.style[transform] = ''
},
_getPosAndScale () { // ��Բ��СԲ�仯
  const targetWidth = 40
  // mini-player ͼ��
  const paddingLeft = 40 // �����������������
  const paddingBottom = 30 // �����������ײ�����
  const paddingTop = 80 // normal-player ͼ����붥��λ��
  const width = window.innerWidth * 0.8 // css ��ʽ�ж��� nomal-plaer ��� 80%
  const scale = targetWidth / width // Сͼ�� / ��ͼ�꣬��ȡ���ű���
  // ƫ����
  const x = -(window.innerWidth / 2 - paddingLeft)
  const y = window.innerHeight - paddingTop - width / 2 - paddingBottom
  return {
    x,
    y,
    scale
  }
},
```

#### H5 audio ��ǩʵ�����ֲ���

1. ʹ�� audio ��ǩ

```
<audio ref="audio" :src="currentSong.url"></audio>
```

2. ���� audio ����ʵ�ֲ�������

```
watch: {
  currentSong () { // �� currentSong �ı�ʱ���Ŷ���
    // �첽���¶���
    // �ص������� DOM ������ɺ�ͻ����
    this.$nextTick(() => {
      this.$refs.audio.play()
    })
  }
}
```

3. ��ͣ & ���Ź���

```
methods: {
  togglePlaying () { // ����л� playing ״̬
    this.setPlayingState(!this.playing)
  },
  ...mapMutations({
    // �� `this.SET_FULL_SCREEN()` ӳ��Ϊ `this.$store.commit('SET_FULL_SCREEN')`
    setFullScreen: 'SET_FULL_SCREEN',

    setPlayingState: 'SET_PLAYING_STATE' // �ı䲥��״̬��ʵ����ͣ & ���Ź���
  })
},
computed: {
  playIcon () { // ���� playing �л�ͼ���״̬
    return this.playing ? 'icon-pause' : 'icon-play'
  },
  miniIcon () {
    return this.playing ? 'icon-pause-mini' : 'icon-play-mini'
  },
  cdCls () { // ͼ����ת����
    return this.playing ? 'play' : 'play pause'
  },
  ...mapGetters([
    .. ..

    'playing' // ��ȡ����״̬
  ])
},
watch: {
  currentSong () {
    this.$nextTick(() => {
      this.$refs.audio.play()
    })
  },
  playing (newPlaying) { // playing ״̬�ĸı䣬���� audio ����ʵ�ֹ���
    this.$nextTick(() => {
      const audio = this.$refs.audio
      newPlaying ? audio.play() : audio.pause() // H5 audio ʵ������
    })
  }
}
```

#### ǰ�����˹���

1. ����¼� prev & next

```
<i class="icon-prev" @click="prev"></i>

<i class="icon-next" @click="next"></i>
```

2. ʵ�� prev & next ����

```
...mapGetters([ // �� mapGetters �л�ȡ currentIndex
  .. ..

   'currentIndex'
])

...mapMutations({ // setCurrentIndex �����ı� currentIndex
  .. ..

  setCurrentIndex: 'SET_CURRENT_INDEX'
})

```

```
next () { // �ı� currentIndex ʵ���л�����
  let index = this.currentIndex + 1
  if (index === this.playlist.length) {
    index = 0
  }
  this.setCurrentIndex(index)
  if (!this.playing) { // ��� playing �ǹر�״̬
    this.togglePlaying() // �� playing �л�Ϊ����״̬
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

3. ���������٣�����Ż�

```
<!-- H5 ���÷��� -->
<audio ref="audio" :src="currentSong.url" @canplay="ready" @error="error"></audio>
```

```
data () {
  return { // ״̬����
    songReady: false
  }
},
methods: {
  togglePlaying () {
    if (!this.songReady) { // δ������������ִ��
      return
    }
    this.setPlayingState(!this.playing)
  },
  next () {
    if (!this.songReady) {
      return
    }
    
    .. ..
    
    this.songReady = false // ��ֹ������ε������
  },
  prev () {
    if (!this.songReady) {
      return
    }
    
    .. ..
    
    this.songReady = false
  },
  ready () { // ����������Բ�����Ƶ/��Ƶʱ
    this.songReady = true
  },
  error () {
    // ������Ƶ/��Ƶ�����ڼ䷢������ʱ
    // ������ songReady ����Ϊ true, ���޷��л�����
    this.songReady = true
  },
},
coumputed: {
  .. ..
  
  disableCls () { // ��ֹ����ʱ�ı���ʽ
    return this.songReady ? '' : 'disable'
  }
}
```

#### ʱ���ȡ�͸���

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
    // H5 ���÷�������ȡ����ʱ���
    this.currentTime = e.target.currentTime
  },
  format (interval) { // ��ʱ�����ʽ�� ==> 00:00
    // ����ȡ�� Math.floor() ���� | 0
    interval = interval | 0
    const minute = interval / 60 | 0
    const second = this._pad(interval % 60)
    return `${minute}:${second}`
  },
  _pad (num, n = 2) { // ����Ϊһλ��ʱ����0
    let len = num.toString().length
    while (len < 2) {
      num = '0' + num
      len++
    }
    return num
  }
}
```


#### Progress-bar���������

1. Progress-bar ������� DOM

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

2. player �����ע��ʹ��

```
<progress-bar :percent="percent"></progress-bar>
```

```
computed: {
  percent () { // ��ȡ����
    return this.currentTime / this.currentSong.duration
  }
}
```

3. ���ݽ��ȸı� css ��ʽ

```
import {prefixStyle} from 'common/js/dom'

const progressBtnWidth = 16
const transform = prefixStyle('transform')

export default {
  props: {
    percent: { // ���ո��������Ľ���ֵ
      type: Number,
      default: 0
    }
  },
  watch: {
    percent (newPercen) {
      if (newPercen >= 0) {
        // ������ - Բ�ΰ�ť, ��ȡ���ƫ����
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

4. ʵ���϶�����Ч��

```
<!-- ����϶������¼� -->
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
created () { // ��ͬ�ص�֮���ͨ��
  this.touch = {}
},
methods: {
  progressTouchStart (e) {
    this.touch.initiated = true // �������״̬
    this.touch.startX = e.touches[0].pageX // ��ȡ��꿪ʼλ��
    this.touch.left = this.$refs.progress.clientWidth // ��¼����
  },
  progressTouchMove (e) {
    if (!this.touch.initiated) { // δ���� progressTouchStart����������
      return
    }
    const deltaX = e.touches[0].pageX - this.touch.startX // ��ȡƫ����
    // ���ƫ���� & ��Сƫ�������� this.touch.left + deltaX
    const offsetWidth = Math.min(this.$refs.progressBar.clientWidth - progressBtnWidth, Math.max(0, this.touch.left + deltaX))
    this._offset(offsetWidth) // �ı��������λ��
  },
  progressTouchEnd () { // ����
    this.touch.initiated = false // ����ͨ��
    // ����ִ���ڼ����¼� percent���Դ˻���϶���λ��
    this._triggerPercent()
  },
  _offset (offsetWidth) { // ���ʹ�ã���װ�ɷ��������ٴ�����
    this.$refs.progress.style.width = `${offsetWidth}px`
    this.$refs.progressBtn.style.transform = `translate3d(${offsetWidth}px,0,0)`
    this.$refs.progressBtn.style[transform] = `translate3d(${offsetWidth}px,0,0)`
  },
  _triggerPercent () { // ���϶���Ľ��ȴ��ظ� ������ı����ֲ��Ž���
    // �������ܿ��
    const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
    // ��ȡ�µĽ���
    const percent = this.$refs.progress.clientWidth / barWidth
    this.$emit('percentChange', percent)
  }
},
watch: {
  percent (newPercen) {
    // ������϶�ʱ�����������������������
    if (newPercen >= 0 && !this.touch.initiated) {
      const barWidth = this.$refs.progressBar.clientWidth - progressBtnWidth
      const offsetWidth = newPercen * barWidth
      this._offset(offsetWidth)
    }
  }
}
```
  
> player �в����������ص�
```
// H5 audio �е� @timeupdate="updateTime" ��һ���ɶ�д����

onProgressBarChange (percent) { // �ı����ֽ��ȣ�ʵ�ָ���������ȷ����
  this.$refs.audio.currentTime = this.currentSong.duration * percent
  if (!this.playing) { // ��ͣ״̬�����Ÿ���
    this.togglePlaying()
  }
}
```

5. ���������λ�ò���Ч��

```
<div class="progress-bar" ref="progressBar" @click="progressClick">
  .. ..
</div>
```

```
progressClick (e) {
  this._offset(e.offsetX) // ��ȡ���λ�ã���ת������Ҫ����
  this._triggerPercent() // ���ظ���������޸�
}
```

#### progress-circle �������ʵ�֣�mini-player Բ�ν���

1. DOM �ṹ

```
<div class="progress-circle">
  <svg :width="radius" :height="radius" viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <circle class="progress-background" r="50" cx="50" cy="50" fill="transparent"/>
    
    <!-- stroke-dasharray ��������������ߵĵ㻮�ߵ�ͼ����ʽ����������ʵ�ߺ����ߵĿ�� -->
    <!-- stroke-dashoffset ��ָ����dashģʽ��·����ʼ�ľ��룬����ʵ�����߻��Ƶ�����·����ʼ�ľ��� -->
    
    <circle class="progress-bar" r="50" cx="50" cy="50" fill="transparent" :stroke-dasharray="dashArray" :stroke-dashoffset="dashOffset"/>
  </svg>
  <slot></slot>
</div>
```

2. player ���ʹ��

```
<progress-circle :radius="radius" :percent="percent">
  <i :class="miniIcon" class="icon-mini" @click.stop="togglePlaying"></i>
</progress-circle>
```

```
data () {
  return {
    .. ..
    
    // ��Ҫ�� data �ж��壬����ֱ��дֵ
    radius: 32
  }
},
```

3. ͨ������������ percent ���ȣ��ı� SVG �� circle ���ܳ���

```
data () {
  return {
    dashArray: Math.PI * 100
  }
},
props: {
  // ʹ���ⲿ��ֵ���� SVG �� circle �Ŀ��
  // ����ͨ���ⲿ�������ò�ͬ�ĸ߶ȣ�����չ��
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
    // 0 ��ʱ����� 100% ���ǣ��ܳ����, 1 ��ʱ����� 0% ���ǣ��ܳ�Ϊ0��
    return (1 - this.percent) * this.dashArray
  }
}
```

#### player �л�����ʵ��


1. �л�����ʵ��

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
  
  changeMode () { // �޸� vuex �е� mode
    const mode = (this.mode + 1) % 3
    this.setPlayMode(mode)
  }
}

computed: {
  .. ..
  
  iconMode () { // ͨ�� mode �ı���ʽ
    return this.mode === playMode.sequence ? 'icon-sequence' : this.mode === playMode.loop ? 'icon-loop' : 'icon-random'
  }
}
```

2. �������

```
> vuex ��ȡ
...mapGetters([ // ��ȡ�赥˳���б�
  .. ..

  'sequenceList'
])

...mapMutations({ // �ı�赥�б�
  .. ..
  
  setPlayList: 'SET_PLAYLIST'
})
```

> �������������<br />path: common/js/util.js

```
export function shuffle (arr) { // ����������ϴ�ƣ�������ظ�����
  for (let i = 0; i < arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  return arr
}

function getRandomInt (min, max) { // ��ȡ�����ڵ����һ������
  // + 1 ��Ŀ���ǿ���ȡ�� max
  return Math.floor(Math.random() * (max - min + 1) + min)
}
```

> ���ѡ���һ�׸�

```
changeMode () {
  const mode = (this.mode + 1) % 3
  this.setPlayMode(mode)
  
  let list = null // �洢ϴ�ƺ���б�˳��
  if (mode === playMode.random) { // ϴ��
    list = shuffle(this.sequenceList)
  } else {
    list = this.sequenceList
  }
  this.resetCurentIndex(list)
  this.setPlayList(list) // ����ϴ�ƺ�ĸ赥�б�
},
resetCurentIndex (list) { // �ı䵱ǰ������ϴ�ƺ�ĸ赥λ��
  let index = list.findIndex((item) => { // Ѱ�ҵ�ǰ�������±�
    return item.id === this.currentSong.id
  })
  this.setCurrentIndex(index)
},


watch: {
  currentSong (newSong, oldSong) {
    if (newSong.id === oldSong.id) { // ����û�б任��������
      return
    }
    
    .. ..
  }
  
  .. ..
}  
```

3. ������� -- �����б�ı�

> ���Ž������л���һ��

```
<!-- H5 ended �¼� -->
<audio ref="audio" :src="currentSong.url" @canplay="ready" @error="error" @timeupdate="updateTime" @ended="end"></audio>

```

```

end () {
  if (this.mode === playMode.loop) { // ����ѭ������
    this.loop()
  } else {
    this.next()
  }
},
loop () {
  // H5 audio ������ currentTime���ɶ�д
  this.$refs.audio.currentTime = 0
  this.$refs.audio.play() // audio ����currentTime ����Ҫ��ȡ play ��������
}

```

> �Ż�

```
progressClick (e) {
  // ��� progressBtn ��ʱ�� e.offset ��ȡ����
  // this._offset(e.offsetX)
  
  // ��ȡԪ��λ��
  const rect = this.$refs.progressBar.getBoundingClientRect()
  const offsetWidth = e.pageX - rect.left
  this._offset(offsetWidth)
  
  this._triggerPercent()
}
```

> music-list ������Ű�ť

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
  
  // �ڸ赥�б��У��������״̬
  // ϴ�ƺ�Ѱ����ѡ�� index
  if (state.mode === playMode.random) {
    let randomList = shuffle(list) // ϴ��
    commit(types.SET_PLAYLIST, randomList)
    index = findIndex(randomList, list[index])
  } else {
    commit(types.SET_PLAYLIST, list)
  }
  
  .. ..
}

export const randomPlay = function ({commit}, {list}) {
  commit(types.SET_PLAY_MODE, playMode.random) // ���ò���ģʽ
  commit(types.SET_SEQUENCE_LIST, list) // ����˳���б�
  let randomList = shuffle(list)
  commit(types.SET_PLAYLIST, randomList) // ����ϴ�ƺ�ĸ赥�б�
  commit(types.SET_CURRENT_INDEX, 0) // ϴ�ƺ�ĵ�һ�ײ���
  commit(types.SET_FULL_SCREEN, true) // ���Ŵ���
  commit(types.SET_PLAYING_STATE, true) // ����״̬
}
```

```
export function shuffle (arr) {
  let _arr = arr.slice() // ���ı�ԭ����
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }

  return _arr
}
```

#### �������ץȡ

> ���ݻ�ȡ<br />path: api/song

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
app.get('/api/lyric', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
    var ret = response.data
    if (typeof ret === 'string') { // ������ʽ�޸�����
      var reg = /^\w+\(({[^()]+})\)$/
      var matches = ret.match(reg)
      if (matches) {
        ret = JSON.parse(matches[1]) // ת�� json ��ʽ
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

// �� music-list ��ʹ�ã��������ݣ��� vuex �������ݴ���
export default class Song {
  constructor ({.. ..}) {
    .. ..
  }

  getLyric () { // ����һ�� Song ��������ȡ���
    getLyric(this.mid).then((res) => {
      if (res.retcode === ERR_OK) {
        this.lyric = res.lyric
        console.log(this.lyric)
      }
    })
  }
}
```

> player �����ʹ��
```
watch: {
  currentSong (newSong, oldSong) { // �ڵ�ȡ������ʱ���ȡ���
    .. ..
    
    this.$nextTick(() => {
      .. ..
      
      this.currentSong.getLyric()
    })
  },
  
  .. ..
}
```

#### ������ݽ���

1. base-64 ����

> install

```
npm i js-base64 --save // js-base64@2.4.9
```

> ����

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

2. ����

> install

```
npm i lyric-parser --save // lyric-parser@1.0.1
```

> ���ݴ���<br/>common/js/song

```
getLyric () {
  if (this.lyric) { // ��ε���
    return Promise.resolve((this.lyric))
  }
  return new Promise((resolve, reject) => { // ���� Promise ����
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

> player ���ʹ��

```
watch: {
  currentSong (newSong, oldSong) {
    .. ..
    
    this.$nextTick(() => {
      .. ..
      
      this.getLyric() // ����һ������
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

#### ��ʹ����б�ʵ��

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
    currentLineNum: 0 // ��ʸ���
  }
},
methods: {
  getLyric () {
    this.currentSong.getLyric().then((lyric) => {
      this.currentLyric = new Lyric(lyric, this.handleLyric) // ����ص�����
      if (this.playing) {
        this.currentLyric.play() // ��������
      }
    })
  },
  handleLyric ({lineNum, txt}) { // ����������
    this.currentLineNum = lineNum // ��ʸ���
    if (lineNum > 5) { // ���ʼ�վ�����ʾ
      let lineEl = this.$refs.lyricLine[lineNum - 5] // ����Ԫ��λ��
      this.$refs.lyricList.scrollToElement(lineEl, 1000) // ��ʹ���
    } else {
      this.$refs.lyricList.scrollTo(0, 0, 1000)
    }
  },
  
  .. ..
}
```

#### ������������һ���

> DOM

```
<div class="middle-l" ref="middleL">
  .. ..
</div>

<!-- �϶� -->
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


> �϶��¼�

```

created () { //  ����Ҫ getter & setter
  this.touch = {}
}



middleTouchStart (e) { // ��ʼλ��
  this.touch.initiated = true // �϶���ʼ
  const touch = e.touches[0]
  this.touch.startX = touch.pageX
  this.touch.startY = touch.pageY
},
middleTouchMove (e) {
  if (!this.touch.initiated) { // δ��ʼ
    return
  }
  const touch = e.touches[0]
  
  // ��ȡƫ����
  // ��������Ϊ��
  // ��������Ϊ��
  const deltaX = touch.pageX - this.touch.startX
  const deltaY = touch.pageY - this.touch.startY
  if (Math.abs(deltaY) > Math.abs(deltaX)) { // ���������������
    return
  }
  
  // cd ʱ����������
  // lyric ʱ����������
  const left = this.currentShow === 'cd' ? 0 : -window.innerWidth
  
  // ��ȡƫ��λ�ã����0, ��С��Ļ���Ϊ����
  const offsetWidth = Math.min(0, Math.max(-window.innerWidth, left + deltaX))
  // ƫ���������Ļ�ٷֱ�
  this.touch.percent = Math.abs(offsetWidth / window.innerWidth)
  
  // ƫ��λ��
  this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
  this.$refs.lyricList.$el.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
  
  // ��������ʱ��
  this.$refs.lyricList.$el.style[transitionDuration] = 0
  this.$refs.lyricList.$el.style.transitionDuration = 0
  
  // ��Ƭ͸����
  this.$refs.middleL.style.opacity = 1 - this.touch.percent
  
  // ��������ʱ��
  this.$refs.middleL.style[transitionDuration] = 0
  this.$refs.middleL.style.transitionDuration = 0
},
middleTouchEnd () { // ����
  let offsetWidth
  let opacity
  if (this.currentShow === 'cd') { // ��������
    if (this.touch.percent > 0.1) { // �϶�����
      offsetWidth = -window.innerWidth
      opacity = 0
      this.currentShow = 'lyric'
    } else {
      offsetWidth = 0
      opacity = 1
    }
  } else { // �������һ�
    if (this.touch.percent < 0.9) {
      offsetWidth = 0
      this.currentShow = 'cd'
      opacity = 1
    } else {
      offsetWidth = -window.innerWidth
      opacity = 0
    }
  }
  const time = 300 // ����ʱ��
  
  // ƫ��λ��
  this.$refs.lyricList.$el.style[transform] = `translate3d(${offsetWidth}px, 0, 0)`
  this.$refs.lyricList.$el.style.transform = `translate3d(${offsetWidth}px, 0, 0)`
  
  // ���ɶ���
  this.$refs.lyricList.$el.style[transitionDuration] = `${time}ms`
  this.$refs.lyricList.$el.style.transitionDuration = `${time}ms`
  
  // ��Ƭ͸����
  this.$refs.middleL.style.opacity = opacity
  
  // ���ɶ���
  this.$refs.middleL.style[transitionDuration] = `${time}ms`
  this.$refs.middleL.style.transitionDuration = `${time}ms`
  
  // ��������, ����ʼ������Ϊ false
  this.touch.initiated = false
}
```

#### �Ż� & ʣ�๦��ʵ��

1. �л���������ʳ�����������
```
watch: {
  currentSong (newSong, oldSong) {
    if (newSong === oldSong) {
      return
    }
    if (this.currentLyric) { // ���� currentLyric
      this.currentLyric.stop()
    }
    this.$nextTick(() => {
      .. ..
    })
  }
  
  .. ..
}
```

2. �л�����״̬
```
togglePlaying () {
  .. ..
  
  if (this.currentLyric) { // �л�����״̬
    this.currentLyric.togglePlay()
  }
}
```

3. ѭ������
```
loop () {
  this.$refs.audio.currentTime = 0
  this.$refs.audio.play()
  if (this.currentLyric) { // ��ʻص����
    this.currentLyric.seek(0)
  }
}
```

4. �϶�����ʱ��
```
onProgressBarChange (percent) {
  const currentTime = this.currentSong.duration * percent
  this.$refs.audio.currentTime = currentTime
  if (!this.playing) { // ��ͣ״̬�����Ÿ���
    this.togglePlaying()
  }
  
  
  if (this.currentLyric) { // �ı�������λ��
    this.currentLyric.seek(currentTime * 1000)
  }
}
```

5. ���

> DOM
```
<div class="middle-l" ref="middleL">
  .. ..
  
  <div class="playing-lyric-wrapper">
    <div class="playing-lyric">{{playingLyric}}</div>
  </div>
</div>
```

> ������
```
handleLyric ({lineNum, txt}) {
  .. ..
  
  this.playingLyric = txt
}
```

6. getLyric ��ȡ������
```
getLyric () {
  this.currentSong.getLyric().then((lyric) => {
    .. ..
  }).catch(() => { // �������
    this.currentLyric = null
    this.playingLyric = ''
    this.currentLineNum = 0
  })
}
```

7. ����ֻ��һ��ʱ
```
next () {
  if (!this.songReady) {
    return
  }
  if (this.playlist.length === 1) { // ����ѭ������
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
  if (this.playlist.length === 1) { // ����ѭ������
    this.loop()
  } else {
    .. ..
  }
  .. ..
}
```

8. ��̨�����л���ǰ̨��������
```
watch: {
  currentSong (newSong, oldSong) {
    .. ..
    
    setTimeout(() => { // ʹ���ӳٲ���
      this.$refs.audio.play()
      this.getLyric()
    }, 1000)
  }
  
  .. ..
```

#### �ײ�����������

1. ���� mixin
>ȫ��ע��һ�����룬Ӱ��ע��֮�����д�����ÿ�� Vue ʵ����������߿���ʹ�û��룬�����ע���Զ������Ϊ <br />path: common/js/mixin
```
import {mapGetters} from 'vuex'

export const playlistMixin = { // �������
  computed: {
    ...mapGetters([
      'playlist'
    ])
  },
  mounted () { // el ���´����� vm.$el �滻�������ص�ʵ����ȥ֮����øù���
    this.handlePlaylist(this.playlist)
  },
  activated () { // keep-alive �������ʱ����
    this.handlePlaylist(this.playlist)
  },
  watch: {
    playlist (newVal) {
      this.handlePlaylist(newVal)
    }
  },
  methods: { // ��������ͬ�ķ������򸲸� minxin �еķ���
    handlePlaylist () { // ���һ������ָ��
      throw new Error('component must implement handlePlaylist method')
    }
  }
}
```

2. music-list ���Ӧ�� mixin
```
import {playlistMixin} from 'common/js/mixin'

export default {
  mixins: [playlistMixin], // ʹ�� mixin
  
  .. ..
  
  methods: {
    handlePlaylist (playlist) {
      const bottom = playlist.length > 0 ? '60px' : '' // ���� bottom
      this.$refs.list.$el.style.bottom = bottom
      this.$refs.list.refresh() // scroll ���¼���߶�
    },
    
    .. ..
  }
  
  .. ..
}
```

3. singer ���Ӧ�� mixin
```
<template>
  <div class="singer" ref="singer">
    <list-view :data="singers" @select="selectSinger" ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>
```

> listview ��������ж��巽��
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
      this.$refs.list.refresh() // ��������÷�����ʵ�����¼���߶�
    },
    
    .. ..
  }
  
  .. ..
}
```

4. recommend ���Ӧ�� mixin
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


#### disc��� - �赥����ҳ

1. DOM
> ����ο�Դ��

2. vue-router ����Ŀ¼
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

3. Vuex ʵ��·������ͨѶ
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

4. recommend �����ת
```
<!-- ��ӵ���¼� -->
<li v-for="item of discList" :key="item.dissid" class="item" @click="selectItem(item)">
  .. ..
</li>
```

```
// ����·��
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

5. disc ��������봫�ݲ���
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

#### disc ����ץȡ

> ��Ƶ�е� jsonp ��������<br />qq ������ʹ�� json ����
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

> json ��������

```
// ��˴��� json ��������
app.get('/api/getSongList', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
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

> disc �����������
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

> disc ҳ���ݵĴ����Ӧ��
```
// ���ݲ�ͬ
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

#### rank ���
1. ��ȡ����

> jsonp ��������
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

2. ����Ӧ��

> DOM
```
<div class="rank" ref="rank">
  <scroll :data="topList" class="toplist" ref="topList">
    <ul>
      <li class="item" v-for="item in topList" :key="item.id">
        <div class="icon">
          <!-- ͼƬ�����أ�js ��������� -->
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

> scroll ������� & �ײ�����������
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

#### top-list ���

1. ����·��
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

2. Vuex ʵ��·������ͨѶ

> ״̬����
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

> rank �������ת & ���ݲ���
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

> top-list ��ȡ����
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

3. top-list ����ץȡ

> jsonp ��������
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

> ����Ӧ��
```
import {getMusicList} from 'api/rank'
import {createSong} from 'common/js/song'

computed: {
  .. ..
  
  bgImage () { // ʹ�� top-list ץȡ���ݵ�ͼƬ
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

4. �����е� song-list �����չ

> song-list ������ DOM
```
<div class="rank" v-show="rank">
  <span :class="getRankCls(index)">{{getRankText(index)}}</span>
</div>
```

```
props: { // ���� rank
  .. ..
  
  rank: {
    type: Boolean,
    default: false
  }
},
methods: {
  .. ..
  
  getRankCls (index) {
    if (index <= 2) { // ǰ�������� icon ��ʽ
      return `icon icon${index}`
    } else {
      return 'text'
    }
  },
  getRankText (index) {
    if (index > 2) { // ����һ������
      return index + 1
    }
  }
}
```
> music-list �����
```
<song-list :songs="songs" :rank="rank" @select="selectItem"></song-list>
```

```
props: { // ���� rank
  .. ..
  
  rank: {
    type: Boolean,
    default: false
  }
}
```

> top-list ���ʹ������
```
<music-list :title="title"
            :bgImage="bgImage"
            :songs="songs"
            :rank="rank"
></music-list>
```

```
data () { // ���� rank
  return {
    .. ..
    
    rank: true
  }
}
```


#### search-box �����������

```
<div class="search-box">
  <i class="icon-search"></i>
  <!-- ˫��� -->
  <input ref="query" v-model="query" class="box" :placeholder="placeholder"/>
  <i @click="clear" v-show="query" class="icon-dismiss"></i>
</div>
```

```
data () {
  return { // ����˫���
    query: ''
  }
},
props: {
  placeholder: {
    type: String,
    default: '������ʡ�����'
  }
},
methods: {
  clear () { // �������
    this.query = ''
  }
},
created () {
  this.$watch('query', (newQuery) => { // ���� quert ֵ�����ɷ�һ���¼�������
    this.$etmit('query', newQuery)
  })
}
```

#### search ���

1. ������������ץȡ
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

2. Ӧ��
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
    return { // ����ѭ��
      hotkey: []
    }
  },
  methods: {
    addQuery (query) { // ������� searchBox ��
      this.$refs.searchBox.setQuery(query)
    },
    _getHotKey () {
      getHotKey().then((res) => { // ��ȡ����
        if (res.code === ERR_OK) {
          this.hotkey = res.data.hotkey.splice(0, 10)
        }
      })
    }
  },
  components: {
    SearchBox
  },
  created () { // �������ں��� created �׶�ִ�к���
    this._getHotKey()
  }
}
```

> search-box ���巽�����ı� query
```
setQuery (query) {
  this.query = query
}
```

#### suggest ���

1. ��ȡ����

> ��˴���
```
app.get('/api/search', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})
```

> ʹ�� axios ������� json ���� 
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

2. ����Ӧ��
```
import {search} from 'api/search'
import {ERR_OK} from 'api/config'
import {filterSinger} from 'common/js/song'

// ���廯
const TYPE_SINGER = 'singer'

export default {
  data () {
    return {
      page: 1,
      result: []
    }
  },
  props: {
    query: { // search ������� query
      type: String,
      default: ''
    },
    showSinger: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    search () { // ���ݻ�ȡ
      search(this.query, this.page, this.showSinger).then((res) => {
        if (res.code === ERR_OK) {
          this.result = this._genResult(res.data)
        }
      })
    },
    getIconCls (item) { // ��̬�ı���ʽ
      if (item.type === TYPE_SINGER) {
        return 'icon-mine'
      } else {
        return 'icon-music'
      }
    },
    getDisplayName (item) { // ������ʾ���ݴ���
      if (item.type === TYPE_SINGER) {
        return item.singername
      } else {
        return `${item.songname} - ${filterSinger(item.singer)}`
      }
    },
    _genResult (data) { // ���ݴ���
      let ret = []
      if (data.zhida && data.zhida.singerid) {
        // type: TYPE_SINGER
        // �Զ������ͨ���⹹������ϲ������������Ƿ��и��� 
        ret.push({...data.zhida, ...{type: TYPE_SINGER}})
      }
      if (data.song) {
        ret = ret.concat(data.song.list)
      }
      return ret
    }
  },
  watch: {
    query () { // ���� query �ı仯
      this.search()
    }
  }
}
```

3. search ���ʹ��
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

4. �����Ż�
```
import {createSong} from 'common/js/song'


getDisplayName (item) {
  if (item.type === TYPE_SINGER) {
    .. ..
  } else { // �޸����ݼ�ֵ
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
_normalizeSongs (list) { // ʹ�� Song �࣬�������ݸ�ʽ��
  let ret = []
  list.forEach((musicData) => {
    if (musicData.songid && musicData.albumid) {
      ret.push(createSong(musicData))
    }
  })
  return ret
}
```


#### ��������

1. scroll ��չ 
```
props: {
  .. ..
  
  pullup: { // ����ˢ��
    type: Boolean,
    default: false
  }
}


methods: {
  _initScroll () {
    .. ..

    if (this.pullup) { // ����ˢ��
      this.scroll.on('scrollEnd', () => { // ����, scroll ����
        // scroll ����
        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
          this.$emit('scrollToEnd') // �ɷ��¼�
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
    
    pullup: true, // ���ݸ� scroll �ɷ��¼�
    hasMore: true
  }
},
methods: {
  search () {
    this.hasMore = true
    this.page = 1 // ��һ������ص���һҳ
    this.$refs.suggest.scrollTo(0, 0) // scroll ���ض���
    search(this.query, this.page, this.showSinger, perpage).then((res) => {
      if (res.code === ERR_OK) {
        this.result = this._genResult(res.data)
        this._checkMore(res.data)
      }
    })
  },
  searchMore () { // scrollToEnd �ɷ��¼�
      if (!this.hasMore) {
        return
      }
      this.page++ // ����ҳ��
      search(this.query, this.page, this.showSinger, perpage).then((res) => {
        if (res.code === ERR_OK) {
          this.result = this.result.concat(this._genResult(res.data)) // �ϲ���������
          this._checkMore(res.data)
        }
      })
    },
  _checkMore (data) { // ����Ƿ�������
    const song = data.song
    if (!song.list.length || (song.curnum + song.curpage * perpage) >= song.totalnum) {
      this.hasMore = false
    }
  },
}
```

#### suggest ��������ת

1. ������ת
```
<!-- �����ת�¼� -->
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
    const singer = new Singer({ // ����������
      id: item.singermid,
      name: item.singername
    })
    this.$router.push({ // ��תҳ��
      path: `/search/${singer.id}`
    })
    this.setSinger(singer) // �ı� vuex ʵ�����ݴ���
  }
},
...mapMutations({
  setSinger: 'SET_SINGER'
})
```

> router ��Ӷ���Ŀ¼
```
// search ����� router-view ��ǩ
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

2. ����������ת

> ͨ�� vuex action �첽��������
```
export const insertSong = function ({commit, state}, song) {
  // mutations �ⲿ�޸�
  // slice() �����ɴ����е������з���ѡ����Ԫ�أ�����ı�ԭ����
  let playlist = state.playlist.slice() // .slice() �����޸�
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex // ֵ

  // ��¼��ǰ����
  let currentSong = playlist[currentIndex]

  // ���ҵ�ǰ�б����Ƿ��д�����ĸ�������������
  let fpIndex = findIndex(playlist, song)
  // �ڵ�ǰ������������������ +1
  currentIndex++
  playlist.splice(currentIndex, 0, song)
  // ���ڴ����������ɾ��ԭλ�õĸ���
  if (fpIndex > -1) {
    // �����ǰ�������� > �б��е����
    if (currentIndex > fpIndex) {
      playlist.splice(fpIndex, 1)
      currentIndex--
    } else {
      playlist.splice(fpIndex + 1, 1)
    }
  }
  
  // �赥˳���б�
  // playlist �� sequenceList ������������״̬
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

  commit(types.SET_PLAYLIST, playlist) // �赥
  commit(types.SET_SEQUENCE_LIST, sequenceList)  // ����˳���б�
  commit(types.SET_CURRENT_INDEX, currentIndex)  // �ı䵱ǰ����λ��
  commit(types.SET_FULL_SCREEN, true)  // ���Ŵ���
  commit(types.SET_PLAYING_STATE, true)  // ����״̬
}
```

> suggest �е���
```
import {mapMutations, mapActions} from 'vuex'

selectItem (item) {
  if (item.type === TYPE_SINGER) {
  
    .. ..
    
  } else { // �������
    this.insertSong(item)
  }
},
...mapActions([
  'insertSong'
])
```

#### suggest ����Ż�

1. no-result ������޲�ѯ���
```
<div v-show="!hasMore && !result.length" class="no-result-wrapper">
  <no-result title="��Ǹ��������������"></no-result>
</div>
```

2. ����

> path: common/js/util.js
```
export function debounce (func, delay) {
  let timer
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // apply()���� ��������������һ���Ǻ������е�������this������һ���ǲ������顣
      func.apply(this, args)
    }, delay)
  }
}
```

> search-box ��������н���
```
created () {
  this.$watch('query', debounce((newQuery) => {
    this.$emit('query', newQuery)
  }, 200))
}
```

3. �ֻ��˻���ʧȥ���㣨���뷨���أ�

> scroll �����չ����
```
props: {
  .. ..
  
  beforeScroll: {  // ����ǰ�¼�
    type: Boolean,
    default: false
  }
}

methods: {
  .. ..
  
  if (this.beforeScroll) {  // �����ɷ��¼�
    // scroll ����
    this.scroll.on('beforeScrollStart', () => {
      this.$emit('beforeScroll')
    })
  }
}
```

> suggest ������� scroll����ȡ�¼�
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
  return {  // ���� scroll ���
    .. ..
    
    beforeScroll: true
  }
},
methods: {
  .. ..
  
  // ������ɷ��¼�
  listScroll () {  // search ���ִ��
    this.$emit('listScroll')
  }
}
```

> search-box ����������¼�
```
<!-- ref ���ö��� -->
<input ref="query" v-model="query" class="box" :placeholder="placeholder"/>


methods: {
  .. ..
  
  blur () {  // ʧȥ�����¼�
    this.$refs.query.blur()
  }
}
```

> search ���
```
<!-- suggest ִ�к��� -->
<suggest @listScroll="blurInput" :query="query"></suggest>


methods: {
  .. .. 

  blurInput () {  // ִ�� search-box �������
    this.$refs.searchBox.blur()
  }
}
```


#### ���湦��

> install storage
```
npm install good-storage --save
```

> suggest
```
selectItem (item) {  // ����б�
  .. ..

  this.$emit('select')  // �����ɷ��¼�
}
```

> search ���ִ�в���
```
<suggest @select="saveSearch"
         @listScroll="blurInput"
         :query="query">
</suggest>



import {mapActions} from 'vuex'


saveSearch () {  // ��������
  this.saveSearchHistory(this.query)
},
...mapActions([
  'saveSearchHistory'
])
```

> vuex ���ݴ���
```
// state.js
import {loadSearch} from 'common/js/cache'

const state = {
  // searchHistory: []
  searchHistory: loadSearch()  // �ӱ����л�ȡ����
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

> cache.js ���ݻ��浽����
```
// ���õ�������
import storage from 'good-storage'

// key���ڲ� __key__
const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 15

function insertArray (arr, val, compare, maxLen) {  // ���� query
  // compare �ص�����
  const index = arr.findIndex(compare)
  
  if (index === 0) {  // �ڵ�һλ��������
    return
  }
  if (index > 0) {  // ����ֵ��ɾ��
    arr.splice(index, 1)
  }

  arr.unshift(val)  // �����һλ
  if (maxLen && arr.length > maxLen) {  // ����Ƿ������󳤶�
    arr.pop()  // ɾ�����һλ
  }
}

export function saveSearch (query) {  // ���汾��
  // �������� good-storage
  // ��ȡ key ֵ���ڶ�������ΪĬ��ֵ
  let searches = storage.get(SEARCH_KEY, [])
  
  insertArray(searches, query, (item) => {  // �ص�����
    return item === query
  }, SEARCH_MAX_LENGTH)
  
  // ���ñ��ػ���
  storage.set(SEARCH_KEY, searches)
  // ���ػ���ֵ
  return searches
}

export function loadSearch () {  // ��ȡ���ػ���
  return storage.get(SEARCH_KEY, [])
}
```


#### ������ʷ

1. search-list ���
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
  selectItem (item) { // ��������������ɷ��¼��������߼�����
    this.$emit('select', item)
  },
  deleteOne (item) {
    this.$emit('delete', item)
  }
}
```

> search ���ʹ�� search-list ���
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
<!-- addQuery ʵ�ֵ���¼� -->
<search-list @select="addQuery" :searches="searchHistory"></search-list>
```

2. ɾ������

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

> action.js �ж����¼�
```
import {saveSearch, deletSearch, clearSearch} from 'common/js/cache'


export const deleteSearchHistory = function ({commit}, query) {
  commit(types.SET_SEARCH_HISTORY, deletSearch(query))
}

export const clearSearchHistory = function ({commit}) {
  commit(types.SET_SEARCH_HISTORY, clearSearch())
}
```

> cache.js ɾ�����ػ���
```
function deleteFromArray (arr, compare) {  // ɾ������
  const index = arr.findIndex(compare)
  if (index > -1) {
    arr.splice(index, 1)
  }
}


export function deletSearch (query) {
  let searches = storage.get(SEARCH_KEY, [])  // ��ȡ����
  deleteFromArray(searches, (item) => { // �ص�����������λ��
    return item === query
  })
  
  // ���汾�ػ���
  storage.set(SEARCH_KEY, searches)
  return searches
}

// ���
export function clearSearch () {  // storage ����
  storage.remove(SEARCH_KEY)
  return []
}
```

#### confrim �������

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
  props: {  // �ⲿ�����İ�
    text: {
      type: String,
      default: ''
    },
    confirmBtnText: {
      type: String,
      default: 'ȷ��'
    },
    cancelBtnText: {
      type: String,
      default: 'ȡ��'
    }
  },
  data () {
    return {  // ���� confirm ��ʾ
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
    cancel () {  // ����ȡ�������������ɷ��¼�
      this.hide()
      this.$emit('cancel')
    },
    confirm () {  // ����ȷ�ϲ����������ɷ��¼�
      this.hide()
      this.$emit('confirm')
    }
  }
}
```

> search ���ʹ�� confirm ���
```
<span class="clear" @click="showConfirm">
  .. ..
</span>


<confirm ref="comfirm"
         @confirm="clearSearchHistory"
         confirmBtnText="���"
         text="�Ƿ��������������ʷ"
></confirm>
```

```
import Confirm from 'base/confirm/confirm'


showConfirm () {  // ���� confirm �������
  this.$refs.comfirm.show()
},
```

#### search �����Ż�

1. ������ʷ����
```
<!-- scroll ֻ���ݵ�һ�� div ��������Ҫ�Ӹ������� -->
<scroll class="shortcut" :data="shortcut" ref="shortcut">
  <div>
  
    .. ..
  
  </div>
</scroll>
```

```
computed: {
  // scroll ������� data ����
  shortcut () {  // ���� hotkey & searchHistory �ı����¼��� scorll
    return this.hotkey.concat(this.searchHistory)
  },
  
  .. ..
},
watch: {
  query (newQuery) {
    if (!newQuery) {  // û���µ����ݣ����¼��� scroll
      setTimeout(() => {  // ���¼��� scroll
        this.$refs.shortcut.refresh()
      }, 20)
    }
  }
},
```

2. �߶�����Ӧ
```
import {playlistMixin} from 'common/js/mixin'

mixins: [playlistMixin],
methods: {
  handlePlaylist (playlist) {
    const bottom = playlist.length > 0 ? '60px' : ''
    
    // ���¼��� scroll �߶�
    this.$refs.shortcutWrapper.style.bottom = bottom
    this.$refs.shortcut.refresh()

    this.$refs.searchResult.style.bottom = bottom
    this.$refs.suggest.refresh()  // suggest ����
  },
  
  .. ..
}
```

> suggest �������
```
refresh () {  // scroll ���¼���߶�
  this.$refs.suggest.refresh()
}
```


#### playlist ���

1. DOM�ṹ
> ����ο�Դ��

2. playlist �����ʾ������

> playlist ���巽��

```
<div class="playlist" v-show="showFlag" @click="hide">
  <!-- ��ֹð���¼� -->
  <div class="list-wrapper" @click.stop>
  
    .. ..
    
    <div class="list-close" @click="hide">
      <span>�ر�</span>
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

> player ����ʾ playlist

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

3. �б���Ⱦ
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
    setTimeout(() => { // ��Ⱦ�������¼��� scroll
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
    if (this.model === playMode.random) { // �������
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

4. ��ǰ����ʼ���ڶ���

> ����״̬
```
selectItem (item, index) {
  .. ..
  
  // ��ͣ����ʱ���ı䲥��״̬
  this.setPlayingState(true)
},
...mapMutations({
  .. ..
  setPlayingState: 'SET_PLAYING_STATE'
})
```

> player �������ֹ���ð��
```
<!-- ��ֹð�� -->
<div class="control" @click.stop="showPlaylist">
  .. ..
</div>
```

> ��ǰ���Ÿ���ʼ���ڶ���

```
show () {
  this.showFlag = true
  setTimeout(() => {
    this.$refs.listContent.refresh()
    
    // ����ʾ�ĸ赥�б�ʱ����ǰ���Ÿ����ڶ���
    this.scrollToCurrent(this.currentSong)
  }, 20)
},
scrollToCurrent (current) {
  // ����˳���б���Ѱ�ң���ǰ���Ÿ���
  const index = this.sequenceList.findIndex((song) => {
    return current.id === song.id
  })
  
  // scroll ����
  this.$refs.listContent.scrollToElement(this.$refs.listItem[index], 300)
},


watch: {
  currentSong (newSong, oldSong) { // ���� currentSong �ĸı�
    if (!this.showFlag || newSong.id === oldSong.id) {
      return
    }
    
    this.scrollToCurrent(newSong)
  }
}
```

5. ɾ�� playlist ����

> action.js �ж��巽��
```
export const deleteSong = function ({commit, state}, song) {
  // ��ȡ����
  let playlist = state.playlist.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  
  // �ҵ���������ֵ��ɾ��
  let pIndex = findIndex(playlist, song)
  playlist.splice(pIndex, 1)
  let sIndex = findIndex(sequenceList, song)
  sIndex.splice(sIndex, 1)

  // ɾ���ĸ����ڵ�ǰ����״̬��ǰ�� || ɾ�����һ�׸���
  if (currentIndex > pIndex || currentIndex === playlist.length) {
    currentIndex--
  }
  
  // �ύ�޸ĺ������
  commit(types.SET_PLAYLIST, playlist)
  commit(types.SET_SEQUENCE_LIST, sequenceList)
  commit(types.SET_CURRENT_INDEX, currentIndex)
  
  // �б�Ϊ��
  const playingState = playlist.length > 0
  commit(types.SET_PLAYING_STATE, playingState)

  // if (!playlist.length) {
  //   commit(types.SET_PLAYING_STATE, false)
  // } else {
  //   commit(types.SET_PLAYING_STATE, true)
  // }
}
```

> deletOne ����

```
import {mapGetters, mapMutations, mapActions} from 'vuex'


deleteOne (item) {
  this.deleteSong(item) // vuex �е� action ����

  if (!this.playlist.length) { // playlist Ϊ�գ�����
    this.hide()
  }
},
...mapActions([
  'deleteSong'
])
```

> player ����м��� currentSong
```
watch: {
  currentSong (newSong, oldSong) {
    if (!newSong.id) { // û�и���
      return
    }
    
    .. ..
  }
  
  .. ..
} 
```

> delete ����
```
<transition-group name="list" tag="ul">
  .. ..
</transition-group>
```

6. ��� playlist

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


<confirm ref="confirm" @confirm="confirmClear" title="�Ƿ���ղ����б�" confirmBtnText="���"></confirm>
```

```
import Confirm from 'base/confirm/confirm'


showConfirm () {
  this.$refs.confirm.show()
},
confirmClear () { // ����б�����
  this.deleteSongList()
  this.hide()
},
...mapActions([
  .. ..
  
  'deleteSongList'
])
```

> confirm �����ֹð��
```
<div class="confirm" v-show="showFlag" @click.stop>
  .. ..
</div>
```

#### playerMixin

> mixin.js <br /> ɾ�� player & playlist �е��ظ�����
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

#### add-song ���

1. ��ʾ add-song ���
```
<transition name="slide">
  <!-- ��ֹð�� -->
  <div class="add-song" v-show="showFlag" @click.stop>
    <div class="header">
      <h1 class="title">��Ӹ������б�</h1>
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

> playlist ������� add-song ���
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

2. searchMixin ʵ��

> minxin.js<br />ɾ���ظ�����
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
  <search-box @query="onQueryChange" placeholder="��������" ref="searchBox"></search-box>
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
    selectSuggest () { // mixin �еķ���
      this.saveSearch()
    }
  },
  components: {
    SearchBox,
    Suggest
  }
}
```

#### switches ���

1. switches ���ʵ��
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
  switches: { // ��������
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
  switchItem (index) { // �����ɷ��¼�
    this.$emit('switch', index)
  }
}
```

2. add-song �������

```
<switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
```

```
data () {
  return {
    .. ..
    
    switches: [
      {name: '�������'},
      {name: '������ʷ'}
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

#### ������ʷ����

1. vuex ��������
```
// state.js
import {loadSearch, loadPlay} from 'common/js/cache'

// playHistory: []
// ������ʷ�������ȡ
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

2. cache.js ����
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

3. player ������ñ��ػ���
```
import {mapGetters, mapMutations, mapActions} from 'vuex'


ready () { // ���ݼ���ʱ��ȡ���ػ���
  this.songReady = true
  this.savePlayHistory(this.currentSong)
},
...mapActions([
  'savePlayHistory'
])
```

4. add-song ���
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

#### add-song ���ʣ�๦��

1. �������
```
<song-list :songs="playHistory" @select="selectSong"></song-list>
```

```
import {mapGetters, mapActions} from 'vuex'
import Song from 'common/js/song'

selectSong (song, index) {
  if (index !== 0) {
    // song ��һ�����󣬲����� Song ʵ��
    // ת���� Song ʵ��
    this.insertSong(new Song(song))
  }
},
...mapActions([
  'insertSong'
])
```

2. searchMixin ʵ��
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

3. ������ʷ
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
  setTimeout(() => { // ���¼��� scroll �߶�
    if (this.currentIndex === 0) {
      this.$refs.songList.refresh()
    } else {
      this.$refs.searchList.refresh()
    }
  }, 20)
},
```

> search-list ���ʹ�� transition-group
```
<div class="search-list" v-show="searches.length">
  <transition-group name="list" tag="ul">
    .. ..
  </transition-group>
</div>
```

#### top-tip ���
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
  delay: { // �ӳ�ʱ��
    type: Number,
    default: 2000
  }
},
methods: {
  show () {
    this.showFlag = true
    clearInterval(this.timer)
    this.timer = setTimeout(() => { // ��ʱ�����ر� top-tip
      this.hide()
    }, this.delay)
  },
  hide () {
    this.showFlag = false
  }
}
```

> add-song ���ʹ�� top-tip ���
```
<top-tip ref="topTip">
  <div class="tip-title">
    <i class="icon-ok"></i>
    <span class="text">1�׸����Ѿ���ӵ����Ŷ���</span>
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
showTip () { // ��ʾ top-tip
  this.$refs.topTip.show()
},
```

#### �����Ż�

1. scroll �����չ
```
props: {
  refreshDelay: { // �����ӳ�ʱ��
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

2. playlist ����а��� transition ������ scroll ���ӳ�
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

3. add-song & search ���

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

> ����������� mixin
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

#### user-center ���

1. DOM �ṹ
> ����ο�Դ��

2. m-header �����ת user-center
```
<router-link to="/user" class="mine" tag="div">
  <i class="icon-mine"></i>
</router-link>
```

> router ����
```
import UserCenter from 'components/user-center/user-center'

{
  path: '/user',
  component: UserCenter
}
```

3. ʹ�� switches ���
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
        {name: '��ϲ����'},
        {name: '�������'}
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

#### �ղع���ʵ��

1. vuex ���ݹ���
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

3. mixin ����ʵ�� favorite ���ݹ���
```
// playerMixin


...mapGetters([
  .. ..
  
  'favoriteList'
])


getFavoriteIcon (song) { // ��̬�ı���ʽ
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
isFavorite (song) { // �����Ƿ��ղ�
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

4. ʵ���ղع���
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

#### user-center �����Ⱦ DOM
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
  
  selectSong (song) { // ��Ӹ�������
    // song �� object, ���� Song ʵ��
    // �� song ת��Ϊ Song ʵ��
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

#### user-center �����Ż�

1. back �����¼�
```
<div class="back" @click="back">
  .. ..
</div>


back () {
  this.$router.back()
},
```

2. �������
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
  list = list.map((song) => { // song ת���� Song ʵ��
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

3. �������߶�����Ӧ
```
import {playlistMixin} from 'common/js/mixin'

mixins: [playlistMixin]

handlePlaylist (playlist) {
  const bottom = playlist.length > 0 ? '60px' : ''
  this.$refs.listWrapper.style.bottom = bottom
  
  // �ж�����
  this.$refs.favoriteList && this.$refs.favoriteList.refresh()
  this.$refs.playList && this.$refs.playList.refresh()
},
```

4. no-result �����ʹ��
```
<div class="no-result-wrapper" v-show="noResult">
  <no-result :title="noResultDesc"></no-result>
</div>
```

```
computed: {
  noResult () { // ��ʾ no-result
    if (this.currentIndex === 0) {
      return !this.favoriteList.length
    } else {
      return !this.playHistory.length
    }
  },
  noResultDesc () { // no-result ����� title
    if (this.currentIndex === 0) {
      return '�����ղظ���'
    } else {
      return '�㻹û����������'
    }
  },
  
  .. ..
},
```

#### �����л����� �Ż�
```
<!-- canplay �� play ������ -->
<audio ... @play="ready"></audio>
```

```
watch: {
  currentSong (newSong, oldSong) {
    .. ..
    
    // ��ն�ʱ��
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
    if (this.currentSong.lyric !== lyric) { // ��ǰ�������ȡ�Ĳ�ƥ��
      return
    }

    .. ..
  }).catch(() => { // �������
    .. ..
  })
}
```

```
next () {
  .. ..
  // ���رյ����ť
  if (this.playlist.length === 1) { // ����ֻ��һ��ʱ
    this.loop()
    return
  } else {
    .. ..
  }
  this.songReady = false
},
prev () {
  .. ..
  
  if (this.playlist.length === 1) { // ����ֻ��һ��ʱ
    this.loop()
    return
  } else {
    .. ..
  }
  this.songReady = false
}
```

#### ������

1. ������
```
npm run bulid

// ʵ��ִ��
package.json �ļ��е� scripts.bulid
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

2. express ��������

> �½� prod.server.js �ļ�
```

// webpack.dev.conf.js �и���

// ��˴���
const axios = require('axios')
const express = require('express')
const app = express() // ����server
const apiRoutes = express.Router()
app.use('/api', apiRoutes) // ͨ��·����������

app.get('/api/getDiscList', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

app.get('/api/lyric', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
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

app.get('/api/getSongList', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

app.get('/api/search', (req, res) => { // res ����ֵ
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'

  axios.get(url, {
    headers: { // ���� http �����޸�����ͷ -- ��ƭ�ֶ�
      referer: 'https://c.y.qq.com/',
      host: 'c.y.qq.com'
    },
    params: req.query
  }).then((response) => { // response ����ֵ
    res.json(response.data)
  }).catch((e) => {
    console.log('axios err' + e)
  })
})

// �˿�
app.use(express.static('./dist'))

// ��������
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

> config/index.js ������һ�� port �˿�
```
build: {
  // Template for index.html
  index: path.resolve(__dirname, '../dist/index.html'),
  port: 9000,
}
```

> ִ��
```
node prod.server.js

// ִ�����, ҳ���е� js �����ļ����б仯
```

> js ������ļ�˵��
```
// ά����̬��Դ�嵥�ļ�
manifest.2ae2e69a05c33dfc65f8.js

// node_modules
vendor.2323179061594fc3ceb7.js

// Դ��
app.cf7a3b3fbb71033fab11.js
```

#### ·��������

> ����鿴 Vue Router �ٷ��ĵ�
```
// import Recommend from 'components/recommend/recommend'
// import Singer from 'components/singer/singer'
// import Rank from 'components/rank/rank'
// import Search from 'components/search/search'
// import SingerDetail from 'components/singer-detail/singer-detail'
// import Disc from 'components/disc/disc'
// import TopList from 'components/top-list/top-list'
// import UserCenter from 'components/user-center/user-center'

// ��Ƶ�е� ·��������
// const Recommend = (resolve) => {
//   import('components/recommend/recommend').then((module) => {
//     resolve(module)
//   })
// }


// ·��������
const Recommend = () => import('components/recommend/recommend')
const Singer = () => import('components/singer/singer')
const Rank = () => import('components/rank/rank')
const Search = () => import('components/search/search')
const SingerDetail = () => import('components/singer-detail/singer-detail')
const Disc = () => import('components/disc/disc')
const TopList = () => import('components/top-list/top-list')
const UserCenter = () => import('components/user-center/user-center')
```

> ���±�����
```
npm run build
```

#### vConsole �ֻ��˵���

> install
```
npm install vconsole --save dev
```

> main.js �����ã�����ʱע�ʹ˶δ���
```
// ������ʹ�ã���Ҫ��ע��
/* eslint-disable no-unused-vars */
import vConsole from 'vconsole'

console.log('test')
```

#### Charles �ֻ���ץ������
