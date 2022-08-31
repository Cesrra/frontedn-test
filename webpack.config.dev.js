const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  mode: "development",
  devtool: "source-map",
  resolve: {
    extensions: [".js"],
    alias: {
        "@utils": path.resolve(__dirname, 'src/utils/'),
        "@templates": path.resolve(__dirname, 'src/templates/'),
        "@styles": path.resolve(__dirname, 'src/styles/'),
        "@images": path.resolve(__dirname, 'src/assets/images/'),
        "@sgv": path.resolve(__dirname, 'src/assets/svg/'),
    }
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css|scss$/i,
        use: [
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "index.html",
    }),
    new MiniCssExtractPlugin(),
    new CopyPlugin({
        patterns: [
            {
              from: path.resolve(__dirname, "src", "assets/images"),
              to: "assets/images"
            },
            {
              from: path.resolve(__dirname, "src", "assets/svg"),
              to: "assets/svg"
            },
        ]
    })
  ],
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: true,
    historyApiFallback: true,
    port: 3009,
  }
};
