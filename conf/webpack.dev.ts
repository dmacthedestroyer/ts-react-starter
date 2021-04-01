import webpack = require('webpack')
import path = require('path')
import HtmlWebpackPlugin = require('html-webpack-plugin')
import merge = require('webpack-merge')
import common = require('./webpack.common')

const rootPath = path.resolve(__dirname, '..')

const devConfig: webpack.Configuration = merge(common, {
    devtool: 'source-map',
    mode: 'development',
    devServer: {
        stats: 'minimal',
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: [ 'index' ],
            inject: 'body',
            inlineSource: '.(js|css)$',
            template: path.resolve(rootPath, 'src/index.ejs'),
            templateParameters: {
                title: 'TS React Starter',
                reactSource: 'https://unpkg.com/react@16/umd/react.development.js',
                reactDomSource: 'https://unpkg.com/react-dom@16/umd/react-dom.development.js',
            },
        }),
    ],
})

module.exports = devConfig