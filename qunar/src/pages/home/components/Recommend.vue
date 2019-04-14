<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        :to="'/detail/' + item.id"
        class="item border-bottom"
        v-for="item in list"
        :key="item.id"
      >
        <div class="item-img-wrap">
          <img
            :src="item.imgUrl"
            class="item-img"
          />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/mixins.styl'
.title
  line-height: 0.8rem
  background: #eee
  text-indent: 0.2rem
.item
  display: flex
  height: 1.9rem
  overflow: hidden
  .item-img-wrap
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
    .item-img
      diplay: block
      width: 100%
      height: 100%
  .item-info
    flex: 1
    padding: 0.1rem
    min-width: 0
    .item-title
      line-height: 0.5rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-btn
      margin-top: 0.16rem
      padding: 0 0.2rem
      line-height: 0.44rem
      border-radius: 0.06rem
      color: #fff
      background-color: #ff9300
</style>
