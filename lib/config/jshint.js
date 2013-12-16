var _ = require('lodash');

var defaults = {
  validthis: true,
  expr: true,
  // es3: true,
  esnext: true,
  bitwise: true,
  camelcase: true,
  curly: true,
  eqeqeq: true,
  immed: true,
  indent: 2,
  latedef: true,
  newcap: true,
  noarg: true,
  quotmark: 'single',
  regexp: true,
  undef: true,
  // unused: true,
  strict: true,
  trailing: true,
  smarttabs: true,
  globals: {
    'require': false,
    // Consider removing this and all console refs from source
    'console': false
  }
};

var clientDefaults = {
  browser: true,
  jquery: true,
  globals: {
    'define': false
  }
};

var serverDefaults = {
  node: true,
  globals: {
    'module': false
  }
};

var testDefaults = {
  globals: {
    // 'sinon': false,
    'describe': false,
    'it': false,
    'before': false,
    'after': false,
    'beforeEach': false,
    'afterEach': false
  }
};

function task(config) {
  return {
    options: server(config),
    build: {
      src: [
        'Gruntfile.js'
      ]
    },
    lib: {
      src: [
        'lib/**/*.js'
      ]
    },
    test: {
      options: serverTest(config),
      src: [
        'test/**/*.js'
      ]
    }
  };
}

function client(config) {
  // Do a deep defaults - https://github.com/lodash/lodash/issues/154
  return _.merge({},config,clientDefaults,defaults,_.defaults);
}

function server(config) {
  // Do a deep defaults
  return _.merge({},config,serverDefaults,defaults,_.defaults);
}

function clientTest(config) {
  // Do a deep defaults
  return _.merge({},config,clientDefaults,testDefaults,defaults,_.defaults);
}

function serverTest(config) {
  // Do a deep defaults
  return _.merge({},config,serverDefaults,testDefaults,defaults,_.defaults);
}

module.exports = {
  task: task,
  client: client,
  server: server,
  clientTest: clientTest,
  serverTest: serverTest
};
