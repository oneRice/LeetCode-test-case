/*
 * leetcode-test
 * https://github.com/oneRice/oneMore-note
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      t001: [
        'Gruntfile.js',
        'problem/001/**/*.js',
      ],      
      t002: [
        'Gruntfile.js',
        'problem/002/**/*.js',
      ],
      t003: [
        'Gruntfile.js',
        'problem/003/**/*.js',
      ],
      t004: [
        'Gruntfile.js',
        'problem/004/**/*.js',
      ],
      t005: [
        'Gruntfile.js',
        'problem/005/**/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
      }
    },
    
    // Export the solution function automatically. 
    auto_export: {
      t001: {
        options: {
          problem: '001',
          solution: 'twoSum'
        }
      },
      t002: {
        options: {
          problem: '002',
          solution: 'addTwoNumbers'
        }
      },
      t003: {
        options: {
          problem: '003',
          solution: 'lengthOfLongestSubstring'
        }
      },
      t004: {
        options: {
          problem: '004',
          solution: 'findMedianSortedArrays'
        }
      },
      t005: {
        options: {
          problem: '005',
          solution: 'longestPalindrome'
        }
      }
    },
    
    // Clear the export statement.
    clear_export: {
      t001: {
        options: {
          problem: '001',
        },
      },
      t002: {
        options: {
          problem: '002',
        }
      },
      t003: {
        options: {
          problem: '003',
        }
      },
      t004: {
        options: {
          problem: '004',
        }
      },
      t005: {
        options: {
          problem: '005',
        }
      }, 
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp']
    },

    // Unit tests.
    nodeunit: {
      t001: ['problem/001/test/*_test.js'],
      t002: ['problem/002/test/*_test.js'],
      t003: ['problem/003/test/*_test.js'],  
      t004: ['problem/004/test/*_test.js'],  
      t005: ['problem/005/test/*_test.js'],  
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('preprocess');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('t001', ['jshint:t001', 'auto_export:t001', 'nodeunit:t001', 'clear_export:t001', 'clean']);
  grunt.registerTask('t002', ['jshint:t002', 'auto_export:t002', 'nodeunit:t002', 'clear_export:t002', 'clean']);
  grunt.registerTask('t003', ['jshint:t003', 'auto_export:t003', 'nodeunit:t003', 'clear_export:t003', 'clean']);
  grunt.registerTask('t004', ['jshint:t004', 'auto_export:t004', 'nodeunit:t004', 'clear_export:t004', 'clean']);
  grunt.registerTask('t005', ['jshint:t005', 'auto_export:t005', 'nodeunit:t005', 'clear_export:t005', 'clean']);

  grunt.registerTask('all', ['t001', 't002', 't003', 't004', 't005']);
 
  // By default, lint and run all tests.
  grunt.registerTask('default', ['all']);

};
