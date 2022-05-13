const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
  },

  entry: ["./src/index.js"],
  output: {
    filename: "[name].[contenthash].app.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/",
  },

  mode: "development",
  optimization: {
    usedExports: true,
  },

  module: {
    rules: [
      {
        test: /(\.js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: "file-loader",
        options: {
          name: "fonts/[name].[ext]",
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|webp|pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {},
          },
        ],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    host: "0.0.0.0",
    port: 5004,
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./src/assets/index.html" }),
    new CopyPlugin({
      patterns: [
        { from: "./src/assets/img/favicon", to: "./favicon" },
        { from: "./src/assets/robots.txt", to: "./" },
        { from: "./src/assets/sitemap.xml", to: "./" },
        { from: "./src/assets/pdf/", to: "./pdf" },
      ],
    }),
  ],
};