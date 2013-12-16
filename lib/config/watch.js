module.exports = {
  task: function() {
    return {
      javascript: {
        files: ['lib/**/*.js'],
        tasks: ['jshint:lib','test']
      },
      // server: {
      //   files: ['server/**/*.js'],
      //   tasks: ['express:dev']
      // },
      test: {
        files: ['test/**/*.js'],
        tasks: ['jshint:test','test']
      }
    };
  }
};

