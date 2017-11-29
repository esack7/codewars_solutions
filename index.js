'use strict';

const camelCase = require('./lib/break_camel_case');
const rNumeralEncoder = require('./lib/roman_numeral_encoder');
const extractDomain = require('./lib/extract_domain');
const rangeExtract = require('./lib/range_extraction');
const dCalReq = require('./lib/daily_calorie_req');
const nextSmaller = require('./lib/next_smaller_number');
const thirdAngle = require('./lib/third_angle');
const factorial = require('./lib/factorial');

let args = process.argv;
let codewar;
if(args[3] && args[4]) {
  console.log('The argument passed in is = ', args[3], args[4]);
}
if(args[3] && !args[4]) {
  console.log('The argument passed in is = ', args[3]);
}

if(args[2]) {
  switch (args[2]) {
    case 'camelCase':
    codewar = camelCase;
    break;

    case 'rNumeralEncoder':
    codewar = rNumeralEncoder;
    break;

    case 'extractDomain':
    codewar = extractDomain;
    break;

    case 'rangeExtract':
    codewar = rangeExtract;
    break;

    case 'dCalReq':
    codewar = dCalReq;
    break;

    case 'nextSmaller':
    codewar = nextSmaller;
    break;

    case 'thirdAngle':
    codewar = thirdAngle;
    break;

    case 'factorial':
    codewar = factorial;
    break;

    default:
    console.error(`The method ${args[2]} is not valid`);
    return;
  }
}

if(args[2] && args[3]) {
  let ret = codewar(`${args[3]}`, `${args[4]}`);
  console.log('The return value is = ', ret);
} else if(!args[2] || !args[3]) {
  console.error('You must include a method and/or pass in arguments');
}
