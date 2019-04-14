### **Vuejs����ȥ�Ķ���**

---

### ��Ҫ˵�� -_-||

- ��Ŀ��ʼ���� 2018-08-22���������� 2018-08-28
- ������������ʱ���ǵ���npm installһ�£���������������Ҫ��װ�µ�������
- ������������ʱ���л���֧�󣬼ǵ�git pull(ֻpull��֧�ڵ��ǲ�����)
- ����Ŀ����������·�֧����,master���ɺϲ����·�֧�ĵĴ���
- ��������SublimeText3 (��һ�����½ǵ�Tab��������)
- **MarkDown��ʹ�� > (>��ɶҲ��д)��ʵ��һ����ʽ�ָ�����(�����������)**--�ƺ���������(ʹ��3���ո���Էֿ��������ӵ�����,��ʱ����ʹ��>)
- **MarkDown�к���������б��²ſ�������**
- ʹ��keep-alive����󣬿��ܵ���F5���ܼ������µĴ��룬ֱ������dev������keep-alive��exclude���Իᵼ��ҳ���в��ٻص�activated ()��������ĵ����ڵ�9���˵��

---
***TODO NEXT***  ^_^

- ��ҳbannerͼ�µ�ͼ��˵���С��iPhone����padding���벻����������
- ��ҳ�������ѡ��ҳ��ʱ��ҳ���������ת������Ч

---

#### Ч����ʾ

 <img src="https://jiangjiesheng.gitee.io/qu-na-er/show/home.jpg" width="320" hegiht="571" align=center style='margin:0 auto;
    display: block;' />

#### �����ʼ� #####

##### һ������ָ��

1.
    >git�ϲ������ɣ�

    ```
    git checkout master
    git merge [��֧����]
    git push
    ```

    >�����µķ�֧���л����·�֧

    ```
    git checkout -b -newbranch  [<start_point>]

    b����branch����˼
    newbranch ���·�֧������
    ���û��ָ���ύ�㣨start_point����Ĭ�ϴ�HEADָ����ύ������֧��
    ```

    >git branch <br />
     git�ĵ�  https://git-scm.com/book/zh/v2

    ```
    git branch <branchname> [<start_point>]

    �����������г������Ѿ����ڵķ�֧�������ڵ�ǰ��֧��ǰ����"*"���
    ```

##### �������л���

1.
    ```
    node -v ==> v8.11.3
    npm -v ==> 5.6.0
    #ʹ���Ա�����
    npm config set registry https://registry.npm.taobao.org
    [npm install -g cnpm --registry=https://registry.npm.taobao.org]
    ```

##### ������Ŀ��ʼ��

1. �����вֿ��¡
    ```
    $ git clone git@gitee.com:oschina/git-osc.git
    ```

2. ����/���SSH��Կ
    >���� sshkey:
    ```
    $ ssh-keygen -t rsa -C "xxxxx@xxxxx.com"
    ```

    >��ȡ����� public key
    ```
    $ cat ~/.ssh/id_rsa.pub
    ```

3. ��װvue
    ```
    npm install vue@^2.5.2 --save
    ```
4. ʹ�ý��ּ������й���vue-cli����vue��Ŀ
    >����ȳ�ʼ����Ŀ���ٴ���һЩ��¼���ļ�

    ```
    #ȫ�ְ�װ vue-cli
    npm install --global vue-cli
    #����һ������ webpack ģ�������Ŀ
    vue init webpack Tarvel  (Tarvel => ��Ŀ�ļ����λ��)

    #������Ŀ��Ϣ
    >> Project name Tarvel
    >> Project description A Vue.js project
    >> Author
    >> Vue build (Use arrow keys)
    >> Vue build standalone
    >> Install vue-router? Yes
    >> Use ESLint to lint your code? Yes
    >> Pick an ESLint preset Standard
    >> Set up unit tests No
    >> Setup e2e tests with Nightwatch? No
    >> Should we run `npm install` for you after the project has been created? (recommended) npm

       vue-cli �� Generated "Tarvel".

    # Installing project dependencies ...
    # ========================

    #��װ����
    cd Tarvel
    (�����ǵ�������һ���ļ��в���ʼ���ģ����԰���Ŀ���Ƶ�ԭʼ�Ĵ�������Ŀ��)
    npm install
    npm run dev
    ```
