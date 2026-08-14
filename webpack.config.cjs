const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production'

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      chunkFilename: isProd ? 'js/[name].[contenthash:8].js' : 'js/[name].js',
      publicPath: '',
      clean: true
    },
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        // Runtime-only build: templates are compiled at build time by
        // vue-loader, so the compiler never ships to the browser.
        vue$: 'vue/dist/vue.runtime.esm-bundler.js'
      }
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: 'vue-loader' },
        {
          test: /\.css$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            { loader: 'css-loader', options: { importLoaders: 1 } }
          ]
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new webpack.DefinePlugin({
        // Vue and vue-i18n read these to tree-shake features we do not use.
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false',
        __VUE_I18N_FULL_INSTALL__: 'true',     // registers <i18n-t>, which the page uses
        __VUE_I18N_LEGACY_API__: 'false',      // composition API only
        __INTLIFY_PROD_DEVTOOLS__: 'false',
        __INTLIFY_DROP_MESSAGE_COMPILER__: 'false'
      }),
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: 'head',
        scriptLoading: 'defer',
        minify: isProd && {
          collapseWhitespace: true,
          removeComments: false,      // the head comments explain the meta blocks
          removeRedundantAttributes: false,
          keepClosingSlash: true,
          minifyJS: true
        }
      }),
      ...(isProd
        ? [new MiniCssExtractPlugin({ filename: 'css/[name].[contenthash:8].css' })]
        : []),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public',
            to: '.',
            globOptions: { ignore: ['**/index.html'] },   // that one goes through HtmlWebpackPlugin
            noErrorOnMissing: false
          },
          // GitHub Pages would otherwise run the output through Jekyll.
          { from: 'public/CNAME', to: 'CNAME', toType: 'file' }
        ]
      })
    ],
    optimization: {
      splitChunks: {
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'initial'
          }
        }
      }
    },
    performance: {
      // The vendor chunk is Vue + vue-i18n; the budget below flags real growth.
      maxEntrypointSize: 300000,
      maxAssetSize: 300000
    },
    devtool: isProd ? false : 'eval-cheap-module-source-map',
    devServer: {
      static: { directory: path.resolve(__dirname, 'public') },
      port: 5173,
      open: false,
      hot: true
    }
  }
}
