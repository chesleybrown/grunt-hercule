grunt-hercule
=========================
[![Build Status](https://travis-ci.org/chesleybrown/grunt-hercule.svg?branch=master)](https://travis-ci.org/chesleybrown/grunt-hercule)
[![Dependency Status](https://david-dm.org/chesleybrown/grunt-hercule.svg)](https://david-dm.org/chesleybrown/grunt-hercule)
[![devDependency Status](https://david-dm.org/chesleybrown/grunt-hercule/dev-status.svg)](https://david-dm.org/chesleybrown/grunt-hercule#info=devDependencies)
[![NPM version](https://badge.fury.io/js/grunt-hercule.svg)](http://badge.fury.io/js/grunt-hercule)

Grunt task that wraps hercule for simple document transclusion, ideal for Markdown documents.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-hercule --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-hercule');
```

## hercule task
_Run this task with the `grunt hercule` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

Typically you'll just want to provide files in the standard Grunt way.

```js
hercule: {
	docs: {
		src: 'path/to/your/blueprint.md',
		dest: 'path/to/dest.md'
	}
}
```

## Running Tests
To execute all the tests, just run:

```
npm test
```

You can also just run the available `grunt` commands. The default
being to check the code styling of the project itself.

```
grunt
```

## Contact
You can follow me on twitter at [@Chesley](https://twitter.com/Chesley)
