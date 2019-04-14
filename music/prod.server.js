// webpack.dev.conf.js
// 后端代理
const axios = require('axios')
const express = require('express')
const app = express() // 请求server
const apiRoutes = express.Router()
app.use('/api', apiRoutes) // 通过路由请求数据

app.get('/api/getDiscList', (req, res) => {
  // res 传入值
  const url = 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg'
  axios
    .get(url, {
      headers: {
        // 发送 http 请求修改请求头 -- 欺骗手段
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      // response 返回值
      res.json(response.data)
    })
    .catch(e => {
      console.log('axios err' + e)
    })
})

app.get('/api/lyric', (req, res) => {
  // res 传入值
  const url = 'https://c.y.qq.com/lyric/fcgi-bin/fcg_query_lyric_new.fcg'
  axios
    .get(url, {
      headers: {
        // 发送 http 请求修改请求头 -- 欺骗手段
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      // response 返回值
      var ret = response.data
      if (typeof ret === 'string') {
        var reg = /^\w+\(({[^()]+})\)$/
        var matches = ret.match(reg)
        if (matches) {
          ret = JSON.parse(matches[1])
        }
      }
      res.json(ret)
    })
    .catch(e => {
      console.log('axios err' + e)
    })
})

app.get('/api/getSongList', (req, res) => {
  // res 传入值
  const url = 'https://c.y.qq.com/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg'
  axios
    .get(url, {
      headers: {
        // 发送 http 请求修改请求头 -- 欺骗手段
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      // response 返回值
      res.json(response.data)
    })
    .catch(e => {
      console.log('axios err' + e)
    })
})

app.get('/api/search', (req, res) => {
  // res 传入值
  const url = 'https://c.y.qq.com/soso/fcgi-bin/search_for_qq_cp'
  axios
    .get(url, {
      headers: {
        // 发送 http 请求修改请求头 -- 欺骗手段
        referer: 'https://c.y.qq.com/',
        host: 'c.y.qq.com'
      },
      params: req.query
    })
    .then(response => {
      // response 返回值
      res.json(response.data)
    })
    .catch(e => {
      console.log('axios err' + e)
    })
})

// 端口
app.use(express.static('./dist'))

// 开启服务
var config = require('./config/index')
var port = process.env.PORT || config.build.port

module.exports = app.listen(port, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
