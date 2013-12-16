module.exports = {
  task: function() {
    return {
      // Run tests in node.js client (won't work for test that use DOM)
      client: {
        options: {
          config: 'tests/intern'
        }
      }
    };
  }
};

