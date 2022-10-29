let num_of_circles = 500

let circles = []

let positions = []
let velocities = []
let accelerations = []

function setup() {
  createCanvas(800, 800);
  background(173, 216, 230);

  for (let i = 0; i <= num_of_circles; i += 1) {
    positions[i] = createVector(400, 400);
    velocities[i] = createVector(random(-5, 5), random(-5, 5));
    circles[i] = new Ball(positions[i], velocities[i], accelerations[i], red, green, blue);
  }
}

function draw() {
  background(173, 216, 230);
  if (millis() < 27900) {
    scene_one();
  }
}

function scene_one() {
  // Display objects
  for (let i = 0; i < 100; i += 1)  {
    circles[i].update();
    circles[i].display(13, 204, 255);
  }

  if (millis() > 1800) {
    for (let i = 100; i < 200; i += 1)  {
      circles[i].update();
      circles[i].display(24, 183, 255);
    }
  }

  if (millis() > 3600) {
    for (let i = 200; i < 300; i += 1)  {
      circles[i].update();
      circles[i].display(38, 157, 255);
    }
  }

  if (millis() > 5400) {
    for (let i = 300; i < 400; i += 1)  {
      circles[i].update();
      circles[i].display(57, 122, 255);
    }
  }

  if (millis() > 7200) {
    for (let i = 400; i <= 500; i += 1)  {
      circles[i].update();
      circles[i].display(25, 71, 255);
    }
  }

  // Accelerate objects
  if (millis() > 10000) {
    for (let i = 0; i < 100; i += 1)  {
      circles[i].display(13, 204, 255);
      circles[i].accelerate();
    }
    for (let i = 100; i < 200; i += 1)  {
      circles[i].display(24, 183, 255);
      circles[i].accelerate();
    }
    for (let i = 200; i < 300; i += 1)  {
      circles[i].display(38, 157, 255);
      circles[i].accelerate();
    }
    for (let i = 300; i < 400; i += 1)  {
      circles[i].display(57, 122, 255);
      circles[i].accelerate();
    }
    for (let i = 400; i <= 500; i += 1)  {
      circles[i].display(25, 71, 255);
      circles[i].accelerate();
    }
  }

  // Flicker Slow
  if (millis() > 25000 && millis() < 25200) {
    background(173, 216, 230);
  }

  if (millis() > 25400 && millis() < 25600) {
    background(173, 216, 230);
  }

  if (millis() > 25800 && millis() < 26000) {
    background(173, 216, 230);
  }

  if (millis() > 26200 && millis() < 26400) {
    background(173, 216, 230);
  }

  if (millis() > 26600 && millis() < 26800) {
    background(173, 216, 230);
  }

  // Flicker Fast
  if (millis() > 26900 && millis() < 27000) {
    background(173, 216, 230);
  }

  if (millis() > 27100 && millis() < 27200) {
    background(173, 216, 230);
  }

  if (millis() > 27300 && millis() < 27400) {
    background(173, 216, 230);
  }

  if (millis() > 27500 && millis() < 27600) {
    background(173, 216, 230);
  }

  if (millis() > 27700 && millis() < 27800) {
    background(173, 216, 230);
  }
  
  if (millis() > 27900) {
    background(173, 216, 230);
  }
}

class Ball {
  constructor(position, velocity, acceleration, red, green, blue) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration
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
  }

  accelerate() {
    this.velocity.mult(1.01);
    this.velocity.limit(this.maxspeed);
  }

  display(red, green, blue) {
    stroke(0);
    fill(red, green, blue);
    circle(this.position.x, this.position.y, 25);
  }
}