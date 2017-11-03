'use strict';

const camelCase = require('./lib/break_camel_case');
const rNumeralEncoder = require('./lib/roman_numeral_encoder');
let args = process.argv;
let codewar;
console.log('The argument passed in is = ', args[3]);
switch (args[2]) {
case 'camelCase':
  codewar = camelCase;
  break;

case 'rNumeralEncoder':
  codewar = rNumeralEncoder;
  break;

default:
  console.error(`The method ${args[2]} is not valid`);
  break;
}

if(args[2] && args[3]) {
  let ret = codewar(`${args[3]}`);
  console.log('The return value is = ', ret);
} else if(!args[2] || !args[3]) {
  console.error('You must include a method and/or pass in arguments');
}
