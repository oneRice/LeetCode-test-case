"use strict";
var sum = function (nums, pos) {
    var result = 0;
    for (var _i = 0, pos_1 = pos; _i < pos_1.length; _i++) {
        var position = pos_1[_i];
        result += nums[position];
    }
    return result;
};
exports.sum = sum;
