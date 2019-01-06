let walls;
let score;
let start;
let game;
let frames;
let fps;

function setup() {
  fps = 60;
  start = false;

  createCanvas(480, 480);
  frameRate(fps);

  frames = 0;
  score = 0;
  game = true;

  ball = new Ball(width / 2, height / 2);

  walls = [];

  walls.push(new Wall());

}

function draw() {

  frames++;

  background(0);
  ball.draw();

  if (start) {
      ball.update();

    for (let i = 0; i < walls.length; i++) {
      walls[i].draw();
      walls[i].update();
      hit(ball, walls[i]);
    }

    if (frames / fps == 1) {
      walls.push(new Wall());
    }

    if (frames / fps == 2) {
      walls.push(new Wall());
    }

  }




}

function mousePressed () {
  if (!start) {
    start = true;
  }
  if (game && start) {
      ball.jump();
  }
}

function gameOver() {
  for (let i = 0; i < walls.length; i++) {
    walls[i].speed = 0;
  }

  ball.color = [255, 0, 0];
  game = false;
}

function hit (ball, wall) {

  if (ball.y - ball.radius <= wall.top || ball.y + ball.radius >= height - wall.bottom) {
      let distX = Math.abs(wall.x + wall.width - ball.x - ball.radius);

      if (distX <= ball.radius) {
        ball.color = [255, 0, 0];
        wall.color = [255, 0, 0];

        gameOver();
      }

  }







}
