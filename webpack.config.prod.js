const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.config.common.js');

let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离插件 将css和JS分离打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = function(){
    return webpackMerge(
        commonConfig(),{
        'output': {
            publicPath: './'
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': '"prod"'
            })
        ],
    })
}





// let path = require('path');
// var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离插件 将css和JS分离打包
// var HtmlWebpackPlugin = require('html-webpack-plugin');
// var webpack = require('webpack');

// module.exports = {
//     'entry': './src/index.js',
//     'devtool':'cheap-module-eval-source-map',
//     'output': {
//         'filename': '[name].[hash:8].js',
//         chunkFilename: '[name].page.[hash:8].js',
//         'path': path.resolve('dist'),
//         publicPath: './',
//     },
//     module: {
//         rules: [
//             { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
//             { test: /\.(jpg|gif|png)$/, use: ['url-loader?limit=8192&name=imgs/[name].[hash:8].[ext]'] },
//             {
//                 test: /\.css$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: "style-loader",
//                     use: ["css-loader", 'autoprefixer-loader']
//                 })
//             },
//             {
//                 test: /\.less$/,
//                 use: ExtractTextPlugin.extract({
//                     fallback: "style-loader",
//                     use: ["css-loader", 'autoprefixer-loader', 'less-loader']
//                 })
//             },
//             // { test: /\.html$/, loader: 'html-withimg-loader' }
//         ]
//     },
//     resolve: {
//         extensions: ['.jsx','.js', '.json'],
//         // alias: {
//         //   'src': path.resolve(__dirname, '../src'),
//         //   'assets': path.resolve(__dirname, '../src/assets'),
//         //   'scss': path.resolve(__dirname, '../src/scss')
//         // }
//     },
//     plugins: [
//         new HtmlWebpackPlugin({
//             template: 'index.html',
//             inject: true
//         }),
//         new ExtractTextPlugin({
//             filename: "[name].[hash:8].css",
//             disable: false,
//             allChunks: true,
//         }),        
//         new webpack.DefinePlugin({
//             'process.env.NODE_ENV': '"prod"'
//         }),
//         new webpack.NoEmitOnErrorsPlugin(),
//         new webpack.optimize.CommonsChunkPlugin({
//             'name': 'common', 
//             'filename': 'common.[hash:8].js'
//         })
//     ]
// }






















