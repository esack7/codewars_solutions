'use strict';

const camelCase = require('./lib/break_camel_case');
let args = process.argv;
let codewar;
console.log('The argument passed in is = ', args[3]);
switch (args[2]) {
case 'camelCase':
  codewar = camelCase;
  break;

default:
  codewar = camelCase;
}

let ret = codewar(`${args[3]}`);
console.log('The return value is = ', ret);
