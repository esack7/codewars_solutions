'use strict';

const thirdAngle = require('./../../lib/third_angle');
require('jest');

describe('testing codewar third angle solution', function() {
  test('30 and 60 should return 90', () => {
    expect(thirdAngle(30, 60)).toBe(90);
  });
  test('60 and 60 should return 60', () => {
    expect(thirdAngle(60, 60)).toBe(60);
  });
  test('43 and 78 should return 59', () => {
    expect(thirdAngle(43, 78)).toBe(59);
  });
  test('10 and 20 should return 150', () => {
    expect(thirdAngle(10, 20)).toBe(150);
  });
});
