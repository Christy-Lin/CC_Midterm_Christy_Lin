let red = 13;
let green = 204;
let blue = 255;

let num_of_circles = 400

let circles = []
let velocities = []
let positions = []

function setup() {
  createCanvas(800, 800);
  background(173, 216, 230);

  for (let i = 0; i <= num_of_circles; i += 1) {
    positions[i] = createVector(400, 400);
    velocities[i] = createVector(random(-5, 5), random(-5, 5));
    circles[i] = new Ball(positions[i], velocities[i], red, green, blue);
  }
}

function draw() {
  background(173, 216, 230);

  for (let i = 0; i <= num_of_circles; i += 1)  {
    circles[i].update();
    circles[i].display();
  }

  if (millis() > 3000 && millis() < 3100) {
    fill(173, 216, 230);
    square(0, 0, 800); 
  }
  if (millis() > 3200 && millis() < 3300) {
    fill(173, 216, 230);
    square(0, 0, 800); 
  }
}

class Ball {
  constructor(position, velocity, red, green, blue) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = createVector(1, 1);
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.maxspeed = 20;
  }

  update() {
    this.position.add(this.velocity);
    if ((this.position.x + 12.5 > width) || (this.position.x - 12.5 < 0)) {
      this.velocity.x = -this.velocity.x;
    }
    if ((this.position.y + 12.5 > height) || (this.position.y - 12.5 < 0)) {
      this.velocity.y = -this.velocity.y;
    }
    // this.velocity.add(this.acceleration);
    // this.velocity.limit(this.maxspeed);
    // this.acceleration.mult(0);
  }

  display() {
    stroke(0);
    // noStroke();
    fill(red, green, blue);
    circle(this.position.x, this.position.y, 25);
  }

}