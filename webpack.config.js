const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
});

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: './src/index.js', // string | object | array
  // Here the application starts executing
  // and webpack starts bundling
  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'), // string
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)
    filename: "index.bundle.js", // string
    // the filename template for entry chunks
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: 'postcss-loader' // parse and converts to a stable version of CSS
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }],
          // use style-loader in development
          fallback: "style-loader"
        })
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets : ["es2015", "react"],
            plugins: ["transform-class-properties"]
          }
        }
      },
      {
        test: /\.(svg|png|jpg)$/,
        loader: 'url-loader?limit=25000'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    extractSass,
    HtmlWebpackPluginConfig
  ]
};
