module.exports = {
  task: function() {
    return {
      options: {
        priorities : {
          low : /(NOTE|XXX)/,
          med : /(TODO|HACK|BUG)/,
          high: /(FIXME)/
        }
      },
      build : {
        src: [
          'Gruntfile.js'
        ],
        dest: '.tmp/todos-build.txt'
      },
      lib : {
        src: [
          'lib/**/*.js'
        ],
        dest: '.tmp/todos-lib.txt'
      },
      server : {
        src: [
          'server/**/*.js'
        ],
        dest: '.tmp/todos-server.txt'
      },
      test : {
        src: [
          'test/**/*.js'
        ],
        dest: '.tmp/todos-test.txt'
      }
    };
  }
};

