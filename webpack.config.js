var ExtractTextPlugin = require("extract-text-webpack-plugin")
var path = require('path')

module.exports = {
  entry: {
    app: ['.src/index'] 
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]
      }, 
    ] 
  },
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './build'),
    publicPath: '/build'
  },
  plugins: [
    new ExtractTextPlugin('[name].css') 
  ]
}
