const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.module.rules.push({
        test: /\.(png|jpe?g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'static/media/client-logo',
              publicPath: 'static/media/client-logo',
            },
          },
        ],
      });

      return webpackConfig;
    },
  },
};
