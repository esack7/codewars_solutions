module.exports = function factorial(n) {
  let answer;
  if (n < 0 || n > 12) throw new RangeError('RangeError');
  if (n >= 1) {
    let current = n;
    n -= 1;
    answer = current * factorial(n);
  }
  if (n === 0) return 1;
  return answer;
};