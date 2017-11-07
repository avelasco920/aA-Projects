class MovingObject {
  constructor(pos, vel, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.radius = radius;
    this.color = color;
  }
}

MovingObject.prototype.draw = function draw(ctx) {
  ctx.fillStyle = this.color;
};

const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00"}
);
