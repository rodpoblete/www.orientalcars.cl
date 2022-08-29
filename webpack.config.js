const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    alias: {
      helpers: path.resolve(__dirname, "src/helpers"),
    },
  },

  entry: ["./src/index.jsx"],
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
        type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, "build"),
    },
    host: "0.0.0.0",
    port: 5007,
    historyApiFallback: true,
  },
  plugins: [new HtmlWebpackPlugin({ template: "./src/assets/index.html" })],
};
