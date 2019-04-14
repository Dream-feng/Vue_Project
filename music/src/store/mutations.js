import * as types from './mutation-types'

const mutations = {
  [types.SET_SINGER](state, singer) {
    state.singer = singer
  },
  // 音乐播放
  // @param: flag 布尔值
  [types.SET_PLAYING_STATE](state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN](state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST](state, list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state, list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  },
  // 歌单详情
  [types.SET_DISC](state, disc) {
    state.disc = disc
  },
  // 排行
  [types.SET_TOP_LIST](state, topList) {
    state.topList = topList
  },
  // 搜索历史
  [types.SET_SEARCH_HISTORY](state, history) {
    state.searchHistory = history
  },
  // 播放历史，缓存读取
  [types.SET_PLAY_HISTORY](state, history) {
    state.playHistory = history
  },
  // 收藏
  [types.SET_FAVORITE_LIST](state, list) {
    state.favoriteList = list
  }
}

export default mutations
