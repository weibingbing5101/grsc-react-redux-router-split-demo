let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离插件 将css和JS分离打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

console.log(path.resolve('dist')); // /Users/weiweibing/z_各种demo/px_webpack/dist
console.log(__dirname); // /Users/weiweibing/z_各种demo/px_webpack
console.log(path.resolve(__dirname, 'dist')); // /Users/weiweibing/z_各种demo/px_webpack/dist

module.exports = {
    'entry': './src/index.js',
    'devtool':'cheap-module-eval-source-map',
    'output': {
        'filename': '[name].[hash:6].js',
        chunkFilename: '[name].[hash:6].js',   //此处对应 router.js require.ensuer的配置
        'path': path.resolve('dist'), // css js html打包存放的 绝对路径
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(jpg|gif|png)$/, use: ['url-loader?limit=8192&name=imgs/[name].[hash:8].[ext]'] },
            // { test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, use: ['url-loader?limit=10000&name=font/[name].[ext]'] },
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
                    use: ["css-loader", 'autoprefixer-loader', 'less-loader']
                })
            },
            // { test: /\.html$/, loader: 'html-withimg-loader' }
        ]
    },
    resolve: {
        extensions: ['.jsx','.js', '.json'],
        // alias: {
        //   'src': path.resolve(__dirname, '../src'),
        //   'assets': path.resolve(__dirname, '../src/assets'),
        //   'scss': path.resolve(__dirname, '../src/scss')
        // }
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"'
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            'name': 'common', 
            'filename': 'common.[hash:8].js'
        })
    ],
    devServer: {
        port: 9899,
        compress: true, // 启用Gzip压缩
        noInfo: true // 只在热加载错误和警告
    }
}


