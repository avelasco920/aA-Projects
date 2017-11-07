const Cat = function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
  // this.cuteStatement = function () {
  //   return `Everyone loves ${name}!`;
  // };
};

Cat.prototype.cuteStatement = function cuteStatement() {
  return `Everyone loves ${this.name}!`;
};
