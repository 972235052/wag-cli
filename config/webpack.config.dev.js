var webpack = require("webpack");
var util = require("../util/util")
var webpackConfig = require("./webpack.config.base").webpackConfig;

module.exports = Object.assign({}, webpackConfig, {
  output: Object.assign({}, webpackConfig.output, {
    //在生成的文件中添加原来文件的名字,方便调试
    pathinfo: true

  }),
  module: {
    rules: webpackConfig.module.rules.concat(
      //vue
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      util.stlyeRules(true)
    )
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"development"'
      }
    })
  ],
  devtool: '#cheap-module-source-map',
  performance: {
    hints: false
  },
  watch: true
})
