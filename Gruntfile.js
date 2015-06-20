'use strict';

module.exports = function (grunt) {
	grunt.loadTasks('tasks');
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tabs4life: {
			self: {
				src: [
					'.gitignore',
					'Gruntfile.js',
					'LICENSE',
					'tasks/**/*.js',
					'README.md',
					'test/*.js'
				]
			}
		}
	});
	
	grunt.registerTask('default', ['tabs4life:self']);
};
