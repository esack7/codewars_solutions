'use strict';

const rNumeralEncoder = require('./../../lib/roman_numeral_encoder');
require('jest');

describe('testing codewars roman_numeral_encoder', function() {
  test('5 should return V', () => {
    expect(rNumeralEncoder(5)).toBe('V');
  });
});
