<template>
  <div>
    <div
      class="banner"
      @click="showGallery=true"
    >
      <img
        :src="bannerImg"
        class="banner-img"
      >
      <div class="info">
        <div class="title">{{sightName}}</div>
        <div class="num">
          <span class="iconfont icon">&#xe692;</span>
          {{gallaryImgs.length}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery
        :imgs="gallaryImgs"
        v-show="showGallery"
        @close="showGallery=false"
      ></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import commonGallery from 'common/gallery/Gallery'
import fadeAnimation from '../fade/fade'

export default {
  props: {
    bannerImg: String,
    sightName: String,
    gallaryImgs: Array
  },
  data() {
    return {
      showGallery: false
    }
  },
  methods: {
  },
  components: {
    commonGallery,
    fadeAnimation
  }
}
</script>

<style lang='stylus' scoped>
.banner
  position: relative
  height: 0
  padding-bottom: 55%
  overflow: hidden
  .banner-img
    width: 100%
  .info
    display: flex
    position: absolute
    left: 0
    right: 0
    bottom: 0
    line-height: 0.6rem
    color: #fff
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
    .title
      flex: 1
      padding: 0 0.2rem
      font-size: 0.32rem
    .num
      height: 0.32rem
      margin-top: 0.14rem
      padding: 0 0.4rem
      font-size: 0.24rem
      line-height: 0.32rem
      border-radius: 0.2rem
      background-color: rgba(0, 0, 0, 0.8)
    .icon
      font-size: 0.24rem
</style>
