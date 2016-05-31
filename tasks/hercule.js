'use strict';

var hercule = require('hercule');
var path = require('path')
var fs = require('fs')

module.exports = function (grunt) {
	grunt.registerMultiTask('hercule', function () {
		var done = this.async();
		var num_files = this.files.length

		this.files.forEach(function(f){
			hercule.transcludeFile(f.src[0],
				{ relativePath: path.dirname(path.join(process.cwd(), f.src[0])) },
				function callback(err,output) {

					if (err) {
						grunt.log.error("Hercule error while processing: " + f.src[0])
						grunt.log.verbose.error(err)
					} else {
						grunt.file.write(path.join(process.cwd(), f.dest), output);
					}

					num_files = num_files - 1

					if (num_files == 0) done();

				}
			);
		});

	});
};
