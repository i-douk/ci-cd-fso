/* eslint-disable no-undef */
import HtmlWebPackPlugin from "html-webpack-plugin";
import { resolve as _resolve } from 'path';

export const entry = "./src/index.jsx";
export const output = {
  path: _resolve(__dirname, 'dist'),
  filename: 'bundle.js',
  publicPath: '/'
};
export const module = {
  rules: [
    {
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: "babel-loader",
      },
    },
    {
      test: /\.html$/,
      use: [
        {
          loader: "html-loader",
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
      ],
    }
  ],
};
export const resolve = {
  extensions: ["*", ".js", ".jsx"],
};
export const devServer = {
  historyApiFallback: true,
};
export const plugins = [
  new HtmlWebPackPlugin({
    template: "./public/index.html",
    filename: "./index.html",
  }),
];
