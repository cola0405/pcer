module.exports = {
    devServer: {
        port: 8081,
        host: '0.0.0.0',
        proxy: {
            '/': {
                // url 这里会做拼接
                target: 'http://localhost:8080/',  //目标服务器端口
                changeOrigin: true,
                pathRewrite: {
                    '^/': '/'  // 不可省
                }
            }
        }
    }
}