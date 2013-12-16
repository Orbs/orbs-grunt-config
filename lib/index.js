var matchdep = require('matchdep');

var config = {
	jshint: require('./config/jshint'),
	express: require('./config/express'),
	watch: require('./config/watch'),
	clean: require('./config/clean'),
	todos: require('./config/todos'),
	open: require('./config/open'),
	mkdir: require('./config/mkdir'),
	// intern: require('./config/intern'),
	mochaTest: require('./config/mochaTest')		
};

var tasks = {
	test: require('./tasks/test'),
	coverage: require('./tasks/coverage'),
	dev: require('./tasks/dev'),
	def: require('./tasks/def')
};

// TODO: Allow orbs-grunt-config to manage loading grunt tasks
// Currently, all grunt task dependencies must be listed in this project's package.json
// and the contents must be passed to loadTasks  

// This assumes the grunt tasks are loaded in the consuming package that provides the grunt reference,
// It will not load grunt tasks that are included in orbs-grunt-config
module.exports.loadTasks = function(grunt, json) {	
  // Load grunt tasks in NPM that start with grunt-
  matchdep.filterDev('grunt-*',json).forEach(grunt.loadNpmTasks);

  // Attempt to include grunt task dependencies in orbs-grunt-config instead of consuming package
	//  require('matchdep').filter('grunt-*','./package.json').forEach(function(task) {
	//    console.log(task);
	//    grunt.loadNpmTasks('orbs-grunt-config/node_modules/'+task);
	// });

  // Load grunt tasks in NPM that don't start with grunt-
  // grunt.loadNpmTasks('intern');
};

module.exports.initConfig = function(grunt) {
	grunt.initConfig({
    express: config.express.task(),
    watch: config.watch.task(),
    jshint: config.jshint.task(),
    clean: config.clean.task(),
    todos: config.todos.task(),
    open: config.open.task(),
    mkdir: config.mkdir.task(),
    // intern: config.intern.task(),
    mochaTest: config.mochaTest.task()		
	});
};

module.exports.initBlanket = function(blanket, pattern) {
  // Only files that match the pattern will be instrumented
	blanket({
		pattern: pattern
	});
};

module.exports.registerTasks = function(grunt) {
	grunt.registerTask('test',tasks.test);
	grunt.registerTask('coverage',tasks.coverage);
	grunt.registerTask('dev',tasks.dev);
	grunt.registerTask('default',tasks.def);
};

module.exports.config = config;
module.exports.tasks = tasks;