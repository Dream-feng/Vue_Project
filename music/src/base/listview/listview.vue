<template>
  <scroll class="listview"
          :data="data"
          :listenScroll="true"
          :probeType="3"
          ref="listview"
          @scroll="scroll">
    <ul>
      <li class="list-group"
          v-for="(group, index) of data"
          :key="index"
          ref="listGroup">
        <h2 class="list-group-title">{{group.title}}</h2>
        <ul>
          <li class="list-group-item"
              v-for="item of group.items"
              :key="item.id"
              @click="selectItem(item)">
            <img class="avatar"
                 v-lazy="item.avatar" />
            <span class="name">{{item.name}}</span>
          </li>
        </ul>
      </li>
    </ul>
    <div class="list-shortcut">
      <ul>
        <li class="item"
            :class="{'current': currentIndex===index}"
            v-for="(item, index) of shortcutList"
            :key="index"
            :data-index="index"
            @touchstart="onShortcutTouchStart"
            @touchmove.stop.prevent="onShortcutTouchMove">{{item}}</li>
      </ul>
    </div>
    <div class="list-fixed"
         v-show="fixedTitle"
         ref="fixed">
      <h1 class="fixed-title">{{fixedTitle}}</h1>
    </div>
    <div v-show="!data.length"
         class="loading-container">
      <loading></loading>
    </div>
  </scroll>
</template>

<script>
import Scroll from 'base/scroll/scroll'
import { getData } from 'common/js/dom'
import Loading from 'base/loading/loading'

const ANCHOR_HEIGHT = 18
const TITLE_HEIGHT = 30

export default {
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      scrollY: -1,
      currentIndex: 0,
      diff: -1
    }
  },
  methods: {
    selectItem(item) {
      this.$emit('select', item)
    },
    onShortcutTouchStart(e) {
      let anchorIndex = getData(e.target, 'index')
      this.touch.y1 = e.touches[0].pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortcutTouchMove(e) {
      this.touch.y2 = e.touches[0].pageY
      let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delta
      this._scrollTo(anchorIndex)
    },
    scroll(pos) {
      this.scrollY = pos.y
    },
    refresh() { // 父组件调用
      this.$refs.listview.refresh()
    },
    _scrollTo(index) {
      // 上下 padding 处理
      if (!index && index !== 0) { // index === null
        return
      }
      // 边界处理
      if (index < 0) { // 上边界
        index = 0
      } else if (index > this.listHeight.length - 1) { // 下边界
        index = this.listHeight - 2
      }
      // 点击触发
      this.scrollY = -this.listHeight[index]
      // 调取 scroll 组件的事件
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    },
    _calculateHeight() {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(0) // 第一个 tag
      for (let i = 0, l = list.length; i < l; i++) {
        let item = list[i]
        height += item.clientHeight // 高度累加
        this.listHeight.push(height)
      }
    }
  },
  computed: {
    shortcutList() {
      return this.data.map(group => {
        return group.title.substr(0, 1)
      })
    },
    fixedTitle() {
      if (this.scrollY > 0) { // 下拉操作，隐藏
        return
      }
      return this.data[this.currentIndex] ? this.data[this.currentIndex].title : ''
    }
  },
  watch: {
    data() { // 父组件中传入的数据
      // 开始计算 tag 的高度
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    // 监听 scroll 获取 pos.y
    scrollY(newY) {
      const listHeight = this.listHeight
      // 顶部
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 在中间部门
      for (let i = 0, l = listHeight.length; i < l; i++) {
        // 遍历寻找区间
        let preHeigth = listHeight[i]
        let nextHeight = listHeight[i + 1]
        if (-newY >= preHeigth && -newY < nextHeight) {
          this.currentIndex = i
          // newY 是一个负值
          this.diff = nextHeight + newY
          return
        }
      }
      // 当滚动到底部，且 -newY 大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    },
    diff(newVal) {
      // 获取被顶高度
      let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
      if (this.fixedTop === fixedTop) { // 同一个区间，不操作
        return
      }
      this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0`
    }
  },
  components: {
    Scroll,
    Loading
  },
  created() {
    // 只用于传递，不需要监听 get set 方法
    this.touch = {}
    this.listHeight = []
  }
}
</script>

<style lang='stylus' scoped>
@import '~common/stylus/variable'

.listview
  position: relative
  width: 100%
  height: 100%
  overflow: hidden
  background: $color-background
  .list-group
    padding-bottom: 30px
    .list-group-title
      height: 30px
      line-height: 30px
      padding-left: 20px
      font-size: $font-size-small
      color: $color-text-l
      background: $color-highlight-background
    .list-group-item
      display: flex
      align-items: center
      padding: 20px 0 0 30px
      .avatar
        width: 50px
        height: 50px
        border-radius: 50%
      .name
        margin-left: 20px
        color: $color-text-l
        font-size: $font-size-medium
  .list-shortcut
    position: absolute
    z-index: 30
    right: 0
    top: 50%
    transform: translateY(-50%)
    width: 20px
    padding: 20px 0
    border-radius: 10px
    text-align: center
    background: $color-background-d
    font-family: Helvetica
    .item
      padding: 3px
      line-height: 1
      color: $color-text-l
      font-size: $font-size-small
      &.current
        color: $color-theme
  .list-fixed
    position: absolute
    top: 0
    left: 0
    width: 100%
    .fixed-title
      height: 30px
      line-height: 30px
      padding-left: 20px
      font-size: $font-size-small
      color: $color-text-l
      background: $color-highlight-background
  .loading-container
    position: absolute
    width: 100%
    top: 50%
    transform: translateY(-50%)
</style>
