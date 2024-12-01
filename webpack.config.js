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
    extensions: [".js", ".jsx"],

    alias: {
      "@": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@constants": path.resolve(__dirname, "src/constants"),
      "@context": path.resolve(__dirname, "src/context"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@utils": path.resolve(__dirname, "src/utils"),
    },
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
