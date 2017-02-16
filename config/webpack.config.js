module.exports = {
  entry: {},
  output: {
    path: '/',
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js'
  },
  module: {
    loaders: [
      {name: 'css', test: /\.css$/, loader: "style!css"},
      {name: 'styl', test: /\.styl$/, loader: "style!css!stylus"},
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ['es2015']
        },
        plugins: ['transform-runtime', "transform-vue-jsx"]
      },
      {test: /\.html$/, loader: "html"},
      {test: /\.vue$/, loader: 'vue'},
      {test: /\.(png|jpg|gif|eot|woff|ttf)$/, loader: 'url'},
      {test: /\.(mp4|ogg|svg|mp3)$/, loader: 'file'}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    },
    extensions: ['', '.js', '.json', '.vue']
  },
  plugins: [],
  devtool: "source-map"
}
