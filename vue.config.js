module.exports = {
  chainWebpack: config => {
    config.module
      .rule('pdf')
      .test(/\.pdf$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/[name].[hash:8].[ext]'
      });
  },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.pdf$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]'
              }
            }
          ]
        }
      ]
    }
  }
};