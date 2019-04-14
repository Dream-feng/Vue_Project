<template>
  <div
    class="container"
    @click="$emit('close')"
  >
    <div class="wrap">(
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img :src="item" />>
        </swiper-slide>
        <!-- Optional controls -->
        <div
          class="swiper-pagination"
          slot="pagination"
        ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imgs: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
.container >>> .swiper-container
  overflow: inherit
.container
  z-index: 99
  display: flex
  flex-direction: column
  justify-content: center
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: #000
  .wrap
    height: 0
    padding-bottom: 100%
    img
      width: 100%
    .swiper-pagination
      bottom: -1rem
      color: #fff
</style>
