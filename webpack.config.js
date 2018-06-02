const webpack = require('webpack');
const path = require('path');

const clientConfig = require('./config/client-config.json');
const serverConfig = require('./config/client-config.json');

const CLIENT_PORT = `${clientConfig.port}`;
const SERVER_PORT = `${clientConfig.port}`;
const SERVER_URL = `${clientConfig.url}`;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        app: [
			path.resolve(__dirname, './client/src/index.js')
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, './build'),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css|scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=20000&name=assets/[hash].[ext]',
            }
        ]
    },
    resolve: {
        alias: {
          icons: path.resolve(__dirname, './client/src/icons/'),
          constants: path.resolve(__dirname, './constants/'),
          utils: path.resolve(__dirname, './utils/'),
          'socket-io': path.resolve(__dirname, './client/src/socket-io/'),
        },
        modules: [path.resolve(__dirname, './client/src'), 'node_modules'],
    },
    devtool: '#eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new CleanWebpackPlugin([path.resolve(__dirname, './build')]),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './public/index.html'),
        })
    ],
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        overlay: true,
        contentBase: path.resolve(__dirname, './build'),
        open: true,
        hot: true,
        hotOnly: true,
        proxy: {
            context: () => true,
            target: `${SERVER_URL}:${SERVER_PORT}`
        },
        port: CLIENT_PORT,
    },
};

module.exports = config;
