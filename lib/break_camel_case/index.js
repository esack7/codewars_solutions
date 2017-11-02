'use strict';

module.exports = function (string) {
  let brokenString = '';
  for(let i = 0; i< string.length; i++) {
    if(string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      brokenString += ` ${string.charAt(i)}`;
    } else brokenString += string.charAt(i);
  }
  return brokenString;
};
