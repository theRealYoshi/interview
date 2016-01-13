Array.prototype.find = function(fn) {
  for (var i = 0; i < this.length; i++) {
    if(fn(this[i])){
      return this[i];
    }
  }
  return undefined;
}

Array.prototype.findIndex = function(fn) {
  for (var i = 0; i < this.length; i++) {
    if (fn(this[i])){
      return i;
    }
  }
  return -1;
}

Array.prototype.includes = function(search) {
  for (var i = 0; i < this.length; i++) {
    if (search === this[i]){
      return true;
    }
  }
  return false
}
