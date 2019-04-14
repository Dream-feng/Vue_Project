<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe600;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
.header
  display: flex
  line-height: $headerHeight
  color: #fff
  background-color: $bgColor
  .header-left
    float: left
    width: 0.64rem
    .back-icon
      display: block
      font-size: 0.4rem
      text-align: center
  .header-input
    flex: 1
    height: 0.64rem
    margin: 0.12rem 0 0 0.2rem
    padding-left: 0.2rem
    line-height: 0.64rem
    border-radius: 0.1rem
    color: #ccc
    background-color: #fff
  .header-right
    float: right
    min-width: 1.04rem
    padding: 0 0.2rem
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -0.04rem
      font-size: 0.24rem
</style>
