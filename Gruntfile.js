'use strict';

module.exports = function (grunt) {
	grunt.loadTasks('tasks');
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		tabs4life: {
			self: {
				options: {
					jshint: {
						mocha: true
					}
				},
				src: [
					'.gitignore',
					'Gruntfile.js',
					'LICENSE',
					'tasks/**/*.js',
					'README.md',
					'test/**/*.js'
				]
			}
		},
		hercule: {
			example: {
				src: 'test/fixtures/api-blueprint/gist-fox.apib',
				dest: '.grunt/gist-fox.md'
			}
		}
	});
	
	grunt.registerTask('default', ['tabs4life:self']);
};
