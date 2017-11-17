'use strict';

module.exports = function(num){
  let numArr = num.toString().split('');
  let checkedArr = [];
  let solution;
  let revSol;
  for(let i = numArr.length - 1; i > 0; i--) {
    let a = numArr[i];
    let b = numArr[i - 1];
    numArr.pop();
    numArr.pop();
    checkedArr.unshift(b);
    checkedArr.unshift(a);
    solution = [...numArr, ...checkedArr];
    solution = parseInt(solution.join(''));
    if(solution < num) return solution;
    numArr.push(checkedArr[0]);
    checkedArr.shift();
    checkedArr = checkedArr.sort();
  }
  if(solution) {
    revSol = solution.toString().split('');
    console.log(revSol);
    let grab = revSol.pop();
    // console.log(revSol);
    revSol.unshift(grab);
    revSol = parseInt(revSol.join(''));
    if(revSol < num) return revSol;
  }
  return -1;
};
