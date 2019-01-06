function Wall () {

  this.y = 0;
  this.x = width;

  this.speed = 2.5;

  this.color = [255, 255, 255];

  this.limit = 100;


  this.top = this.limit + random(height / 2 - this.limit*1.1);
  this.bottom = this.limit + random(height / 2 - this.limit*1.1);

  this.width = 10;

  this.gen = function () {
      this.top = this.limit + random(height / 2 - this.limit*1.1);
      this.bottom = this.limit + random(height / 2 - this.limit*1.1);
      this.x = width;

  }

  this.draw = function () {

    fill(this.color[0], this.color[1], this.color[2]);
    rect(this.x, this.y, this.width, this.top);
    rect(this.x, height - this.bottom, this.width, this.bottom);

  }

  this.update = function () {
    this.x -= this.speed;

    if (this.x < 0 && this.speed > 0) {
      this.gen();
    }

  }

}
