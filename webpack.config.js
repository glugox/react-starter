const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const webpack = require('webpack');


module.exports = (env, options) => {

    console.log(`This is the Webpack 4 'mode': ${options.mode}`);

    const isProduction = options.mode === 'production'
    const isDev = options.mode === 'development'

    return {

        mode: options.mode,
        devtool: isProduction ? 'source-map' : 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            disableHostCheck: true
        },
        entry:  {
            index: './src',
        },
        output: {
            publicPath: isProduction ? './' : '/',
            filename: isProduction ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
            path: path.join(__dirname, './dist'),
            chunkFilename: isProduction ? '[name].[chunkhash].bundle.js' : '[name].bundle.js',
        },
        resolve: {
            alias: {
                '../../theme.config$': path.join(__dirname, 'semantic-glugate/theme.config'),
                'react-dom': '@hot-loader/react-dom'
            }
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env'],
                            plugins: ['react-hot-loader/babel']
                        }
                        
                    }
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg|ttf|eot|ico)$/,
                    loader: 'file-loader'
                },
                {
                    test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                    loader: 'url-loader?limit=10000&mimetype=application/font-woff'
                },
                {
                    test: /\.otf(\?.*)?$/,
                    use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
                },
                {
                    test: /\.(css|scss)$/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "sass-loader"
                    ]
                },
                {
                    test: /\.less$/,
                    use: [
                      {
                        loader: MiniCssExtractPlugin.loader
                      },
                      'css-loader',
                      'less-loader'
                    ]
                },
                {
                    test: /\.svg$/,
                    loader: 'svg-inline-loader'
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader'
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new MiniCssExtractPlugin(),
            new HtmlWebPackPlugin({
                template: "./public/index.html"
            }),
            new CleanWebpackPlugin()
            
        ],
        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                            name: 'vendor',
                            chunks: 'initial'
                    }
                }
            },
            runtimeChunk: {
                name: 'manifest'
            },
            minimizer: [
                new UglifyJsPlugin({
                    sourceMap: true,
                    uglifyOptions: {
                        ecma: 8,
                        mangle: false,
                        keep_classnames: true,
                        keep_fnames: true
                    }
                })
            ]
        }
    }
}