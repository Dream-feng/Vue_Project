// eslint-disable-next-line no-unused-expressions
!(function (doc, win) {
  let docEle = doc.documentElement // 获取html元素
  let event = 'onorientationchange' in window ? 'orientationchange' : 'resize' // 判断是屏幕旋转还是resize;
  let fn = function () {
    // var dpr = window.devicePixelRatio || 1
    let width = docEle.clientWidth
    docEle.style.fontSize = 50 * (width / 375) + 'px' // 设置html的fontSize，随着event的改变而改变。
  }
  win.addEventListener(event, fn, false)
  doc.addEventListener('DOMContentLoaded', fn, false)
}(document, window))
