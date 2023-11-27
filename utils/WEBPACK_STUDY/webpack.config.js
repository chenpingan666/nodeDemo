const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');


module.exports = {
    //打包模式（development 开发模式-使用内置）
    mode : 'development',
    //入口
    entry: path.resolve(__dirname, 'src/login/index.js'),

    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './login/index.js',
        clean: true
    },
    //插件
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/login.html'),//模板文件
            filename: path.resolve(__dirname, 'dist/login/index.html')//输出文件
        }), 
        new MiniCssExtractPlugin()

    ],
    //加载器（让webpack识别更多的模板文件内容）
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            },
            {
                test: /\.less$/i,
                use: [
                  // compiles Less to CSS
                  MiniCssExtractPlugin.loader,
                  'css-loader',
                  'less-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/i,
                type: 'asset',
                generator: {
                    filename: 'assets/[hash][ext][query]'
                }
            }
        ],
    },
    //优化
    optimization:{
        //最小化
        minimizer:[
            `...`,
            new CssMinimizerPlugin(),
        ],

    },

};