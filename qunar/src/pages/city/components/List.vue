<template>
  <div
    class="list"
    ref="wrapper"
  >
    <!-- BScroll 需要两个包裹层 -->
    <div>
      <!-- 当前城市 -->
      <div class="area">
        <div class="title border-bottom">当前城市</div>
        <div class="btn-list">
          <div class="btn-wrap">
            <div class="btn">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <!-- 热门城市 -->
      <div class="area">
        <div class="title border-bottom">热门城市</div>
        <div class="btn-list">
          <div
            class="btn-wrap"
            v-for="item in hotCities"
            :key="item.id"
          >
            <div
              class="btn"
              @click="handleCityClick(item.name)"
            >{{item.name}}</div>
          </div>
        </div>
      </div>
      <!-- 字母排序 -->
      <div
        class="area"
        v-for="(item, key) in cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-bottom">{{key}}</div>
        <ul class="item-list">
          <li
            class="item border-bottom"
            v-for="innerItem in item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >{{innerItem.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'

export default {
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  data() {
    return {
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  watch: {
    letter(val) {
      const el = this.$refs[this.letter][0]
      this.scroll.scrollToElement(el)
    }
  },
  computed: {
    ...mapState({
      'currentCity': 'city'
    })
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper)
  }
}
</script>

<style lang='stylus' scoped>
.border-topbottom
  &:before
    border-color: #ccc
  &:after
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  left: 0
  overflow: hidden
  .title
    padding-left: 0.2rem
    font-size: 0.26rem
    line-height: 0.54rem
    color: #666
    background-color: #eee
  .btn-list
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    overflow: hidden
    .btn-wrap
      float: left
      width: 33.33%
    .btn
      margin: 0.1rem
      padding: 0.1rem 0
      text-align: center
      border: 0.02rem solid #ccc
      border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>
