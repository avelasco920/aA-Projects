function sum(...nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    counter += nums[i];
  }
  return counter;
}

function sum(num1, num2) {
  let nums = Array.from(arguments);
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    counter += nums[i];
  }
  return counter;
}

// console.log(sum(1, 2, 3, 4) === 10);
// console.log(sum(1, 2, 3, 4, 5) === 15);


Function.prototype.myBind = function myBind(object) {
  let remaining = Array.prototype.slice.call(arguments, 1);
  const that = this;
  return function(){
    let args = Array.from(arguments);
    let allArgs = remaining.concat(args);
    that.apply(object, allArgs);
  };
};

Function.prototype.myBind = function myBind(object, ...bindArgs) {
  return (...callArgs) => {
    this.apply(object, bindArgs.concat(callArgs));
  };
};

// const myBoundFunction = someObject.someMethod.myBind(someOtherObject, arg1, arg2);
// myBoundFunction(arg3)

class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

// const markov = new Cat("Markov");
// const breakfast = new Cat("Breakfast");
//
// markov.says.myBind(breakfast, "meow", "Kush")();
//

// const curriedSum = function curriedSum(numArgs) {
//   let nums = [];
//   const _curriedSum = function _curriedSum(arg) {
//     nums.push(arg);
//     if (nums.length === numArgs) {
//       let total = nums.reduce(function (sumValue, value) {return sumValue + value;} , 0);
//       return total;
//     } else {
//       return _curriedSum;
//     }
//   };
//   return _curriedSum;
// };

Function.prototype.curry = function curry(numArgs) {
  let nums = [];
  let that = this;
  const _curry = function(arg) {
    nums.push(arg);
    if (nums.length === numArgs) {
      console.log(nums);
      return that.apply(that, nums);
    } else {
      return _curry;
    }
  };
  return _curry;
};

//

Function.prototype.curry = function curry(numArgs) {
  let nums = [];
  const _curry = (arg) => {
    nums.push(arg);
    if (nums.length === numArgs) {
      console.log(nums);
      return this(...nums);
    } else {
      return _curry;
    }
  };
  return _curry;
};







function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
console.log(f1 = f1(6)); // = 30











//
