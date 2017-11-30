let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离插件 将css和JS分离打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var PurifyCSSPlugin = require('purifycss-webpack');
var glob = require('glob-all');

console.log(path.resolve('dist')); // /Users/weiweibing/z_各种demo/px_webpack/dist
console.log(__dirname); // /Users/weiweibing/z_各种demo/px_webpack
console.log(path.resolve(__dirname, 'dist')); // /Users/weiweibing/z_各种demo/px_webpack/dist

module.exports = {
    'entry': './src/index.jsx',
    'output': {
        'filename': 'bundle.[hash].js',
        'path': path.resolve('dist'), // css js html打包存放的 绝对路径
        // 'publicPath': '/static/',  // cdn 静态资源服务器地址  
        // <img src="/assets/images/f063efbf.goopal_logo.png" alt="">
        // <script type="text/javascript" src="/assets/bundle4e55895415e911048f2b.js"></script>
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },

            { test: /\.(jpg|gif|png)$/, use: ['file-loader?limit=8000&name=images/[name].[hash:8].[ext]'] },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", 'autoprefixer-loader']
                })
            },

            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                    {
                        loader: 'css-loader',
                        options: {
                            localIdentName: '[local]',    // [path][name][local][hash:base64:5]
                            modules: true
                        }
                    }, 
                    'autoprefixer-loader', 'less-loader']
                })
            },
            { test: /\.html$/, loader: 'html-withimg-loader' }
        ]
    },
    resolve: {
        extensions: ['jsx','.js', '.json']  // 文件拓展名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html',
            inject: true
        }),
        new ExtractTextPlugin({
            filename: "[name][hash].css",
            disable: false,
            allChunks: true,
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync([
                path.join(__dirname, './index.html'),
                path.join(__dirname, './src/**/*.jsx')
            ]),
            // minimize: true,  // 压缩
            purifyOptions:{
                info: true,     // 显示信息
                // whitelist: ['*']
            }
        })
    ]
}

*/
