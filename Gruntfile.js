/**
 * Gruntfile.js
 *
 * Run 'grunt' in shell to minify the files
 *
 */
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
          banner: '/*! <%= pkg.name %> <%= pkg.homepage %> */\n',
        mangle: false
      },
      dist: {
        files: {
          'dist/chemdoodle.min.js': [
              'src/chemdoodle-unpacked.js',
              'src/chemdoodle-uis-unpacked.js'],
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');

  // before minifying js it is preferable to do 'yarn install' to update the dependencies
  grunt.registerTask('default', ['uglify']);
};
