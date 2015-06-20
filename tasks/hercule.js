'use strict';

var hercule = require('hercule/lib/transclude');

module.exports = function (grunt) {
	grunt.registerMultiTask('hercule', function () {
		var done = this.async();
		
		if (this.filesSrc.length != 1) {
			grunt.fail.fatal('You must provide only one src file.');
		}
		
		var src = this.filesSrc[0];
		var dest = this.data.dest;
		
		hercule.transclude(src, null, null, null, function (err, doc) {
			!err || grunt.fail.fatal(err);
			
			grunt.file.write(dest, doc);
			
			grunt.log.write(src);
			grunt.log.write(' >> '.green);
			grunt.log.writeln(dest);
			
			done();
		});
	});
};