5. git�ύ
    >���ļ���ӵ�Git���ݴ���
    ```
    $ git add "readme.txt"
    #ע��ʹ��git add -A��git add . �����ύ��ǰ�ֿ�����иĶ���
    ```
    >��Git���ݴ����ύ�汾���ֿ⣬����-m��Ϊ�����ύ�ı�ע��Ϣ
    ```
    $ git commit -m "1.0.0"
    ```
    >�����ص�Git�ֿ���Ϣ�����ϴ���������
    ```
    $ git push
    #ע��ǿ���ύ���� git push -f

    #����

    $ git push https://gitee.com/***/test.git
    ```


##### �ġ���ʶ��Ŀ�ṹ�������Ҫ�ļ�

1. les/reset.css,����main.js������

    ������Ŀʹ�õĳߴ絥λ��rem���������html��font-size: 50px�Ĵ�С�����õġ�
    ```
    1rem = html font-size = 50px
    ```
    ��
    ```
    43px = 0.86rem
    ```

    ```
    // ͳһ��ͬ�������Ĭ����ʽ
    import './assets/styles/reset.css'
    ```
2. 1���ر߿�
    > ������ʾһ�����ƴ�ֱ�ָ��ߵı߿�Ч��,�ļ�Ϊsrc/assets/styles/border.css,����main.js������
    ```
    // 1���ر߿�������
    import './assets/styles/border.css'
    ```
3. 300�������ӳ�(�ڲ����������)
    > ��װ����main.js�����벢��ʼ��
    ```
    npm install fastclick --save
    ```
    ```
    import fastclick from 'fastclick'
    // 300�������ӳ�
    fastclick.attach(document.body)
    ```
4. iconfontע��
    > ʹ�� gitHub ���� 143****938@qq.com

    �˵� >> ͼ����� >> �ҵ���Ŀ

    ***���غ�ע���޸�iconfont.css�е�����·��***

##### �塢ȥ�Ķ�����ҳ
> �ο�ҳ�� http://piao.qunar.com/touch/
1. Headerͷ

        ���Ȱ�װcss���
    ```
     npm install stylus --save
     npm install stylus-loader --save
    ```
    stylusʹ��
    ```
    //scoped �Ծֲ���ʽ��Ч
    <style lang="stylus" scoped>
      .header //��Ҫ��ð��
        display: flex
        height: .86rem
        .header-left //��Ҫ��ð��
          width: .64rem
          float: left
        .header-input //��Ҫ��ð��
          flex: 1
        .header-right //��Ҫ��ð��
          width: 1.24rem
          float: right
    </style>
    ```
    scoped����ʽ��͸
    ```
    <style lang="stylus" scoped>
      .wrapper >>> .swiper-pagination-bullet-active
         background: red !important
    </style>
    ```
    style������ע��

     @��ʾsrcĿ¼����

    **����������build/webpack.base.conf.js�е�alias�ڵ�**

    ע����styleʹ��Ҫ����~
    ```
    @import '~@/assets/styles/varibles.styl'
    ```

2. ��ҳ�ֲ�ͼ

    >���������ϴ�����֧index-swiper����֧�������ǰһ����֧��Ȼ��ͬ�����ط�֧
    ```
    git pull
    ```
    >���л�����֧
    ```
    git checkout index-swiper
    ```

    https://www.npmjs.com/package/vue-awesome-swiper

    https://github.com/surmon-china/vue-awesome-swiper

    https://blog.csdn.net/mrliber/article/details/78819191 **[���òο� Swiper����]**

    ��װ

    ```
    npm install vue-awesome-swiper@2.6.7 --save
    ```

    > html�ϵ�ð���ǰ����ԣ�@�ǰ��¼�
    > ������е�������Ҫ��data() �ж��岢���ض���

    **��������**:F12 > Network > ѡ��3G����

    �����ֲ�ͼ��ռλ
    ```
     .wrapper
        overflow: hidden
        width: 100%
        height:0
        padding-bottom: 25%
    ```
    or, ���ǿ����м�������
    ```
     .wrapper
        width: 100%
        height:25vw
    ```
     **push�����**�л���master���ɣ����ϲ�index-swiper��֧����
    ```
    git checkout master
    git merge orgin/index-swiper
    git push
    ```
