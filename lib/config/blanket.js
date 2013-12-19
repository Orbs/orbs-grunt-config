module.exports = {
  task: function() {
    return {
	    // options: {},
      coverage: {
        options: {
          reporter: 'html-cov',
          // use the quiet flag to suppress the mocha console output
          quiet: true,
          // specify a destination file to capture the mocha
          // output (the quiet option does not suppress this)
          captureFile: '.tmp/coverage.html'
        },
        // src: ['test/**/*.js']
        src: 'lib/',
        dest: '.tmp/lib'
      }
	    // files: {
	    //   '.tmp/src-cov/': ['lib/']
	    // }
    };
  }
};
