var path = require('path')
var gulp = require('gulp')
var gutil = require('gulp-util')
var WebpackDevServer = require('webpack-dev-server')
var webpack = require('webpack')
var del = require('del')
var env = require('gulp-env')
var gulpSequence = require('gulp-sequence')
var nodemon = require('gulp-nodemon')
var open = require('open')

var DEV_PORT = 3000,PROD_PORT = 8400
gulp.task('serve', function () {
  var webpackConfig = require('./webpack.config')
  var myConfig = Object.create(webpackConfig)
  myConfig.entry.unshift('webpack/hot/only-dev-server')
  myConfig.entry.unshift('webpack-dev-server/client?http://localhost:' + DEV_PORT)
  new WebpackDevServer(webpack(myConfig), {
      noInfo: false,
      hot: true,
      inline: true,
      historyApiFallback: true,
      publicPath: myConfig.output.publicPath,
      stats: {
        colors: true
      }
  }).listen(DEV_PORT, 'localhost', function (err) {
      if(err) throw new gutil.PluginError('webpack-dev-server', err)
      gutil.log('[webpack-dev-server]', '==> 🌎  http://localhost:' + DEV_PORT)
      open('http://localhost:' + DEV_PORT)
  })
})

gulp.task('clean', function () {
  del([path.join(__dirname, '/dist/*')])
})

gulp.task('set-env-prod', function () {
  env({
    vars: {
      'NODE_ENV':'production'
    }
  })
})

gulp.task('webpack', function (callback) {
  var config = require('./webpack.config')
  webpack(config, function(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err)
    gutil.log("[webpack]", stats.toString({
        // output options
    }))
    callback()
  })
})

gulp.task('webpack:dist',gulpSequence('set-env-prod','webpack'))

gulp.task('build', gulpSequence('clean','webpack:dist'))

gulp.task('nodemon', function () {
  nodemon({
    script: path.join(__dirname,'/server.js'), 
    ext: 'js',
    watch: [
     path.join(__dirname,'/dist')
    ],
    env: { 'NODE_ENV': 'production','PORT':PROD_PORT }
  }) 
})

gulp.task('serve:dist',gulpSequence('build','nodemon'))