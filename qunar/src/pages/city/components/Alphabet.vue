<template>
  <div>
    <ul class="list">
      <li
        class="item"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="$emit('change', item)"
        @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cities: Object
  },
  data() {
    return {
      touchStart: false,
      startY: 0,
      timer: null // 性能优化，节流
    }
  },
  methods: {
    handleTouchStart() {
      this.touchStart = true
    },
    handleTouchMove(e) {
      if (!this.touchStart) return
      if (this.timer) clearInterval(this.timer) // 性能优化，节流
      this.timer = setTimeout(() => {
        const HEADER_TOP = 79
        const LETTER_HEIGHT = 20
        const touchY = e.touches[0].clientY - HEADER_TOP
        const index = Math.floor((touchY - this.startY) / LETTER_HEIGHT)
        if (index > 0 && index <= this.letters.length) { // 26字母区间
          this.$emit('change', this.letters[index])
        }
      }, 1000 / 60)
    },
    handleTouchEnd() {
      this.touchStart = false
    }
  },
  computed: {
    // 获取26位字母
    letters() {
      let list = []
      for (let i in this.cities) {
        list.push(i)
      }
      return list
    }
  },
  updated() {
    this.startY = this.$refs['A'][0].offsetTop
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.list
  display: flex
  flex-direction: column
  justify-content: center
  position: absolute
  top: 1.58rem
  right: 0
  bottom: 0
  width: 0.4rem
  .item
    line-height: 0.4rem
    text-align: center
    color: $bgColor
</style>
