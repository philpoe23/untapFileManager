const { override, addLessLoader, fixBabelImports } = require('customize-cra');
const hotLoader = require('react-app-rewire-hot-loader');
const theme = require('./src/config/theme/customize-antd');

module.exports = override(
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      ...theme,
    },
  }),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  (config, env) => {
    return hotLoader(config, env);
  },
);
