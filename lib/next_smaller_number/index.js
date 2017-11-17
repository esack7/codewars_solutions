'use strict';

module.exports = function(num){
  let numArr = num.toString().split('');
  let numFlip;
  let numSort;
  let hold;
  for(let i = numArr.length - 1; i >= 0; i--) {
    console.log('numArr prior to map: ', numArr);
    numArr = numArr.map(idx => parseInt(idx));
    console.log('numArr after map: ', numArr);
    if(numArr[i] < numArr[i - 1]) {
      numFlip = numArr.slice((i - 1), numArr.length);
      console.log('numFlip defined: ', numFlip);
      numArr = numArr.slice(0, i - 1);
      console.log('numArr redefined by slice: ', numArr);
      numSort = numFlip.slice(2, numFlip.length);
      console.log('numSort defined', numSort);
      numFlip = numFlip.slice(0, 2);
      console.log('numFlip redefined by slice:', numFlip);
      numFlip = numFlip.sort();
      console.log('numFlip flipped: ', numFlip);
      hold = numFlip[1];
      console.log('hold defined: ', hold);
      numFlip.pop();
      console.log('numFlip reduced by pop: ', numFlip);
      numSort.push(hold);
      console.log('hold added to numSort via push: ', numSort);
      numSort = numSort.sort().reverse();
      console.log('numSort sorted and reversed', numSort);
      numArr = [...numArr, ...numFlip, ...numSort];
      console.log('rest and spread of all arrays into numArr', numArr);
      let solution = parseInt(numArr.join(''));
      console.log('solution: ', solution);
      return solution;
    }
  }
  return -1;
};
