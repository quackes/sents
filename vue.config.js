module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9080',
        secure: false,
        ws: true,
        changeOrigin: true
      }
    }
  }
};
