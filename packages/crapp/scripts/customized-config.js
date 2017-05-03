/**
 * 该模块运行react-scripts里边的脚本(create-react-app中的)
 * 提供一个使用项目根目录创建的config-overrides.dev.js或cnofig-overrides.prod.js来覆盖webpack配置的机会。
 *
 * config-overrides文件必须export一个接受config对象、并返回修改后的config对象的函数，类似如下:
 *
 * module.exports = function(webpackConfig) {
 *   return webpackConfig;
 * }
 */

var rewire = require('rewire');
var proxyquire = require('proxyquire');

switch(process.argv[2]) {
  // start脚本运行于开发模式下
  case 'start':
    rewireModule('react-scripts/scripts/start.js', loadCustomizer('../config/overrides.dev'));
    break;

  // build脚本运行在生产打包模式下
  case 'build':
    rewireModule('react-scripts/scripts/build.js', loadCustomizer('../config/overrides.prod'));
    break;
  // test脚本使用Jest运行测试的时候
  case 'test':
    // 从config/overrides.testing中加载自定义配置
    // 那个文件应该export一个接受config，并且返回修改后config的函数
    let customizer = loadCustomizer('../config/overrides.testing');
    proxyquire('react-scripts/scripts/test.js', {
      // 当test.js请求../utils/createJestConfig的时候，它依然需要下面这样:
      '../utils/createJestConfig': (...args) => {
        var createJestConfig = require('react-scripts/utils/creactJestConfig');
        return customizer(createJestConfig(...args));
      }
    });
    break;
  default:
    console.log("customizer-config only supports 'start', 'build', 'test' options");
    proxy.exit(-1);
    break;
}

function loadCustomizer(module) {
  try {
    return require(module);
  } catch(e) {
    if(e.code !== 'MODULE_NOT_FOUND') {
      throw e;
    }
  }

  // 如果模块不存在，返回一个noop, 简单返回传入的config
  return config => config;
}

function rewireModule(modulePath, customizer) {
  let defaults = rewire(modulePath);

  let config = defaults.__get__('config');
  config = customizer(Object.assign({}, config));
  defaults.__set__('config', config);
}
