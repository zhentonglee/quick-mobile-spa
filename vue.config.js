const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}

module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtorem({
            rootValue: 37.5,
            propList: ['*']
          })
        ]
      }
    }
  },
  chainWebpack: config => {
    // eslint-loader配置
    config.module
      .rule('eslint')
      .use('eslint-loader')
      .loader('eslint-loader')
      .tap(options => {
        options.formatter = require('eslint-friendly-formatter')
        options.emitWarning = false
        options.fix = true
        return options
      })
    // 打包输出文件名
    config.output.filename('js/[name].[hash:8].js').end()
    config.output.chunkFilename('js/[name].[hash:8].js').end()
    // 相对路径别名
    config.resolve.alias
      .set('@', resolve('src'))
  },
  productionSourceMap: false,
  devServer: {
    proxy: 'http://39.108.116.189:8089'
  }
}
