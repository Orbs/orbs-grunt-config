module.exports = {
  task: function() {
    return {
      tests: {
        src: 'test/*',
        dest: '.tmp/test'
      }
    };
  }
};
