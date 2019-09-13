const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path')
const APP_DIR = path.resolve(__dirname, 'src');
const BUILD_DIR = path.resolve(__dirname, 'dist');

const mode = process.env.NODE_ENV; // production or development

var styleLoaders = mode !== 'production' ? [ 'vue-style-loader', 'css-loader', 'sass-loader' ] : [ MiniCssExtractPlugin.loader,  'css-loader', 'sass-loader'] ;

module.exports = {
    mode: mode,
    entry: ['babel-polyfill', path.join(__dirname, 'src', 'index.js')],
    output: {
        path: BUILD_DIR,
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: styleLoaders
            },
            {
                test: /\.(woff(2)?|ttf|eot|svg)(\?[a-z0-9]+)?$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/fonts/', // where the fonts will go
                        publicPath: mode !== 'production' ? 'assets/fonts' : '../fonts/' // override the default path
                    }
                }]
            },
        ]
    },
    resolve: {
        alias: { 
            vue: 'vue/dist/vue.js',
            template: APP_DIR + '/modules/template/',
        },
        extensions: ['*', '.js', '.vue', '.json'],
        modules: [
            "node_modules",  APP_DIR, 
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'index.html'),
            inject: false
        }),
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: "assets/css/style.css"
        })
    ],
    optimization: {}
}


module.exports.devtool = '#source-map'

if (mode === 'production') {

    module.exports.optimization.minimizer = (module.exports.optimization.minimizer || []).concat([
        new UglifyJsPlugin({
            cache: true,
            parallel: true,
            uglifyOptions: {
                compress: false,
                ecma: 6,
                mangle: true
            },
            sourceMap: true
        })
    ]);


    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin(BUILD_DIR),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}