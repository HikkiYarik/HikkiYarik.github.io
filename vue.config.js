module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/HikkiYarik/'
      : '/dist/index.html'
  }