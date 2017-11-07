Array.prototype.uniq = function uniq() {
  let newArr = [];
  for ( let i = 0; i < this.length; i++ ) {
    if (!newArr.includes(this[i])) { newArr.push(this[i]); }
  }
  return newArr;
};

Array.prototype.twoSum = function twoSum() {
  let newArr = [];
  for ( let i = 0; i < this.length - 1; i++ ) {
    for ( let j = i + 1; j < this.length; j++ ) {
      if (this[i] + this[j] === 0) { newArr.push([i, j]); }
    }
  }
  return newArr;
};


Array.prototype.transpose = function transpose() {
  let newArr = new Array;
  for ( let i = 0; i < this[0].length; i++ ) {
    newArr[i] = [];
    for ( let j = 0; j < this.length; j++ ) {
      newArr[i].push(this[j][i]);
    }
  }
  return newArr;
};
