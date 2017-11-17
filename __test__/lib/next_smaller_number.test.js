'use strict';

const nextSmaller = require('./../../lib/next_smaller_number');
require('jest');

describe('testing "next smaller number" codewar solution', function() {
  describe('small number tests', () => {
    test('9 should output -1', () => {
      expect(nextSmaller(9)).toBe(-1);
    });
    test('21 should output 12', () => {
      expect(nextSmaller(21)).toBe(12);
    });
    test('907 should output 790', () => {
      expect(nextSmaller(907)).toBe(790);
    });
    test('531 should output 513', () => {
      expect(nextSmaller(531)).toBe(513);
    });
    test('135 should output -1', () => {
      expect(nextSmaller(135)).toBe(-1);
    });
    test('2071 should output 2017', () => {
      expect(nextSmaller(2071)).toBe(2017);
    });
    test('1027 should output -1', () => {
      expect(nextSmaller(1027)).toBe(-1);
    });
    test('414 should output 144', () => {
      expect(nextSmaller(414)).toBe(144);
    });
    test('315 should output 153', () => {
      expect(nextSmaller(315)).toBe(153);
    });
  });
  describe('large number tests', () => {
    test('123456798 should output 123456789', () => {
      expect(nextSmaller(123456798)).toBe(123456789);
    });
    test('123456789 should output -1', () => {
      expect(nextSmaller(123456789)).toBe(-1);
    });
    test('1234567908 should output 1234567890', () => {
      expect(nextSmaller(1234567908)).toBe(1234567890);
    });
  });
});
