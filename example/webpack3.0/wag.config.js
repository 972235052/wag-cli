module.exports = {
  // 编译文件入口
  "files": {
    "pages/home/src/main.js": 1
  },

  /**  生产配置  **/
  // 是否提取css,默认不提取
  "extractCSS": true,
  "vendor": true,
  // 是否生成source-map
  "devtool": false,
  // 线上访问地址
  "publicPath": "/",
  // 分析块之间的依赖
  "bundleAnalyzerReport": false,

  /**  开发配置  **/
  // 入口文件
  "index": "pages/home/index.html",
  // 请求api
  "mockTable": {
    '/api': 'mocks/api.js'
  }
}
