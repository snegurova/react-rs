const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
    assetModuleFilename: 'assets/[name][ext]',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.[tj]s$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
        },
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|png|svg|jpg|jpeg|gif)$/i,
        // use: [ "file-loader"]
        type: 'asset/resource',
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
};