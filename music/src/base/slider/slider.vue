<template>
  <div
    class="slider"
    ref="slider"
  >
    <div
      class="slider-group"
      ref="sliderGroup"
    >
      <slot></slot>
    </div>
    <div class="dots">
      <div
        class="dot"
        :class="{active : currentPageIndex === index}"
        v-for="(item, index) in dots"
        :key="index"
      ></div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'

export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    }
  },
  methods: {
    _setSliderWidth(isResize) {
      this.childer = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0, len = this.childer.length; i < len; i++) {
        let child = this.childer[i]
        addClass(child, 'slider-item')
        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }
      if (this.loop && !isResize) { // BScroll 循环播放自动增加两个 slider
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initDots() {
      this.dots = new Array(this.childer.length)
    },
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400,
        snap: {
          loop: true
        },
        click: true
      })
      // BScroll scrollEnd 事件
      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = pageIndex
        if (this.autoPlay) {
          clearTimeout(this.timer)
          this._play()
        }
      })
    },
    _play() {
      let pageIndex = this.currentPageIndex + 1
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400) // BScroll 接口
      }, this.interval)
    },
    _isResize() {
      if (!this.slider) {
        return
      }
      this._setSliderWidth(true)
      this.slider.refresh() // BScroll 接口
    }
  },
  mounted() {
    setTimeout(() => {
      this._setSliderWidth()
      // 需要先调用 _initDots, _initSlider 会添加两个子元素
      this._initDots()
      this._initSlider()
    }, 20)
    // 视口改变
    window.addEventListener('resize', this._isResize, false)
  },
  activated() {
    window.addEventListener('resize', this._isResize, false)
  },
  deactivated() {
    clearTimeout(this.timer)
    window.removeEventListener('resize', this._isResize, false)
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable'

.slider
  min-height: 1px
  .slider-group
    position: relative
    overflow: hidden
    white-space: nowrap
    div
      float: left
      box-sizing: border-box
      overflow: hidden
      text-align: center
      a
        display: block
        width: 100%
        overflow: hidden
        text-decoration: none
        img
          display: block
          width: 100%
  .dots
    position: absolute
    right: 0
    left: 0
    bottom: 12px
    text-align: center
    font-size: 0
    .dot
      display: inline-block
      margin: 0 4px
      width: 8px
      height: 8px
      border-radius: 50%
      background: $color-text-l
      &.active
        width: 20px
        border-radius: 5px
        background: $color-text-ll
</style>
