const MovingObject = function MovingObject() {
  this.name = "name";
};

MovingObject.prototype.hello = function () {
  console.log("hello");
};

const Ship = function Ship() {
  this.color = "color";
};

const Asteroid = function Asteroid() {
  this.speed = 50;
  MovingObject.call(this);
};


Function.prototype.inherits = function inherits(superClass) {
  function Surrogate() {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};




// Function.prototype.inherits = function inherits(superClass) {
//   this.prototype = Object.create(superClass.prototype);
//   this.prototype.constructor = this;
// };
