String.prototype.endsWith = function(search, position) {
  var endIdx, searchIdx = search.length - 1;
  if (position){
    endIdx = position - 1;
  } else {
    endIdx = this.length - 1;
  }
  while(searchIdx !== 0){
    if (search[searchIdx] !== this[endIdx]){
      return false;
    }
    searchIdx -= 1;
    endIdx -= 1;
  }
  return true;
}
