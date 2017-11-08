'use strict';

module.exports = function(url) {
  let urlSplit = url.split('://');
  if(urlSplit[1]) urlSplit = urlSplit[1].split('.');
  if(!urlSplit[1]) urlSplit = urlSplit[0].split('.');
  if(urlSplit[0] === 'www') return urlSplit[1];
  return urlSplit[0];
};
