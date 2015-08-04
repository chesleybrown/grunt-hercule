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
			function callback(doc) {
				// FIXME: unsure how to detect transclusion error since only output
				// string is passed in.
				// !err || grunt.fail.fatal(err);
				
				grunt.file.write(dest, doc);
				
				grunt.log.write(src);
				grunt.log.write(' >> '.green);
				grunt.log.writeln(dest);
				
				done();
			}
		);
	});
};
