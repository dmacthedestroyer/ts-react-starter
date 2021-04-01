import webpack = require('webpack')
import path = require('path')
import HtmlWebpackPlugin = require('html-webpack-plugin')
import merge = require('webpack-merge')
import common = require('./webpack.common')

const rootPath = path.resolve(__dirname, '..')

const buildConfig: webpack.Configuration = merge(common, /*setFreeVariable('process.env.NODE_ENV', 'production'),*/ {
    mode: 'production',
    devtool: 'hidden-source-map',
    optimization: {
        minimize: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: [ 'index' ],
            inject: 'body',
            inlineSource: '.(js|css)$',
            template: path.resolve(rootPath, 'src/index.ejs'),
            templateParameters: {
                title: 'TS React Starter',
                reactSource: 'https://unpkg.com/react@16/umd/react.production.min.js',
                reactDomSource: 'https://unpkg.com/react-dom@16/umd/react-dom.production.min.js',
            },
        }),
    ],
})

module.exports = buildConfig