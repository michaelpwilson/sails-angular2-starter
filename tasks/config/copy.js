/**
 * `copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders from your `assets/` directory into
 * the web root (`.tmp/public`) so they can be served via HTTP,
 * and also for further pre-processing by other Grunt tasks.
 *
 * #### Normal usage (`sails lift`)
 * Copies all directories and files (except CoffeeScript and LESS)
 * from the `assets/` folder into the web root -- conventionally a
 * hidden directory located `.tmp/public`.
 *
 * #### Via the `build` tasklist (`sails www`)
 * Copies all directories and files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-copy
 *
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
				  './node_modules/systemjs/dist/system.src.js',
				  './node_modules/zone.js/dist/zone.js',
				  './node_modules/reflect-metadata/Reflect.js',
				  './node_modules/rxjs/**/*.js',
				  './node_modules/@angular/core/bundles/core.umd.js',
				  './node_modules/@angular/compiler/bundles/compiler.umd.js',
				  './node_modules/@angular/common/bundles/common.umd.js',
				  './node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
				  './node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
				],
				dest: '.tmp/public/js'
			}]
		}
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
};
