const path = require('path')



module.exports = {
  entry: {
    server: './server.js',
  },
  output: {
    path: path.join(__dirname, 'dev-build'),
    publicPath: '/',
    filename: '[name].js',
    clean:true
  },
  mode: 'development',
  target: 'node',
//   node: {
//     // Need this when working with express, otherwise the build fails
//     __dirname: false,   // if you don't put this is, __dirname
//     __filename: false,  // and __filename return blank or /
//   },
//   externals: [nodeExternals()], // Need this to avoid error when working with Express
  module: {
    rules: [
      {
        // Transpiles ES6-8 into ES5
        test: /\.js$/,
        exclude: /node_modules/,
          loader: "babel-loader"
        
      }]},
//       {
//         // Loads the javacript into html template provided.
//         // Entry point is set below in HtmlWebPackPlugin in Plugins 
//         test: /\.html$/,
//         use: [{loader: "html-loader"}]
//       }
//     ]
//   },
//   plugins: [
//     new HtmlWebPackPlugin({
//       template: "./index.html",
//       filename: "./index.html",
//       excludeChunks: [ 'server' ]
//     })
//   ]
}