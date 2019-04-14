<template>
  <div class="swiper-container">
    <swiper v-if="showSwiper" :options="swiperOption">
      <!-- slides -->
      <swiper-slide
        v-for="item in list"
        :key="item.id"
      >
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <!-- Optional controls -->
      <div
        class="swiper-pagination"
        slot="pagination"
      ></div>
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
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper() {
      return this.list.length
    }
  }
}
</script>

<style lang='stylus' scoped>
.swiper-container >>> .swiper-pagination-bullet-active
  background: #fff !important
.swiper-container
  width: 100%
  height: 0
  padding-bottom: 26.66%
  background-color: #eee
  overflow: hidden
  .swiper-img
    width: 100%
</style>
