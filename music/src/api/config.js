const commonParams = { // 公共参数
  g_tk: 5381,
  inCharset: 'utf-8',
  outCharset: 'utf-8',
  notice: 0,
  format: 'jsonp'
}

const options = { // jsonp 参数
  param: 'jsonpCallback'
}

const ERR_OK = 0

export {commonParams, options, ERR_OK}
