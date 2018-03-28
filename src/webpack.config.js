let Encore = require('@symfony/webpack-encore');
let HtmlWebpackPlugin = require('html-webpack-plugin');

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');

Encore

    .setOutputPath('../build/')
    .setPublicPath('/frontend/build/')

    .enableSassLoader(function (sassOptions) {
    }, {
        resolveUrlLoader: false
    })

    /*.addLoader({
      test: /\.scss$/,
      use: ['css-hot-loader'].concat(ExtractTextWebpackPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader', 'sass-loader'],
      })),
    })*/

    /*.addLoader({
        test: /\.css$/,
        use: [ 'style-loader', 'postcss-loader' ]
      })*/

    .enableVueLoader()

    .autoProvidejQuery()

    .enableSourceMaps(!Encore.isProduction())

    .cleanupOutputBeforeBuild()

    .enableBuildNotifications()

    .enablePostCssLoader((options) => {
        options.config = {
            path: 'postcss.config.js'
        };
    })

    //.enableVersioning()

    .addLoader({
        test: /\.html$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]',
        }
    })
    .addLoader({
        test: /\.html$/,
        loader: 'extract-loader'
    })
    .addLoader({
        test: /\.html$/,
        loader: 'html-loader'
    })

    .createSharedEntry('vendor', [
        'jquery',
        'swiper',
        'lodash',
        'axios',
        'normalize.css',
        'bootstrap/scss/bootstrap-grid.scss'
    ])

    .addEntry('pages/index/noauth/app', './pages/index/noauth/app.js')
    .addEntry('pages/index/auth/app', './pages/index/auth/app.js')
    .addEntry('pages/index/styleguide/app', './pages/index/styleguide/app.js')

;

let config = Encore.getWebpackConfig();
config.watchOptions = {poll: true, ignored: /node_modules/};

module.exports = config;
