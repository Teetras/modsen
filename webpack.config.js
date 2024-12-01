/* eslint-disable no-undef */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require("path");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },

      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/,
        use: "svg-url-loader",
      },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
