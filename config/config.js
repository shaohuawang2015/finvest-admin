// https://bigfish.alipay.com/doc/app-config
import pageRoutes from './router.config';
import defaultSettings from '../src/defaultSettings';

export default {
  // 应用类型
  appType: 'console',
  // 部署模式
  deployMode: 'assets',
  proxy: {
    // 按照你的项目参考下面链接添加配置
    // https://bigfish.alipay.com/doc/wuiaag#%E5%89%8D%E5%90%8E%E7%AB%AF%E8%81%94%E8%B0%83
  },
  // 路由配置
  routes: pageRoutes,
  theme: {
    'primary-color': defaultSettings.primaryColor,
  },
  locale: {
    enable: true,
  },
  favicon: 'https://gw.alipayobjects.com/zos/rmsportal/uLsFenYjfFtKMzBaUpeS.png',
  ctoken: true,
  // 通过 script 和 externals 配置提高构建速度和减小构建产物的体积
  // 如果你没有用到图表中的 data-set 可以去掉下面相关代码
  // 原 assets 应用因为没有引入 bigfish 的 html，所以需要手动添加 script 到 vm 中（推荐升级 assets 到新版直接引入 bigfish 的方案解决）
  script: ['https://gw.alipayobjects.com/os/antv/pkg/_antv.data-set-0.9.5/dist/data-set.min.js'],
  externals: {
    '@antv/data-set': 'DataSet',
  },
};
