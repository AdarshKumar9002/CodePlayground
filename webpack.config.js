const path = require('path');

module.exports = {
  entry: './script.js', // Entry point for your application
  output: {
    filename: 'bundle.js', // Output bundled file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: []
  },
  resolve: {
    extensions: ['.js']
  },
  devServer: {
    static: {
      directory: path.join(__dirname), // Serve files from the root directory
    },
    compress: true,
    port: 8080,
  },
  mode: 'development' // Use 'production' for optimized builds
};
