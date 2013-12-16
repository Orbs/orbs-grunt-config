var _ = require('lodash');

var defaults = {
  port: 8080,
  hostname: '*',
  server: 'server',
  bases: ['dist'],
  livereload: false
};

var devDefaults = {
  port: 9000,
  bases: ['.tmp','app'],
  livereload: true
  // serverreload: true
  // showStack: true
};

var testDefaults = {
  port: 9001,
  bases: ['tests','app'],
  livereload: true
};

function task(config) {
   // grunt-express will serve the files from the folders listed in `bases`
    // on specified `port` and `hostname`
  return {
    prod: {
      options: prod(config)
    },
    dev: {
      options: dev(config)
    },
    test: {
      options: test(config)
    }
  };
}

function prod(config) {
  // Do a deep defaults - https://github.com/lodash/lodash/issues/154
  return _.merge({},config,defaults,_.defaults);
}

function dev(config) {
  // Do a deep defaults
  return _.merge({},config,devDefaults,defaults,_.defaults);
}

function test(config) {
  // Do a deep defaults
  return _.merge({},config,testDefaults,defaults,_.defaults);
}

module.exports = {
  task: task,
  prod: prod,
  dev: dev,
  test: test
};
