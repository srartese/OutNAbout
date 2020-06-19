const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
},
  module:{
    rules:[
    {
      test: /\.css$/,
        use: [
          {
          
                loader: MiniCssExtractPlugin.loader,
            
            // loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
              context: path.resolve(__dirname, "src/"),
              useRelativePaths: true
            },
        
          },
          'css-loader'
        ],
    },
    {
      test: /\.(png|svg|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            context: path.resolve(__dirname, "src/"),
            outputPath: '/assets/',
            publicPath: './',
            useRelativePaths: true
          }
        }
      ]        
    },
    ]
  },
  entry: { 
      index: path.resolve(__dirname, "src", "index.js") 
    },
 plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html")
    }), 
    new MiniCssExtractPlugin({filename: 'global.css'}),
  ]
};