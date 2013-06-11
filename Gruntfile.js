/*
 * Grunt.js is a tool for automated JavaScript development
 * https://github.com/cowboy/grunt
 *
 * To use it:
 * 1) install node.js - http://nodejs.org/#download. This will install 'npm' (Node Package Manager) too
 * 2) install grunt - 'npm -g install grunt-cli'
 * 3) run: npm install (This will use package.json and install all dependencies)
 * 4) use it: 
 * 4.1) grunt jshint - checks all JavaScript files with JSHint
 * 4.2) grunt jshint:core - checks only the files in wicket-core
 * 4.3) grunt test - starts a web server and runs all tests (Ajax, non-Ajax and AMD)
 */

 /*global module: true */

module.exports = function(grunt) {
	"use strict";

	var
		gymJs = ['gym.js'],

		gruntJs = ['Gruntfile.js'];

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		jshint: {
			gym: gymJs,
			grunt: gruntJs,

			options: {
				"boss": true,
				"browser": true,
				"curly": true,
				"eqnull": true,
				"eqeqeq": true,
				"expr": true,
				"evil": true,
				"jquery": true,
				"latedef": true,
				"noarg": true,
				"onevar": false,
				"smarttabs": true,
				"trailing": true,
				"undef": true,
				"strict": true,
				"predef": [
					"Wicket"
				]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint']);
};
