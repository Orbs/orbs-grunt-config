module.exports = [
	'clean',
  'jshint',
  'mkdir:tmp',
  // 'blanket',
  // 'copy:tests',
  // 'mochaTest:instrumented',
  'mochaTest:test',
	'mochaTest:coverage',
	'open:coverage'
];