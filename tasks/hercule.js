'use strict';

var hercule = require('hercule');
var path = require('path')

module.exports = function (grunt) {
	grunt.registerMultiTask('hercule', function () {
		var done = this.async();
		var num_files = this.files.length
		this.files.forEach(function(f){
			hercule.transcludeFile(f.src[0],
				{ relativePath: path.dirname(path.join(process.cwd(), f.src[0])) },
				function callback(err,output) {

					if (err) {
						console.log(err)
						console.log(path.join(process.cwd(), f.src[0]))
						console.log(path.dirname(path.join(process.cwd(), f.src[0])));
					} else {
						grunt.file.write(path.join(process.cwd(), f.dest), output);
					}

					num_files = num_files - 1

					// grunt.log.write(f.src[0]);
					// grunt.log.write(' >> '.green);
					// grunt.log.writeln(f.dest);

					if (num_files == 0) done();


				}
			);
		});

	});
};
