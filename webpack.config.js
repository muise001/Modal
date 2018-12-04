const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");
const APP_PATH = "./src";
const PUBLIC_PATH = "./public";
const BUILD_PATH = "./dist";

module.exports = {

  mode: process.env.NODE_ENV || "development",

  entry: APP_PATH + "/app.js",

  output: {
    path: path.resolve(__dirname, BUILD_PATH),
    filename: "app.js",
    publicPath: "/"
  },

  devtool: "cheap-module-source-map",
  devServer: {
    contentBase: path.resolve("public"),
    historyApiFallback: true
  },
  resolveLoader: {
    modules: [
      path.join(__dirname, "src"),
      "node_modules"
    ]
  },

  // target: "node",
  node: {
    fs: "empty"
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: "babel-loader",
        query: {
          presets: ["preact", "es2015"]
        }
      },
      {
        test: /\.(less|css)$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([BUILD_PATH]),

    new HtmlWebpackPlugin({
      title: "Emiels video insert plugin",
      // favicon: `${PUBLIC_DIR}/favicon.ico`,
      inject: true,
      // public_url: “”,
      // Load a custom template (lodash by default see the FAQ for details)
      template: `${PUBLIC_PATH}/index.html`
    }),
  ]
}
