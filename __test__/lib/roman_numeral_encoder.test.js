'use strict';

const rNumeralEncoder = require('./../../lib/roman_numeral_encoder');
require('jest');

describe('testing codewars roman_numeral_encoder', function() {
  test('5 should return V', () => {
    expect(rNumeralEncoder(5)).toBe('V');
  });
  test('10 should return X', () => {
    expect(rNumeralEncoder(10)).toBe('X');
  });
  test('999 should return CMXCIX', () => {
    expect(rNumeralEncoder(999)).toBe('CMXCIX');
  });
  test('3761 should return MMMDCCLXI', () => {
    expect(rNumeralEncoder(3761)).toBe('MMMDCCLXI');
  });
});
