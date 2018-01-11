// webpack.config.js
const path = require("path");
const webpack = require("webpack");
const HtmlwebpackPlugin = require("html-webpack-plugin");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");

const SRC_PATH = path.resolve(__dirname, "src");
const BUILD_PATH = path.resolve(__dirname, "build");
const EXAMPLE_PATH = path.resolve(__dirname, "example");
const EXAMPLE_SRC_PATH = path.resolve(__dirname, "example/src");

module.exports = {
  // Source Maps("source-map|cheap-module-source-map|eval-source-map|cheap-module-eval-source-map")
  devtool: "cheap-module-source-map",
  entry: {
    // webpack: [
    //   "webpack-dev-server/client?http://0.0.0.0:8080",
    //   "webpack/hot/only-dev-server"
    // ],
    index: path.resolve(EXAMPLE_SRC_PATH, "index.jsx")
  },
  output: {
    path: BUILD_PATH,
    filename: "[name].js"
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        include: [SRC_PATH, EXAMPLE_SRC_PATH],
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: '"production"',
        ERROR_ENV: '"development"'
      }
    }),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   },
    //   sourceMap: true
    // }),
    new OpenBrowserPlugin({ url: "http://localhost:8080" }),
    new webpack.BannerPlugin(
      "Copyright © 2017 by Chyrain. All rights reserved."
    ),
    new HtmlwebpackPlugin({
      template: path.resolve(EXAMPLE_PATH, "./index.html"),
      filename: "index.html",
      inject: "body"
    })
  ]
};
