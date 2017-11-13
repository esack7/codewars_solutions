'use strict';

module.exports = function(member) {
  if(typeof member === 'string') member = JSON.parse(member);
  let varCalc;
  let rmr = (10 * member[4]) + (6.25 * member[3]) - (5 * member[2]);
  if(member[1] === 'm') {
    rmr = rmr + 5;
  } else {
    rmr = rmr - 161;
  }
  if(member[5] === 'little activity') varCalc = rmr * 1.2;
  if(member[5] === 'moderately active') varCalc = rmr * 1.55;
  if(member[5] === 'very active') varCalc = rmr * 1.7;
  if(member[5] === 'extremely active') varCalc = rmr * 1.9;
  varCalc = (Math.round(varCalc * 100)/100).toFixed(2);
  let solution = `${member[0]}´s daily calorie requirement is ${varCalc} kcal.`;
  return solution;
};
