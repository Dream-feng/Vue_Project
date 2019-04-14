<template>
  <div>
    <div class="search">
      <input
        type="text"
        class="search-input"
        placeholder="输入城市名或拼音"
        v-model="keyword"
      >
    </div>
    <div
      class="search-cont"
      ref="serchCont"
      v-show="keyword"
    >
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item in list"
          :key="item.id"
          @click="handleCityClick(item.name)"
        >{{item.name}}</li>
        <li
          class="search-item border-bottom"
          v-show="hasNoData"
        >没找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapMutations } from 'vuex'

export default {
  props: {
    cities: Object
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null // 性能优化，节流
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  computed: {
    hasNoData() {
      return !this.list.length
    }
  },
  watch: {
    keyword(val) {
      if (this.timer) clearInterval(this.timer) // 性能优化，节流
      // 不存在 keyword 清空 list
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        let result = []
        for (let i in this.cities) { // 查找匹配项
          this.cities[i].forEach(item => {
            if (item.spell.indexOf(val) > -1 || item.name.indexOf(val) > -1) {
              result.push(item)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.serchCont)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.search
  height: 0.72rem
  padding: 0 0.1rem
  background-color: $bgColor
  .search-input
    box-sizing: border-box
    width: 100%
    height: 0.62rem
    padding: 0 0.1rem
    line-height: 0.62rem
    text-align: center
    border-radius: 0.06rem
    color: #666
.search-cont
  z-index: 1
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  background-color: #eee
  overflow: hidden
  .search-item
    line-height: 0.62rem
    padding-left: 0.2rem
    color: #666
    background-color: #fff
</style>
