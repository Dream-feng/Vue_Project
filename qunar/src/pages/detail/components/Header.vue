<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="abs"
      v-show="showAbs"
      @click.native="removeScrollListener"
    >
      <span class="iconfont abs-back">&#xe624;</span>
    </router-link>
    <div
      class="fixed"
      :style="opacityStyle"
      v-show="!showAbs"
    >
      <h1 class="title">景点详情</h1>
      <router-link
        tag="div"
        to="/"
        class="iconfont fixed-back"
        @click.native="removeScrollListener"
      >&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll(e) {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        const MAX_HEIGHT = 140
        let growth = top / MAX_HEIGHT
        growth = growth > 1 ? 1 : growth
        this.opacityStyle.opacity = growth
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    },
    removeScrollListener() {
      // 解绑
      window.removeEventListener('scroll', this.handleScroll)
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.abs
  position: absolute
  left: 0.2rem
  top: 0.2rem
  width: 0.8rem
  height: 0.8rem
  line-height: 0.8rem
  border-radius: 50%
  text-align: center
  background-color: rgba(0, 0, 0, 0.8)
  .abs-back
    font-size: 0.4rem
    color: #fff
.fixed
  z-index: 2
  position: fixed
  top: 0
  left: 0
  right: 0
  height: $headerHeight
  font-size: 0.32rem
  line-height: $headerHeight
  text-align: center
  color: #fff
  background-color: $bgColor
  .title
    color: #fff
  .fixed-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    font-size: 0.4rem
    text-align: center
    color: #fff
</style>