3. ��ҳͼ��˵����

    ������֧index-icons-3

    ���û���ռλЧ��
    ```
    <template>
      <div class="icons">
        <div class="icon">
        </div>
      </div>
    </template>

    <script>

    export default {
      name: 'HomeIcons'
    }
    </script>

    <style lang="stylus" scoped>
      .icons
        overflow: hidden
        height: 0
        padding-bottom: 50%
        background: green
        .icon
          float:left
          width:25%
          padding-bottom: 25%
          background: red
    </style>

    ```
    ��װ **vue dev tools** Chrome��������,����鿴Vue�Ľṹ

    Vuejs��**��������**
    ```
    computed: { // ��������
        pages () {
          const pages = []
          this.iconList.forEach((item, index) => {
            const page = Math.floor(index / 8)
            if (!pages[page]) {
              pages[page] = []
            }
            pages[page].push(item)
          })
          return pages
        }
    }
    ```
    stylus����ʽ��װ(�൱�ڷ���)

    ```
    // src/assets/styles/mixins.styl

    ellipsis()
      overflow: hidden
      white-space: nowrap
      text-overflow: ellipsis
    // Ӧ��
    @import '~@/assets/styles/mixins.styl'
    .icon-desc
      height: 0.44rem
      line-height: 0.44rem
      text-align: center
      ellipsis()
    ```

4. ��ҳ�Ƽ����

    ������֧index-recommend-4

    **flex**�ؼ�����
    ```
    //�൱�ڰ�׿�е�layout_weight:1 ,���ڳſ�ʣ��ռ䲿��
    flex:1
    ```
    ���ellipsis��ʡ��Ч�������֣������ڸ�������min-width:0

    **ע��: ������ж����data��Ҫʹ��returnһ������**

    ```
    export default {
      name: 'HomeRecommend',
      data () {
        return {
          recommendList: [
            {
              id: '0001',
              imgUrl: 'http://img1.qunarzz.com/sight/p0/201406/04/4f597aad25208a233999238c65af9b06.jpg_200x200_d1ea2bd2.jpg',
              title: '�Ͼ�����Ȫˮ������',
              desc: '��Ʒ����ȻȪˮˮ����԰'
            }
          ]
        }
      }
    }
    ```

5. ʹ��ajax��ȡapi����

    ��װaxios����
    ```
    npm install axios --save
    ```
    ����ҳHome.vue��mounted()�������ں���(�ֳƹ��Ӻ���)�л�ȡ������ҳ�Ķ�����API���ݡ�

    **�����÷�**
    ```
    import axios from 'axios'

    export default {
      name: 'Home',
      components: {
       ...
      },
      methods: {
        getHomeInfo () {
          axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          console.log(res)
        }
      },
      mounted () {
        this.getHomeInfo()
      }
    }
    ```
    **Mock API����**

    /config/index.js >> dev >> proxyTable
    ```
    proxyTable: {
        '/api': {
            target: 'http://localhost:8080',
            pathRewrite: {
                '^/api':'/static/mock'
            }
        }
    }
    ```
    > ���������Դ��API���������ϻ�����Ҫ����Ĵ����

    **��npm-��Դ·��-���ص���-���ϻ�����api����-��������-�����**

    **��ҳ�ĸ���������ݴ���**

    ```
    // �����

    // �ؼ�λ��1 ��city����
    <home-header :city="city"></home-header>

    // �ؼ�λ��2 ��data () �ж���city���ԣ�������ֵ
    export default {
      name: 'Home',
      components: {
        ...
      },
      data () {
        return {
          city: ''
        }
      },
      methods: {
        getHomeInfo () {
          axios.get('/api/index.json')
            .then(this.getHomeInfoSucc)
        },
        getHomeInfoSucc (res) {
          res = res.data
          if (res.ret && res.data) {
            const data.city = res.data
            this.city = data.city
          }
        }
      },
      mounted () {
        this.getHomeInfo()
      }
    }

    // �����

    // ��props�ж������Բ�ָ������
    export default {
      name: 'HomeHeader',
      props: {
        city: String
      }
    }

    //ȡ�������������ֵ
    {{this.city}}
    ```

##### ����ȥ�Ķ���ѡ������б�ҳ
> �ο�ҳ�� http://piao.qunar.com/touch/toNewCityList.htm

1. CityHeader���

    ������֧city-router-6

    > ����city·�ɣ�/src/router/index.js

    ```
    {
    path: '/city',
    name: 'City',
    component: City
    }
    ```

    Header.vue

2. �����������

    ������֧city-search-7

    Search.vue

