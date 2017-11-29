'use strict';

const factorial = require('./../../lib/factorial');
require('jest');

describe('factorials', function() {
  test('should do factorials', () => {
    expect(factorial(1)).toEqual(1);
  });
  test('should do factorials', () => {
    expect(factorial(2)).toBe(2);
  });
  test('should do factorials', () => {
    expect(factorial(3)).toEqual(6);
  });
  test('should do factorials', () => {
    expect(factorial(10)).toEqual(3628800);
  });
  test('should throw Error', () => {
    function hereIsAnError() {
      factorial(13);
    }
    expect(hereIsAnError).toThrow(RangeError);
  });
});