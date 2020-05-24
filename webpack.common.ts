import path = require('path')
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
import HtmlWebpackPlugin = require('html-webpack-plugin')
import webpack = require('webpack')

const assetPath = path.resolve(__dirname, './asset')
const entryPath = path.resolve(__dirname, './src/index.tsx')
const templatePath = path.resolve(__dirname, './src/index.ejs')
const outputPath = path.resolve(__dirname, './public')

const commonConfig: webpack.Configuration = {    
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        alias: {
            component: path.resolve(__dirname, 'src/component'),
            util: path.resolve(__dirname, 'src/util'),
            interface: path.resolve(__dirname, 'src/interface'),
        }
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'ts-loader',
        }, {
            enforce: 'pre',
            test: /\.js$/,
            loader: 'source-map-loader',
        }, {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader?sourceMap'],
        }, {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
        }, {
            include: [assetPath],
            test: /\.(png|svg|jpg|jpeg|otf|eot|woff2?|svg|ttf|js|json|webp|ico|webm)$/,
            use: {
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
        }]
    },
    externals: {
        react: 'React',
        'react-dom': 'ReactDOM',
    },
    entry: {
        index: entryPath,
    },
    output: {
        filename: 'bundle.[hash].js',
        path: outputPath,
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin({
            tsconfig: path.resolve(__dirname, './tsconfig.json'),
        }),
    ],
}

module.exports = commonConfig