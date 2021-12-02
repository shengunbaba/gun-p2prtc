const webpack = require('webpack')
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.argv[2]==='dev'

module.exports = {

    entry: {
        app: [path.join(__dirname, '../src/index.js')],
    },

    output: {
        path: path.join(__dirname, '../lib'),
        filename: isDev ? 'p2pRTC.js':'p2pRTC.min.js',
    },
    mode: isDev ? 'development':'production',

    module: {
        rules: [

            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env',
                            ],
                        },
                    },
                ],
            },
        ],

    },
    resolve: {
        modules: [
            'node_modules',
            'src',
        ],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],

        alias: {},
    },

    context: path.join(__dirname, '../'),

    target: 'node',

    stats: 'errors-only',

    plugins: [
        new webpack.ProgressPlugin(),
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            'process.env': { NODE_ENV: '"development"' },
        }),
    ],
}

