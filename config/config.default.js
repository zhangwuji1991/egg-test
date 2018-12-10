'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1543992475934_8233';

  // add your config here
  config.middleware = [];

  //配置ejs模板引擎
  config.view = {
    mapping: {
      '.html' : 'ejs'
    }
  };

  //配置cors
  config.security= {
    csrf: {
      enable: false,
      ignoreJSON: true //默认为false,当设置为true时将会放过所以 conten-type 为 'application/json' 的请求
    },
    domainWhiteList: ['*']
  };

  config.cors = {
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }
 
  return config;
};
