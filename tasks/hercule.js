'use strict';

var hercule = require('hercule');

module.exports = function (grunt) {
	grunt.registerMultiTask('hercule', function () {
		var done = this.async();
		
		if (this.filesSrc.length != 1) {
			grunt.fail.fatal('You must provide only one src file.');
		}
		
		var src = this.filesSrc[0];
		var dest = this.data.dest;
		
		hercule.transcludeFile(src,
			function logger(msg) {
				grunt.verbose.writeln(msg);
			},
			function callback(doc) {
				grunt.file.write(dest, doc);
				
				grunt.log.write(src);
				grunt.log.write(' >> '.green);
				grunt.log.writeln(dest);
				
				done();
			}
		);
	});
};
