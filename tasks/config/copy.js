/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			}]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		},
		dev_angular2: {
			files: [{
				expand: true,
				src: [
					'./node_modules/es6-shim/es6-shim.min.js',
					'./node_modules/systemjs/dist/system-polyfills.js',
					'./node_modules/angular2/bundles/angular2-polyfills.js',
					'./node_modules/systemjs/dist/system.src.js',
					'./node_modules/rxjs/bundles/Rx.js',
					'./node_modules/angular2/bundles/angular2.dev.js'
				],
				dest: '.tmp/public/js'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
