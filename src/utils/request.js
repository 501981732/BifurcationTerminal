import config from '@/config/index.js'

export function request(obj) {
  obj['header'] = obj.head || {};
  obj.header['content-type'] = obj.header['content-type'] || "application/json"
  obj.url = config.HTTPPROTOCOL + config.HOST + obj.url
  obj.header['token'] = app.globalData.token
  obj.method = obj.method || "POST"
  wx.request(obj)
}