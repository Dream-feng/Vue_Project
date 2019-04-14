export const singer = state => state.singer

// 音乐播放所需参数
export const playing = state => state.playing
export const fullScreen = state => state.fullScreen
export const playlist = state => state.playlist
export const sequenceList = state => state.sequenceList
export const mode = state => state.mode
export const currentIndex = state => state.currentIndex
export const currentSong = state => {
  return state.playlist[state.currentIndex] || {}
}
// 歌单详情
export const disc = state => state.disc
// 排行
export const topList = state => state.topList
// 搜索历史
export const searchHistory = state => state.searchHistory
// 播放历史，缓存读取
export const playHistory = state => state.playHistory
// 收藏
export const favoriteList = state => state.favoriteList
