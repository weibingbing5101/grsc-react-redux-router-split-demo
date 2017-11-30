let path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin"); // 分离插件 将css和JS分离打包
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    'entry': './src/index.js',
    'devtool':'cheap-module-eval-source-map',
    'output': {
        'filename': '[name].[hash:6].js',
        chunkFilename: '[name].page.[hash:6].js',   //此处对应 router.js require.ensuer的配置
        'path': path.resolve('dist'),
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
                    use: ["css-loader", 'autoprefixer-loader', 'less-loader']
                })
            },
            { test: /\.html$/, loader: 'html-withimg-loader' }
        ]
    },
    resolve: {
        extensions: ['.jsx','.js', '.json']  // 文件拓展名
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
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"prod"'   // 注入环境
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            'name': 'common', 
            'filename': 'common.[hash:8].js'
        })
    ]
}


