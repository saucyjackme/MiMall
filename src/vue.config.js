module.exports = {
  devServer: {
    host:'localhost',
    port:8080,
    // 添加代理接口
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite: {
          '/api':''
        }
      }
    }
  }
}
