import VConsoleWebpackPlugin from 'vconsole-webpack-plugin';

const chainWebpack = config => {
  config.plugin('vconsole').use(VConsoleWebpackPlugin, [
    {
      enable: false,
    },
  ]);
};

const CDN_HOST = '';
const BASE_PATH = '/';
const PUBLIC_PATH = `${CDN_HOST}${BASE_PATH}`;

const define = {
  BASE_HOST: '',
};

// https://umijs.org/config/
export default {
  base: BASE_PATH,
  publicPath: PUBLIC_PATH,
  cssPublicPath: PUBLIC_PATH,

  chainWebpack,
  define,
  manifest: {
    basePath: PUBLIC_PATH,
  },
  cssLoaderOptions: {
    localIdentName: '[local]--[hash:base64:5]',
  },
};
