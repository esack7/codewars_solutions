'use strict';

const dCalReq = require('./../../lib/daily_calorie_req/index.js');
require('jest');

describe('testing daily calorie requirement solution', function() {
  // console.log(dCalReq('["Liz", "f", 29, 170, 60, "very active"]'));
  test('["Liz", "f", 29, 170, 60, "very active"] should return "Liz´s daily calorie requirement is 2306.05 kcal."', () => {
    expect(dCalReq(['Liz', 'f', 29, 170, 60, 'very active'])).toBe('Liz´s daily calorie requirement is 2306.05 kcal.');
  });
  test('["Marc", "m", 38, 190, 90, "moderately active"] should return "Marc´s daily calorie requirement is 2948.88 kcal."', () => {
    expect(dCalReq(['Marc', 'm', 38, 190, 90, 'moderately active'])).toBe('Marc´s daily calorie requirement is 2948.88 kcal.');
  });
  test('["Oliver", "m", 75, 178, 85, "little activity"] should return "Oliver´s daily calorie requirement is 1911.00 kcal."', () => {
    expect(dCalReq(['Oliver', 'm', 75, 178, 85, 'little activity'])).toBe('Oliver´s daily calorie requirement is 1911.00 kcal.');
  });
  test('["Sandra", "f", 17, 165, 61, "extremely active"] should return "Sandra´s daily calorie requirement is 2650.98 kcal."', () => {
    expect(dCalReq(['Sandra', 'f', 17, 165, 61, 'extremely active'])).toBe('Sandra´s daily calorie requirement is 2650.98 kcal.');
    expect(dCalReq('["Sandra", "f", 17, 165, 61, "extremely active"]')).toBe('Sandra´s daily calorie requirement is 2650.98 kcal.');
  });
});
