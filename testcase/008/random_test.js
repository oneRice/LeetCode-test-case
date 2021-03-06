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
var reverse = require('./solution.js').solution; // output function of problem
var Alert = require('./alert.js'); // alert output module
var Helper = require('./test_helper.js'); // helper module

// Macro
var TEST_EACH_CASE = 1;
var TOTAL_TEST_NUM = 0;

// Generate Data

var generateData = function() {
    var num = Helper.random(1, 10000000000);
    return [num, Helper.stub(num)];
}

exports.situation = {
    setUp: function (done) {
        // setup here if necessary
        done();
    },
    
    data_test: function (test) {
        test.expect(TEST_EACH_CASE * TOTAL_TEST_NUM);
        grunt.log.writeln('Random test entered');
        
        for (var i = 0; i < TOTAL_TEST_NUM; i++) {
            // generate the input and target
            var datas = generateData();
            var num = datas[0];
            var stub_res = datas[1];

            var result = reverse(num);

            test.equal(stub_res, result, Alert.notEqual(num, stub_res, result));            
        }        
        test.done();
    },
};