// 引入path模块
const path = require('path')


// 把整个配置暴露出去
module.exports = {
    // 入口 [以这个文件为入口 开始打包]
    entry: "./modules/main.js",

    // 出口
    output: {
        path: path.resolve(__dirname, 'dist'),   // 要输出的路径  必须是一个绝对路径
        filename: "./js/bundle.js",	// 输出的文件名，最终打包出来的文件 叫什么名字（bundle）
        publicPath: "./"
    },

    // 模式
    mode: "development",  // 开发模式
}