Array.prototype.bubbleSort = function bubbleSort() {
  var sorted = false;
  while ( sorted === false ) {
    sorted = true;
    for ( let i = 0; i < this.length; i++ ) {
      if (this[i] > this[i + 1]) {
        let left = this[i];
        this[i] = this[i + 1];
        this[i + 1] = left;
        sorted = false;
      }
    }
  }
  return this;
};


String.prototype.substrings = function substrings() {
  let resultArr = [];
  for ( let i = 0; i < this.length; i++ ) {
    for ( let j = i; j < this.length; j++ ) {
      resultArr.push(this.substring(i, j + 1));
    }
  }
  return resultArr;
};
