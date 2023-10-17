/*
This computer program, as defined in the Copyright, Designs and Patents Act 1998 and the Software Directive (2009/24/EC), 
is the copyright of Logic Valley Ltd, a wholly owned subsidiary of Marston (Holdings) Ltd. All rights are reserved.
*/

/*
  Webpack configs allow you to configure and extend Webpack's basic functionality like Application's environment, entry file, port number, host.
  A Webpack config is a JavaScript object that configures one of Webpack's options.
  We define Webpack config in a top-level webpack.
  webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
  #mode       : Application environment
  #entry      : Starting page of application
  #output     : Build file
  #devServer  : Server Configuration
  #env        : Application current environment
*/

const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
module.exports = ({ NODE_ENV }, { APP_ENV }) => ({
  mode: NODE_ENV || 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].chunk.js',
    path: path.resolve(__dirname, 'dist'), // Output build directory name
    publicPath: '/', // The bundled files will be available in the browser under this path.
  },
  plugins: [
    new CleanWebpackPlugin(), // Remove HTML file and re-create on each build
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'async',
    }), // Load bundle scripts asynchronously

    // id - Azure App Resource Id
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: JSON.stringify(APP_ENV || 'DEV'),
        APP_APPINSIGHTKEY: JSON.stringify(
          APP_ENV?.toString()?.toLowerCase() === 'qa'
            ? 'id'
            : APP_ENV?.toString()?.toLowerCase() === 'uat'
            ? 'id'
            : 'id'
        ),
      },
    }),
    new CopyPlugin({
      patterns: [
        { from: 'src/configs/config.json', to: 'config.json' },
        { from: './public', to: './public' },
      ],
    }),
  ],
  devServer: {
    // host: '0.0.0.0', // Uncomment this, If you want your server to be accessible externally(Mobile etc.)
    port: 3000, // Port number to listen for requests
    open: true, // To open the browser after server had been started
    //contentBase: path.join(__dirname, './public'), // where to serve content(static files) from,
    static: {
      directory: path.join(__dirname, 'public'),
    },
    //inline: true, // Inject scripts into the bundle to show live reloading and build messages in the browser console.
    hot: true, // Enables HMR
    historyApiFallback: true, // In case 404 responses, root(index.html) file will be served,
  },
  devtool: NODE_ENV === 'production' ? false : 'source-map', // How source codes are mapped/shown in the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|png|svg|jpg|gif|woff|woff2|otf)$/,
        use: ['file-loader'],
      },
      {
        test: /\.(config)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
})
