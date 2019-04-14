<template>
  <div>
    <div
      class="container"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="title border-bottom">
        <span class="title-icon"></span>
        {{item.title}}
      </div>
      <div
        class="item-children"
        v-if="item.children"
      >
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'detailList',
  props: {
    list: Array
  },
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>

<style lang='stylus' scoped>
.title
  padding: 0 0.2rem
  font-size: 0.32rem
  line-height: 0.8rem
  .title-icon
    position: relative
    left: 0.06rem
    top: 0.06rem
    display: inline-block
    width: 0.36rem
    height: 0.36rem
    margin-right: 0.1rem
    background: url('http://s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -0.45rem no-repeat
    background-size: 0.4rem 3rem
.item-children
  padding: 0 0.2rem
</style>
