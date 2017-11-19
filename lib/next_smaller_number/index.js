'use strict';

// module.exports = function(num){
//   let numArr = num.toString().split('');
//   numArr = numArr.map(idx => parseInt(idx));
//   let numHold;
//   let hold;
//   let inc = 0;
//   for(let i = numArr.length - (1 + inc); i >= 0; i--) {
//     hold = numArr[numArr.length - (1 + inc)];
//     console.log(hold);
//     if(numArr[i] > numArr[numArr.length - (1 + inc)]) {
//       numHold = numArr.slice((i), numArr.length - inc);
//       numHold.pop();
//       console.log('numHold: ', numHold);
//       numArr = numArr.slice(0, i);
//       console.log('numArr: ', numArr);
//       break;
//     }
//   }
//   numArr = [...numArr, hold, ...numHold];
//   let solution = parseInt(numArr.join(''));
//   return solution;
// };

// Sill not catching all edge cases.
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
      //////////////////////////////////////////////////Editing here
      let check = true;
      for(let i = 1; i < numFlip.length; i++) {
        if(numFlip[0] <= numFlip[i]) {
          console.log('reach for if statement');
          check = false;
        }
        // if(numArr === []) check = true;
      }
      if(check) numFlip = numFlip.sort().reverse();
      // numArr = [...numArr, ...numFlip];
      //////////////////////////////////////////////////
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
      if(numArr[0] === 0) return -1;
      let solution = parseInt(numArr.join(''));
      console.log('solution: ', solution);
      return solution;
    }
  }
  return -1;
};

// module.exports = function(num){
//   let numArr = num.toString().split('');
//   let numFlip;
//   let numSort;
//   let hold;
//   for(let i = numArr.length - 1; i >= 0; i--) {
//     numArr = numArr.map(idx => parseInt(idx));
//     if(numArr[i] < numArr[i - 1]) {
//       numFlip = numArr.slice((i - 1), numArr.length);
//       numArr = numArr.slice(0, i - 1);
//       let check = true;
//       for(let i = 1; i < numFlip.length; i++) {
//         if(numFlip[0] <= numFlip[i]) {
//           check = false;
//         }
//       }
//       if(check) numFlip = numFlip.sort().reverse();
//       numSort = numFlip.slice(2, numFlip.length);
//       numFlip = numFlip.slice(0, 2);
//       numFlip = numFlip.sort();
//       hold = numFlip[1];
//       numFlip.pop();
//       numSort.push(hold);
//       numSort = numSort.sort().reverse();
//       numArr = [...numArr, ...numFlip, ...numSort];
//       if(numArr[0] === 0) return -1;
//       let solution = parseInt(numArr.join(''));
//       return solution;
//     }
//   }
//   return -1;
// };