3. �����б����

    ������֧city-list-8

    List.vue

    �޸�1����Ĭ�ϵ�αԪ�ص�����

    ```
    .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
    ```

    **Better-Scroll����������**

    https://github.com/ustbhuangyi/better-scroll

    https://blog.csdn.net/qq_26632807/article/details/77856950 **[��������]**

    **����������better-scroll��ʼ���ᵼ���ڰ�׿�ֻ��ϲ��ܵ��better-scroll�����е�click�¼������÷�����**

    ��װBetter-Scroll

    ```
    npm install better-scroll --save
    ```

    DOM�ṹ

    ```
    <div class="wrapper">
      <ul class="content">
        <li>...</li>
        <li>...</li>
        ...
      </ul>
      <!-- you can put some other DOMs here, -->
      <!-- it won't affect the scrolling -->
    </div>
    ```

    ��ʼ��

    1> ��򵥵ĳ�ʼ����***����***��:

    ```
    import BScroll from 'better-scroll'
    const wrapper = document.querySelector('.wrapper')
    const scroll = new BScroll(wrapper)
    ```

    Better-Scroll�ṩһ���࣬��ʵ����ʱ�����һ��������һ����DOM���󡣵�Ȼ��Better-Scroll�ڲ�����������ʹquerySelectorѡ��������ȡDOM������˳�ʼ������Ҳ����������ʾ��

    2> �������ĳ�ʼ����**����ʹ��**��
    ```
    import BScroll from 'better-scroll'

    mounted () {
       const options = {
       // ������better-scroll�ڰ�׿�ֻ��ϲ��ܵ��������
       // �������ü�
       // https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html#click
       click: true,
       tap: true
     }
     this.scroll = new Bscroll(this.$refs.wrapper, options)
   },
    ```

    **�ر�ע��ҪʹBetter-Scroll��Ч�����ܻ���ҪĿ���������Ҫ��Ч������Ĭ���������ʱȴ���ܹ����ſ���**

    ```
    .list
      overflow: hidden
      position: absolute
      top: 1.58rem
      left: 0
      right: 0
      bottom: 0
      background: red
    ```

    ��ȡDOM�ڵ�ķ���

    ```
    // ָ��һ��ref (����s)
    <div class="list" ref="wrapper">

    // ��ȡdom (��s)
    this.$refs.wrapper
    ```

4. �Ҳ���ĸ�����

    ������֧city-alphabet-9

    Alphabet.vue

    flex��һ�÷�
    ```
    display: flex
    flex-direction: column
    justify-content: center
    ```
    **�ر�ע����΢�Ż���QQ��������»����ᴥ���¼�ð�ݣ����²���ͨ����ĸ�����»���ѡ����ĸ**
    ```
    <li @touchmove="handleTouchMove">{{item}}</li>

    methods: {
      handleTouchMove (e) {
        // ΢���д��� ���ϻ���ʱ����ҳ��������������
        e.preventDefault()
        ...
      }
    },
    ```

5. ajax��ȡ����

    ������֧ city-ajax-10

6. �ֵ����������

    ������֧ city-components-11

    > ��������: Alphabet.vue�����ͨ��$emit�����Զ����¼�changeLetter

    ```
    methods: {
      handleLetterClick (e) {
         this.$emit('changeLetter', e.target.innerText)
        }
    }
    ```
    > City.vue������������dom�ϰ�����������¼��Ľ��պ���changeLetter,��ͨ��������е�handleLetterChange����ֵletter,

    ```
    <template>
     <div class="w">
        <city-alphabet @changeLetter="handleLetterChange"></city-alphabet>
      </div>
    </template>
    ...
    data () {
      return {
          letter: ''
        }
      },
    methods: {
      handleLetterChange (letter) {
        this.letter = letter
      }
    },
    ```
    > City.vue�������ͨ����List.vue����������Եķ�ʽ,��ֵletter���ݸ������

    ```
    :letter="letter"
    ```
    > List.vue�����ͨ���������Եķ�ʽ���մ��ݹ�����ֵ,��ͨ����watch����letter�仯��

    ```
    props: {
       letter: String
    },
    watch: {
       letter () {
         console.log(this.letter)
       }
    }
    ```
    > ��������
    
    ```
    data () {
        retrun {
            ...
            timer: null
        }
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => { // �������������� handleTouchMove ִ��Ƶ�ʣ���Լ����
         ...
        }, 16)
      }
    }
    ```


