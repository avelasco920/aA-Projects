Array.prototype.myEach = function myEach(callback) {
  for ( let i = 0; i < this.length; i++ ) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function myMap(callback) {
  let newArr = [];
  this.myEach ( function(x) { newArr.push(callback(x)); } );
  return newArr;
};

Array.prototype.myReduce = function myReduce(callback, initialValue) {
  if ( initialValue === undefined ) { var total = this.shift(); }
  else { var total = initialValue; }
  this.myEach ( function(x) { total = callback(total, x); } );
  return total;
};
