<template>
  <div>
    <detail-banner
      :bannerImg="bannerImg"
      :sightName="sightName"
      :gallaryImgs="gallaryImgs"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-list :list="list"></detail-list>
    <div class="cnx"></div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
import axios from 'axios'

export default {
  name: 'Detail',
  data() {
    return {
      bannerImg: '',
      sightName: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo() {
      axios.get('./api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then((res) => {
        res = res.data
        if (res.ret && res.data) {
          const data = res.data
          this.bannerImg = data.bannerImg
          this.sightName = data.sightName
          this.gallaryImgs = data.gallaryImgs
          this.list = data.categoryList
        }
      })
    }
  },
  components: {
    DetailBanner,
    DetailHeader,
    DetailList
  },
  created() {
    this.getDetailInfo()
  }
}
</script>

<style lang='stylus' scoped>
.cnx
  height: 50rem
</style>
