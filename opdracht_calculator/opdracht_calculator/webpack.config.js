const HtmlWebPackPlugin = require("html-webpack-plugin");
var path = require('path');
module.exports = {
      mode: 'development',
      entry: './src/modules/app.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'foo.bundle.js'
      },
      module: {
        rules: [{
              test: /\.html$/,
              use: [{
                loader: "html-loader",
                options: {minimize: true}
            }]
          },
        ]
      },
      plugins: [
        new HtmlWebPackPlugin({
          template: "./src/calculator.html",
          filename: "./calculator.html"
        }),
      ]
}
