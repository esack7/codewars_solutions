'use strict';

const nextSmaller = require('./../../lib/next_smaller_number');
require('jest');

describe('testing "next smaller number" codewar solution', function() {
  describe('small number tests', () => {
    test('9 should output -1', () => {
      expect(nextSmaller(9)).toBe(-1);
    });
    test('1234 should output -1', () => {
      expect(nextSmaller(1234)).toBe(-1);
    });
    test('10 should output -1', () => {
      expect(nextSmaller(10)).toBe(-1);
    });
    test('90 should output -1', () => {
      expect(nextSmaller(90)).toBe(-1);
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
    test('2017 should output 1720', () => {
      expect(nextSmaller(2017)).toBe(1720);
    });
    test('8019 should output 1980', () => {
      expect(nextSmaller(8019)).toBe(1980);
    });
    test('1027 should output -1', () => {
      expect(nextSmaller(1027)).toBe(-1);
    });
    // test('13067 should output 10763', () => {
    //   expect(nextSmaller(13067)).toBe(10763);
    // });
    // test('21279 should output 19722', () => {
    //   expect(nextSmaller(21279)).toBe(19722);
    // });
    // test('59033 should output 53930', () => {
    //   expect(nextSmaller(59033)).toBe(53930);
    // });
    // test('391415 should output 391154', () => {
    //   expect(nextSmaller(391415)).toBe(391154);
    // });
    // test('16414 should output 16144', () => {
    //   expect(nextSmaller(16414)).toBe(16144);
    // });
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
