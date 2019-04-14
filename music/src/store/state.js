import { playMode } from 'common/js/config.js'
import { loadSearch, loadPlay, loadFavorite } from 'common/js/cache'

const state = {
  singer: {},
  // 音乐播放所需参数
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1,
  // 歌单详情
  disc: {},
  // 排行
  topList: {},
  // 搜索历史，缓存读取
  searchHistory: loadSearch(),
  // 播放历史，缓存读取
  playHistory: loadPlay(),
  // 收藏
  favoriteList: loadFavorite()
}

export default state
