function Ball (x, y) {

  this.x = x;
  this.y = y;
  this.radius = 10;
  this.color = [0, 255, 0];

  this.velocity = 0;
  this.gravity = 0.8;
  this.lift = -10;

  this.update = function () {

    this.velocity += this.gravity;
    this.y += this.velocity;

    if (this.y > height - this.radius) {
      this.y = height - this.radius;
      this.velocity = 0;
      gameOver();
    }

    if (this.y < this.radius) {
      this.y = this.radius;
      this.velocity = 0;
    }

  }

  this.draw = function () {
    fill(this.color[0], this.color[1], this.color[2]);

    ellipse(this.x, this.y, this.radius * 2);
  }

  this.jump = function () {

    if (this.velocity > this.lift) {
      this.velocity = this.lift;
    } else {
      this.velocity += this.lift;
    }
  }
}