7. �����б�ҳ�����߼�����

    ������֧ city-search-logic-12

    v-modelʵ�����ݵ�˫���
    ```
    <input v-model="keyword" class="search-input" type="text" placeholder="�����������ƴ��">

    data () {
        return {
          keyword: '',
          list: [],
          timer: null
        }
    },
    watch: { // �ر�ע�⣺����ð�Ų���watch () { ... }
      keyword () {
        if (this.timer){
            clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((value) => {
          if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
             result.push(value)
             }
            })
          }
        this.list = result
     },100)
    }
    ```
    ����Dom�Ƿ���ʾ
    ```
    v-show="!list.length"

    or better

    v-show="hasNoData"

    computed: {
        hasNoData () {
          return !this.list.length
        }
    },
    ```

8. **vuex**ʵ�����ݹ���

    ������֧city-vuex-13

    �����ĵ� https://vuex.vuejs.org/zh/

    ![vuex](https://vuex.vuejs.org/vuex.png)

    **����ʹ�ò���:**

    1> ��װvuex
    ```
    npm install vuex --save
    ```

    2> �½�/src/store/index.js, ����main.js������
    ```
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    export default new Vuex.Store({
      state: {
        city: '�Ͼ�'
      }
    })
    ```
    3> ����main.js�����룬ע����Vueʵ����
    ```
    import store from './store/'

    new Vue({
      el: '#app',
      router,
      store, // ���ҿ���
      components: { App },
      template: '<App/>'
    })
    ```
    4> ȡֵ
    ```
    {{this.$store.state.city}}
    ```

    5> �����ų��а󶨵���¼�,���ڵ���¼��зַ��洢�¼�֪ͨ����/src/store/index.js�����¼����������������ݸ��¡�

    > Ҳ����ֱ������dispatch,ֱ���޸�commit����

    ```
    // this.$store.dispatch('changeCity', city)
    this.$store.commit('toChangeCity', city)
    ```

    ```
    <div v-for="item of hot" :key="item.id" @click="handleCityClick(item.name)">

    methods: {
     handleCityClick (city) {
       this.$store.dispatch('changeCity', city)
       alert(city)
      }
    },

    /src/store/index.js

    export default new Vuex.Store({
      state: {
        city: '�Ͼ�'
      },
      actions: { //���ҿ���
        changeCity (ctx, city) {
          console.log(city)
          ctx.commit('toChangeCity', city)
        }
      },
      mutations: {
        toChangeCity (state, city) {
          state.city = city
        }
      }
    })
    ```

    vuex��֧���ֶ�ӳ��

    ```
    import { mapState } from 'vuex'

    computed: {
      ...mapState(['city'])
    }
    ```
    or

    ```
    import { mapMutations } from 'vuex'

     handleCityClick (city) {
      ...
      this.toChangeCity(city)
    },
    ...mapMutations(['toChangeCity'])
    ```

    ͨ��js����·��ҳ��

    ```
    this.$router.push('/')
    ```

9. ʹ��**keep-alive**�Ż�����

    ������֧ city-keepalive-14

    �޸�App.vue

    ```
    <template>
      <div id="app">
        <keep-alive> // ���ҿ���
          <router-view/>
        </keep-alive>
      </div>
    </template>
    ```

    ��ʱ����Ҫ�������ݶ�̬�ı�ʱҳ����Ҫ�����������ݣ����統ǰ���иı�ʱ��������ص�ǰ���е���Ϣ

    ʹ��keep-alive��mounted���ں���ֻ�ᱻ����һ�Σ�����activated���ں�����ÿ�ζ��ᱻ���á�����...

    ��Home.vue��ʹ��vuex,����computed����������ӳ��һ��city����ͬʱ����һ������lastCity�����һ�����С�

    Ȼ����activated���ں������жϵ�ǰѡ����к���һ�������Ƿ���ȣ�������򽫵�ǰ������Ϊ������������һ��ajax��

    ```
    import { mapState } from 'vuex'

    data () {
      return {
        lastCity: '',
       }
    },
    computed: {
      ...mapState(['city'])
    },
    methods: {
      getHomeInfo () {
         axios.get('/api/index.json?city=' + this.city)
            .then(this.getHomeInfoSucc)
        }
    },
    mounted () { // ҳ���ʼ��
      this.lastCity = this.city
      console.log('mounted')
      this.getHomeInfo()
    },
    activated () { // ҳ��ɼ�ʱ
      if (this.lastCity !== this.city) {
        this.lastCity = this.city
        this.getHomeInfo()
      }
       console.log('activated')
    }
    ```
    ����Ҳ����ʹ�����ų�һ����ҳ�棬ʹ�䲻ʹ�û��棬�����������ҳ���޸�App.vue

    ```
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
    ```

    **�ر�ע��: exclude�ᵼ��ҳ���в��ٻص�activated (), ���ǻ����created (),����һЩ��Ҫ���³�ʼ���ķ�������������Ҫ��created () ���á�**

    ���磺src/pages/detail/components/Header.vue

##### �ߡ���������ҳ��
>
1.  Banner

    ������֧detail-banner-15

    ��li��ǩ����router-link:

    > ���router-linkĬ�ϻ�ĳɱ�ǩ��ɫ����

    ע����Ҫͬʱ��router-link��ǩ������tag���ԣ�ָ����Ҫ��Ⱦ��li��ǩ��ͬʱָ��to���ԡ�

    ```
    <router-link tag="li" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
      ...
    </router-link>
    ```

    ע�ᶯ̬·��,��ȡ·�ɲ���

    ```
     {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
     }
    ```

    �ο� http://touch.piao.qunar.com/touch/detail.htm?id=33782

    ����DetailBanner���

    ����Ч��
    ```
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    ```

2. �����������

    swiper ������

    http://3.swiper.com.cn/api/pagination/2016/0126/299.html

    ����� /src/common/gallary/Gallary.vue

3. Header��������Ч��

    ������֧ detail-header-16

    **�ر�ע��:��ȡ�����������Ĵ�ֱ����scrollTop�ļ�������**

    ͨ����:style��opacity��������̬�ı�͸����

    ```
    <router-link tag="div" to="/" class="header-abs"
    v-show="showAbs"  :style="opacityAbsStyle">
       <div class="iconfont back-icon-back">&#xe624;</div>
    </router-link>

    <div class="header-fixed" v-show="!showAbs" :style="opacityFixedStyle">
       <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624;</div>
       </router-link>
       ��������
    </div>

    ```

    ```
    data () {
      return {
          showAbs: true,
          opacityAbsStyle: { // ���ؼ��Ľ���
            opacity: 1
          },
          opacityFixedStyle: { // �̶��������Ľ���
            opacity: 0
          }
        }
      },
      methods: {
        handleScroll () {
          // �ر�ע�⣬scrollTop�е�ÿһ��()�������������һ��ȡ�����Ѽ��ݰ�׿�������UAΪƻ���������

          const scrollTop = (window.parent.document.documentElement.scrollTop || window.parent.document.body.scrollTop)
          || (document.body.scrollTop + document.documentElement.scrollTop)
          || (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0)

          if (top > 40) { // �̶��������Ľ���
            let opacity = top / 130
            opacity = opacity > 1 ? 1 : opacity
            this.opacityFixedStyle = {
              opacity
            }
            this.showAbs = false
          } else { // ���ؼ��Ľ���
            this.showAbs = true
            let opacity = top / 40
            opacity = opacity > 1 ? 1 : opacity
            this.opacityAbsStyle = {
              opacity: (1 - opacity)
            }
          }
        }
      },
      activated () {
        window.addEventListener('scroll', this.handleScroll)
      }
    ```

4. ��ȫ���¼����

    > ������һ��window.addEventListener

    ```
    activated () {
        window.addEventListener('scroll', this.handleScroll)
    }
    ```

   ����¼���

    ```
    deactivated () {
      window.removeEventListener('scroll', this.handleScroll)
    }
    ```
    > �ں��� keep-alive exclue="detail" ʱ�� activated & deactivated ʧЧ
    
    ```
    <router-link
        tag="div"
        to="/"
        class="abs"
        v-show="showAbs"
        @click.native="removeScrollListener"  // ��ӵ���¼�
    >
      <span class="iconfont abs-back">&#xe624;</span>
    </router-link>
    
    methods: {
        ...
        removeScrollListener () { // ���ȫ�ְ�
          window.removeEventListener('scroll', this.handleScroll)
        }
    },
    mounted () { // �������ں��� 
      window.addEventListener('scroll', this.handleScroll)
    }
    ```


5. ʹ�õݹ����ʵ������ҳ�б�

    ������֧ detail-list-17

    json����

    ```
    list: [{
        title: '����Ʊ',
        children: [{
          title: '����������Ʊ',
          children: [{
            title: '����������Ʊ - ĳһ����������'
          }]
        }, {
          title: '���������Ʊ'
        }]
      }, {
        title: 'ѧ��Ʊ'
      }, {
        title: '��ͯƱ'
      }, {
        title: '�ػ�Ʊ'
      }]
    ```

    �ݹ����detail-list���(List.vue)

    ```
    <div>
      <div class="item" v-for="(item,index) of list" :key="index">
        <div class="item-title border-bottom">
         <span class="item-title-icon"></span>
             {{item.title}}
        </div>

        // ������
        <div v-if="item.children" class="item-children">
              <detail-list :list="item.children"></detail-list>
        </div>
       </div>
    </div>
    ```

6. ajax��ȡ����

    ������֧ detail-ajax-18

    **ע��һ�£�ʹ�����԰�ʱ����ð��**

    ```
    <img class="banner-img" :src="bannerImg">
    ```
    **��ʾ�ı���ʹ��{{����xxx}}����**
    ```
    <div class="banner-title">{{this.sightName}}</div>
    // �����this����ȥ�������Ǵ󲿷�js������this����ȥ
    ```

    **ʹ�ü������Կ����Ƿ���ʾһ���б���(���ⰴ�������ʼ��,���������ݱ仯ʱ�ĵ�ǰ��ʾ������Ϊ�б�����һ��)**

    ```
    <swiper :options="swiperOption" v-if="isShowGallary">
     // ��Ҫ�ر�ע�⣬�����Ҫʹ��v-show,����v-if
       ������
    </swiper>

    computed: {
     isShowGallary () {
       return this.imgs.length > 0
     }
    }
    ```

    ·����Ϊ

    ����ҳ����ʾ�������������ܵ���һҳ���¹����ľ���Ӱ��

    https://cn.vuejs.org/v2/guide/migration-vue-router.html#saveScrollPosition-�滻

    �޸�router/index.js

    ```
    export default new Router({
    routes: [{
        path: '/',
        name: 'HelloWorld',
        component: Home
      }], // ����ҳ����ʾ�������������ܵ���һҳ���¹����ľ���Ӱ��
      scrollBehavior: function (to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 }
      }
    })
    ```

    �������·�ɽ���

    https://cn.vuejs.org/v2/guide/routing.html

7. ����Ŀ��ʹ�û�������

    ������֧ detail-animation-19

    ������src/common/fade/FadeAnimation.vue (���뵭��Ч��)
    ```
    <template>
      <transition>
        <!-- ��� ���÷��İ��������������䵽���� -->
        <slot></slot>
      </transition>
    </template>

    <script>

    export default {
      name: 'FadeAnimation'
    }
    </script>

    <style lang="stylus" scoped>
      .v-enter, .v-leave-to
        opacity: 0
      .v-enter-active, .v-leave-active
        transition: opacity .5s
    </style>

    ```

    Ӧ������src/pages/detail/components/Banner.vue��
    ```
     <fade-animation>
      <!-- �������䵽��� -->
      <common-gallary :imgs="bannerImgs" v-show="showGallary"></common-gallary>
    </fade-animation>
    ```

##### �ˡ���Ŀ�������������뷢������

> �������
  �޸� package.json �ļ�
   ```
  ...
  "scripts": {
    "dev": "webpack-dev-server --host 0.0.0.0 --inline --progress --config build/webpack.dev.conf.js"
    ...
  }
   ```
> ������������֧�� ES6 ������ promise ����
   ```
  npm install babel-polyfill --save
  
  #src/main.js�ļ�������

  import "bable-polyfill" 
   ```
> ��Ŀ���

  1. _ע����ĿĿ¼�����һ��  dist �ļ� => ����Ҫ���ߵ�Ŀ¼�������_ 
   ```
  npm run build
   ```
  2. _�޸�Ŀ¼_ 
   ```
  config/index.js ���޸�
  build: {
    ...
    assetsPublicPath: '/', // �޸�·��
    ...
  }
   ```
> �첽�����ʹ��<br/>
   _src/router/index.js  ����ο�vue.js����_ 
   ```
  export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home') // �첽���
    },
    {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City') // �첽���
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail') // �첽���
    }
  ],
  ...
   ```

#### �����������ǳ���л���Ķ����ģ�
