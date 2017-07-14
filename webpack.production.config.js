var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //// devtool: 'eval-source-map', // 生成Source Maps

    entry: __dirname + '/app/main.js', // 已多次提及的唯一入口文件

    output: {
        path: __dirname + '/public', // 打包后的文件存放的地方
        filename: 'bundle.js' // 打包后输出文件的文件名
    },

    module: {
        // loaders: [
        rules: [
            {
                test: /\.json$/,
                // loader: 'json'
                loader: 'json-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
               // loader: 'babel',
               // query: {
               //     presets: ['es2015', 'react']
               // }
            },
            {
                test: /\.css$/,
               // loader: 'style!css?modules!postcss',
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins: (loader) => [
                                require('autoprefixer')
                            ]
                        }
                    }
                ]
            }
        ] 
    },

   // postcss: [
   //     require('autoprefixer')
   // ],

    plugins: [
        new webpack.BannerPlugin('Copyright (c) 2017 angoz.com, All Rights Reserved.'), // 添加版权声明的插件
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.tmpl.html'
        }),
        new webpack.HotModuleReplacementPlugin(), // 热加载插件
        // new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin(),
        // new ExtractTextPlugin("style.css")
        new ExtractTextPlugin("[name]-[hash].css")
    ]

   //// devServer: {
   ////     host: '0.0.0.0', // 本地服务器地址，默认为localhost
   ////     port: 8080, // 本地服务器端口，默认为8080
   ////     disableHostCheck: true, // 不检测非内置hostname
   ////     contentBase: './public', // 本地服务器所加载的页面所在的目录
   ////     // colors: true, // 终端中输出结果为彩色
   ////     stats: {
   ////         colors: true, // 终端中输出结果为彩色
   ////     },
   ////     historyApiFallback: true, // 不跳转
   ////     inline: true // 实时刷新
   //// }
};
