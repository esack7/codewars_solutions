'use strict';

module.exports = function solution(list){
  if((typeof list) === 'string') list = JSON.parse(list);
  let range = [];
  let str = '';
  for(let i = 0; i < list.length; i++) {
    if((list[i] + 1) === list[i + 1]) {
      range.push(list[i].toString());
    } else {
      range.push(list[i].toString());
      if(!range[1]) {
        if(i === list.length -1) {
          str = str + range[0];
        } else {
          str = str + range[0] + ',';
        }
        range = [];
      } else if(!range[2]) {
        if(i === list.length -1) {
          str = str + range[0] + ',';
          str = str + range[1];
        } else {
          str = str + range[0] + ',';
          str = str + range[1] + ',';
        }
        range = [];
      } else {
        if(i === list.length -1) {
          str = str + range[0] + '-' + range[range.length -1];
        } else {
          str = str + range[0] + '-' + range[range.length - 1] + ',';
        }
        range = [];
      }
    }
  }
  return str;
};
