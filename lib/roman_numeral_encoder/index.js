'use strict';

module.exports = function (number){
  let answer = '';
  const key = [
    {num: 1000, rNum: 'M'},
    {num: 900, rNum: 'CM'},
    {num: 500, rNum: 'D'},
    {num: 400, rNum: 'CD'},
    {num: 100, rNum: 'C'},
    {num: 90, rNum: 'XC'},
    {num: 50, rNum: 'L'},
    {num: 40, rNum: 'XL'},
    {num: 10, rNum: 'X'},
    {num: 9, rNum: 'IX'},
    {num: 5, rNum: 'V'},
    {num: 4, rNum: 'IV'},
    {num: 1, rNum: 'I'},
  ];

  for(let i = 0; i < key.length; i++) {
    while(number >= key[i].num) {
      number -= key[i].num;
      answer = answer + key[i].rNum;
    }
  }
  return answer;
};
