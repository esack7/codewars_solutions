'use strict';

module.exports = function(num) {
  let arr = num.toString().split('');
  let hold = [];
  let front = [];
  let back = [];
  let inc = 0;
  let brake = false;
  while(arr.length > inc) {
    hold.unshift(arr[arr.length - 1]);
    arr.pop();
    for(let i = arr.length - 1; i >= 0; i--) {
      if(arr[i] > hold[0]) {
        front = arr.slice(0, i);
        back = arr.slice(i, arr.length);
        brake = true;
        break;
      }
    }
    if(brake) break;
    inc++;
  }
  arr = [...front, ...hold, ...back];
  let solution = parseInt(arr.join(''));
  if(!brake) {
    return -1;
  } else if(num.toString().length === solution.toString().length) {
    return solution;
  } else {
    return -1;
  }
};
