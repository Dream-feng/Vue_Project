<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="(page, index) in pages"
        :key="index"
      >
        <div
          class="icon"
          v-for="item in page"
          :key="item.id"
        >
          <div class="icon-img-wrap">
            <img
              class="icon-img"
              :src="item.imgUrl"
            />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  data() {
    return {
      swiperOption: {
        autoplay: false
      }
    }
  },
  computed: {
    pages() {
      const pages = []
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/variables.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icon
  position: relative
  float: left
  width: 25%
  height: 0
  padding-bottom: 25%
  overflow: hidden
  .icon-img-wrap
    box-sizing: border-box
    position: absolute
    top: 0
    right: 0
    bottom: 0.5rem
    left: 0
    padding: 0.1rem
    .icon-img
      display: block
      height: 100%
      margin: 0 auto
  .icon-desc
    position: absolute
    left: 0
    right: 0
    bottom: 0
    height: 0.5rem
    line-height: 0.5rem
    text-align: center
    color: $darkTextColor
    ellipsis()
</style>
