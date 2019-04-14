<template>
  <div>
    <div class="header">
      <h1 class="title">城市选择</h1>
      <router-link
        tag="div"
        to="./"
        class="header-back iconfont"
      >&#xe624;</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.header
  position: relative
  height: $headerHeight
  font-size: 0.32rem
  line-height: $headerHeight
  text-align: center
  color: #fff
  background-color: $bgColor
  .title
    color: #fff
  .header-back
    position: absolute
    top: 0
    left: 0
    width: 0.64rem
    font-size: 0.4rem
    text-align: center
    color: #fff
</style>
