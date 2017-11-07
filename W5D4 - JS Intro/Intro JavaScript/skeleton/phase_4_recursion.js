function range(start, end) {
  if (start > end) {
    return [];
  }
  else {
  return [start].concat(range(start + 1, end));
  }
}

function sumRec(arr) {
  if ( arr.length === 0 ) {
    return 0;
  }
  else {
    return arr[0] + sumRec(arr.slice(1, arr.length));
  }
}

function exponent(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else if (exp % 2 === 0) {
    return exponent(base, exp / 2 ) * exponent(base, exp / 2 ) ;
  }
  else if (exp % 2 !== 0) {
    return exponent(base, (exp - 1) / 2 ) * exponent(base, (exp - 1) / 2 ) * base ;
  }
}

function fibonacci(n) {
  if (n === 2) {
    return [0, 1];
  }
  else {
    let last = fibonacci(n - 1);
    let num = last[last.length - 1] + last[last.length - 2];
    last.push(num);
    return last;
  }
}


function bsearch(arr, target) {
  if (arr.length === 0) {
    return -1;
  }
  let midIdx = Math.floor(arr.length / 2);
  let middle = arr[midIdx];
  if (target === middle) {
    return midIdx;
  }
  else if ( target > middle ) {
    let right = bsearch(arr.slice(midIdx, arr.length), target);
    if (right === -1) {
      return -1;
    }
    else {
      return midIdx + right;
    }
  }
  else {
    return (bsearch(arr.slice(0, midIdx), target));
  }
}


function mergesort(arr) {
  let left = arr.slice(0,(arr.length / 2));
  let right = arr.slice((arr.length / 2), arr.length);
  if (arr.length <= 1) {
    return arr;
  }
  left = mergesort(left);
  right = mergesort(right);
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    }
    else {
      result.push(right.shift());
    }
  }
  return result.concat(left).concat(right);
}


function subsets(arr) {
  if (arr.length < 1) {
    return [[]];
  }
  else {
    let last = arr.pop();
    var subs = subsets(arr);
    console.log(subs);
    var result = subs.map( function(x) {
      return x.concat([last]);
    });
    return result.concat(subs);
  }
}























//
