module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        'app/**/*.js',
        'tests/app/**/*.js',
        'tests/runner.js',
        'Gruntfile.js',
        '!app/bestPractices.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    }
  });

  grunt.registerTask('server', 'Start a custom web server.', function() {
    var server = require('./server/server.js');
    server({ port : 4444, dev : true });
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.registerTask('default', [ 'jshint' ]);
  grunt.registerTask('develop', [ 'server' ]);
};
