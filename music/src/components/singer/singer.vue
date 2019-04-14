<template>
  <div class="singer"
       ref="singer">
    <list-view @select="selectSinger"
               :data="singers"
               ref="list"></list-view>
    <router-view></router-view>
  </div>
</template>

<script>
import { getSingerList } from 'api/singer'
import { ERR_OK } from 'api/config'
import Singer from 'common/js/singer'
import ListView from 'base/listview/listview'
import { mapMutations } from 'vuex'
import { playlistMixin } from 'common/js/mixin.js'

const HOT_NAME = '热门'
const HOT_SINGER_LENGHT = 10

export default {
  mixins: [playlistMixin],
  data() {
    return {
      singers: []
    }
  },
  methods: {
    handlePlaylist(playlist) {
      const bottom = playlist.length > 0 ? '60px' : ''
      this.$refs.singer.style.bottom = bottom
      this.$refs.list.refresh()
    },
    selectSinger(singer) {
      this.$router.push({
        path: `/singer/${singer.id}`
      })
      this.setSinger(singer)
    },
    _getSingerList() {
      getSingerList().then(res => {
        if (res.code === ERR_OK) {
          this.singers = this._normalizeSinger(res.data.list)
        }
      })
    },
    _normalizeSinger(list) {
      let map = { // 初始化格式
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      // 通过标签分类，获取所需数据
      list.forEach((item, index) => {
        // 热门数据，获取前 n 条数据
        if (index < HOT_SINGER_LENGHT) {
          // 添加所需数据
          // new Singer 封装相同的数据
          map.hot.items.push(new Singer({
            id: item.Fsinger_mid,
            name: item.Fsinger_name
          }))
        }
        // 类型标签
        const key = item.Findex
        if (!map[key]) { // 初始化格式
          map[key] = {
            title: key,
            items: []
          }
        }
        // 分类添加数据
        map[key].items.push(new Singer({
          id: item.Fsinger_mid,
          name: item.Fsinger_name
        }))
      })
      // 获取有序列表
      let hot = []
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-z]/)) { // 字母排序
          ret.push(val)
        } else if (val.title === HOT_NAME) { // 热门标签
          hot.push(val)
        }
      }
      // 字母排序，升序
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      // 返回合并数组
      return hot.concat(ret)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    })
  },
  components: {
    ListView
  },
  created() {
    this._getSingerList()
  }
}
</script>

<style lang='stylus' scoped>
.singer
  position: fixed
  top: 88px
  bottom: 0
  width: 100%
</style>
