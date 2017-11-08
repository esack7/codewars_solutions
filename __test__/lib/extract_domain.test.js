'use strict';

const extractDomain = require('./../../lib/extract_domain');
require('jest');

describe('testing extract domain solution', function() {
  test('http://github.com/carbonfive/raygun should return github', () => {
    expect(extractDomain('http://github.com/carbonfive/raygun')).toBe('github');
  });
  test('http://www.zombie-bites.com should return zombie-bites', () => {
    expect(extractDomain('http://www.zombie-bites.com')).toBe('zombie-bites');
  });
  test('https://www.cnet.com should return cnet', () => {
    expect(extractDomain('https://www.cnet.com')).toBe('cnet');
  });
  test('www.google.com should return google', () => {
    expect(extractDomain('www.google.com')).toBe('google');
  });
});
