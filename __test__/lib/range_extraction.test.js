'use strict';

const rangeExtract = require('./../../lib/range_extraction');
require('jest');

describe('testing codewar range extraction solution', function() {
  test('[1,2,3,5] should be "1-3,5"', () => {
    expect(rangeExtract([1,2,3,5])).toBe('1-3,5');
  });
  test('[-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20] should be "-6,-3-1,3-5,7-11,14,15,17-20"', () => {
    expect(rangeExtract([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20])).toBe('-6,-3-1,3-5,7-11,14,15,17-20');
  });
  test('[1,2] should be "1,2"', () => {
    expect(rangeExtract([1,2])).toBe('1,2');
  });
  test('"[1,2]" should be "1,2"', () => {
    expect(rangeExtract('[1,2]')).toBe('1,2');
  });
});
