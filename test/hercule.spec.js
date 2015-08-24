'use strict';

var path = require('path');
var expect = require('chai').expect;
var exec = require('child_process').exec;
var execOptions = {
	cwd: path.join(__dirname, '..')
};
var fs = require('fs');
var examplesDir = 'test/fixtures/api-blueprint';

describe('Grunt hercule', function () {
	this.timeout(5000);
	
	describe('when generating hercule example', function () {
		var error, output, doc;
		
		beforeEach(function (done) {
			exec('grunt hercule:example', execOptions, function (err, stdout) {
				error = err;
				output = stdout;
				doc = fs.readFileSync(__dirname + '/../.grunt/gist-fox.md', 'utf8');
				done();
			});
		});
		
		it('should output src and dest', function () {
			expect(output).to.contain('\n' + examplesDir + '/gist-fox.apib');
			expect(output).to.contain('.grunt/gist-fox.md\n\n');
			expect(output).to.contain('Done, without errors.');
		});
		it('should have gist.json in doc', function () {
			expect(doc).to.contain('"id": "42",');
			expect(doc).to.contain('"created_at": "2014-04-14T02:15:15Z",');
			expect(doc).to.contain('"description": "Description of Gist",');
			expect(doc).to.contain('"content": "String contents"');
		});
		it('should have gist.md in doc', function () {
			expect(doc).to.contain('## Gist [/gists/{id}]');
			expect(doc).to.contain('### Retrieve a Single Gist [GET]');
		});
		it('should have gists.md in doc', function () {
			expect(doc).to.contain('## Gists Collection [/gists{?since}]');
			expect(doc).to.contain('### List All Gists [GET]');
		});
	});
});
