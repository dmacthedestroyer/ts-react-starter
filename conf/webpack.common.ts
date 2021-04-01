import path from 'path'
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
import TsConfigPathsPlugin from 'tsconfig-paths-webpack-plugin'
import webpack = require('webpack')

const rootPath = path.resolve(__dirname, '..')
const entryPath = path.resolve(rootPath, 'src/index.tsx')
const outputPath = path.resolve(rootPath, './public')

const commonConfig: webpack.Configuration = {    
    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        plugins: [
            new TsConfigPathsPlugin({
                configFile: path.resolve(rootPath, './tsconfig.json'),
            }),
        ],
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
            include: [path.resolve(rootPath, './asset')],
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
            tsconfig: path.resolve(rootPath, './tsconfig.json'),
        }),
    ],
}

module.exports = commonConfig