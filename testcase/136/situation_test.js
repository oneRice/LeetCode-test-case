/*
 * LeetCode-javascript
 * https://github.com/oneRice/LeetCode-javascript
 *
 * Copyright (c) 2016 oneRice
 * Licensed under the MIT license.
 */

'use strict';
var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

// module import
var solution = require('./solution.js').solution; // output function of problem
var Alert = require('./alert.js'); // alert output module
var Helper = require('./test_helper.js'); // helper module

// Macro
var TEST_EACH_CASE = 1;

// Test Data
var datas = [[[1, 1, 2], 2],
             [[1], 1],
             [[1, 1, 1, 1, 2], 2],
            ];

exports.situation = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    
    data_test: function (test) {
        var len = datas.length;
        test.expect(TEST_EACH_CASE * len);
        grunt.log.writeln('Situation test entered');
        
        for (var i = 0; i < len; i++) {
            // generate the input and target
            var num = datas[i][0];
            var stub_res = datas[i][1];
            
            var result = solution(num);                     

            test.equal(stub_res, result, Alert.notEqual(num, stub_res, result));            
        }        
        test.done();
    },
};