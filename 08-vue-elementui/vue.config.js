module.exports = {
    publicPath: '/',
    outputDir: 'dist', //构建输出
    assetsDir: "assets",// 静态文件目录(js,css,img,font)
    lintOnSave: false, //是否开启eslint保存检测，有效值：true | false | 'error'
    devServer: {
        open: true,
        host: 'localhost',
        port: 8081,
        https: false,
        hotOnly: false,
        proxy: {
            //配置跨域
            '/api': {
                target: "http://localhost:5000/api/",
                ws: true,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        },
        // before(app) {
        //     //http://localhost:8081/api/goods
        //     app.get("/api/goods", (rep, res) => {
        //         res.json(goods);
        //     })
        //     app.get("/api/ratings", (rep, res) => {
        //         res.json(ratings);
        //     })
        //     app.get("/api/seller", (rep, res) => {
        //         res.json(seller);
        //     })
        // }
    }
}