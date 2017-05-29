const webpack = require("webpack");
const autoprefixer = require('autoprefixer');
const path = require('path');

const BUILD = './dist';
const ROOT = './src';
const TARGET = process.env.npm_lifecycle_event;
let DEVTOOL = 'eval';

const PLUGINS = [
  new webpack.ProvidePlugin({
    '$': 'jquery',
    'jQuery': 'jquery',
    'window.Tether': 'tether',
    'Tether': 'tether'
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' })
];

if(TARGET === 'prod'){
  DEVTOOL = '#cheap-module-source-map';
  PLUGINS.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
      'BABEL_ENV': JSON.stringify('production')
    }
  }));
}

module.exports = {

  devtool: DEVTOOL,

  context: path.resolve(__dirname, ROOT),

  entry: {
    app: './init.js',

    vendor: [
      'babel-polyfill',
      'whatwg-fetch',
      'axios',
      'jquery',
      'tether',
      'bootstrap',
      'react',
      'react-dom',
      'redux',
      'react-redux',
      'moment',
      'react-date-picker'
    ]
  },

  output: {
    path: path.resolve(__dirname, BUILD),
    filename: "[name].js"
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|test)/,
        loader: 'babel-loader',
        query: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread']
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css'
            }
          },
          'extract-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
          limit: 10000,
          mimetype: 'application/font-woff'
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'file-loader',
        options: {
          name: 'imgs/[name].[ext]'
        }
      }
    ]
  },

  plugins: PLUGINS,

  devServer: {
    contentBase: path.join(__dirname, BUILD),
    compress: true,
    port: 8081,
    watchContentBase: true,
    clientLogLevel: 'error'
  }

};
