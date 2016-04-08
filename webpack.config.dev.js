var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  debug: true,
  entry: [
    './src/index'
  ],
  output: {
    path: process.cwd(),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      favicon:path.join(__dirname,'src/favicon.ico'),
      title: "JackHu's blog vue版",
      template: path.join(__dirname,'src/index.html'),
      inject: true
    }),
    new ExtractTextPlugin('[hash:8].style.css', { allChunks: true })
  ],
  module: {
    preLoaders: [
      { test: /\.js$/, loader: "eslint-loader", exclude: /node_modules/ }
    ],
    loaders: [
      { test: /\.vue$/,loader: 'vue', include: path.join(__dirname,'src')}, 
      { test: /\.js$/, loader: 'babel', exclude: /node_modules|vue\/dist|vue-hot-reload-api|vue-router\/|vue-loader/}, 
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap' ) },
      { test: /\.(jpe?g|png|gif)$/i, loaders: [
        'url?limit=10000&name=images/[hash:8].[name].[ext]',
        'image-webpack?{progressive:true, optimizationLevel: 7, interlaced: false, pngquant:{quality: "65-90", speed: 4}}'
      ]},
      { test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url?limit=10000&name=fonts/[hash:8].[name].[ext]'}
    ]
  },
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  },
  eslint: {
    configFile: './.eslintrc.json'
  },
  resolve: {
    root: path.resolve(__dirname, 'node_modules'),
    extensions: ['','.js','.vue','.scss']
  }
}