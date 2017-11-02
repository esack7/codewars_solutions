'use strict';
const camelCase = require('./../../lib/break_camel_case/index.js');
require('jest');

describe('testing codewars break camel case solution', function() {
  test('"helloWorld" should return "hello World"', () => {
    expect(camelCase('helloWorld')).toBe('hello World');
  });
  test('"camelCase" should return "camel Case"', () => {
    expect(camelCase('camelCase')).toBe('camel Case');
  });
});
