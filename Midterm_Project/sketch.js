// Scene 1
let num_of_circles = 500

let circles = []

let positions = []
let velocities = []
let accelerations = []

// Scene 2
let heart_x;
let heart_y;
let heart_size;

let hearts = [];
let heart_colors = [];

let heart_r;
let heart_g;
let heart_b;

// Scene 2 to scene 3 transition
let black;
let gray;
let amt;

// Scene 3
let panic;

// Scene 4
let door;

function setup() {
  createCanvas(800, 800);
  background(140);

  // Scene 1
  for (let i = 0; i <= num_of_circles; i += 1) {
    positions[i] = createVector(400, 400);
    velocities[i] = createVector(random(-5, 5), random(-5, 5));
    circles[i] = new Ball(positions[i], velocities[i], accelerations[i], red, green, blue);
  }
  
  // Scene 2
  heart_x = 400;
  heart_y = -140;
  heart_size = 1275;

  for (let i = 0; i <= 24; i += 1) {
    hearts[i] = new Heart(heart_x, heart_y, heart_size);
    heart_y += 20;
    heart_size -= 50;
  }

  heart_r = 0;
  heart_g = 0;
  heart_b = 0;

  time = 0;
  index = 0;

  red200 = color(200, 0, 0);
  red190 = color(190, 0, 0);
  red180 = color(180, 0, 0);
  red170 = color(170, 0, 0);
  red160 = color(160, 0, 0);
  red150 = color(150, 0, 0);
  red140 = color(140, 0, 0);
  red130 = color(130, 0, 0);
  red120 = color(120, 0, 0);
  red110 = color(110, 0, 0);
  red100 = color(100, 0, 0);
  red90 = color(90, 0, 0);
  red80 = color(80, 0, 0);
  red70 = color(70, 0, 0);
  red60 = color(60, 0, 0);
  red50 = color(50, 0, 0);
  red40 = color(40, 0, 0);
  red30 = color(30, 0, 0);
  red20 = color(20, 0, 0);
  red10 = color(10, 0, 0);
  red0 = color(0);

  for (let i = 0; i <= 24; i += 1) {
    heart_colors[i] = color(heart_r, heart_g, heart_b);
    heart_r += 14;
  }

  // Transition
  black = color(0);
  gray = color(140);
  amt = 0;

  // Scene 3
  panicking = new Panic();

}

function draw() {
  // // Scene 1
  // if (millis() < 27900) {
  //   scene_one();
  // }

  // if (millis() > 28000 && millis() < 30000) {
  //   background(0);
  // }

  // // Scene 2
  // if (millis() > 30000 && millis() < 53000) {
  //   scene_two();
  // }

  // // Transition
  // if (millis() > 55000 && millis() < 58000) {
  //   background(lerpColor(black, gray, amt));
  //   amt += 0.005;
  // }

  // // Scene 3
  // if (millis() > 58000 && millis() < 101000) {
  //   scene_three();
  // }

  // // Scene 4
  // if (millis() > 103000) {
  //   scene_four();
  // }
  scene_four();




}

function scene_one() {
  background(140);
  // Display objects
  for (let i = 0; i < 100; i += 1)  {
    circles[i].update();
    circles[i].display(106, 106, 106);
  }

  if (millis() > 1800) {
    for (let i = 100; i < 200; i += 1)  {
      circles[i].update();
      circles[i].display(84, 84, 89);
    }
  }

  if (millis() > 3600) {
    for (let i = 200; i < 300; i += 1)  {
      circles[i].update();
      circles[i].display(69, 69, 78);
    }
  }

  if (millis() > 5400) {
    for (let i = 300; i < 400; i += 1)  {
      circles[i].update();
      circles[i].display(57, 57, 71);
    }
  }

  if (millis() > 7200) {
    for (let i = 400; i <= 500; i += 1)  {
      circles[i].update();
      circles[i].display(33, 33, 41);
    }
  }

  // Accelerate objects
  if (millis() > 10000) {
    for (let i = 0; i < 100; i += 1)  {
      circles[i].display(106, 106, 106);
      circles[i].accelerate();
    }
    for (let i = 100; i < 200; i += 1)  {
      circles[i].display(84, 84, 89);
      circles[i].accelerate();
    }
    for (let i = 200; i < 300; i += 1)  {
      circles[i].display(69, 69, 78);
      circles[i].accelerate();
    }
    for (let i = 300; i < 400; i += 1)  {
      circles[i].display(57, 57, 71);
      circles[i].accelerate();
    }
    for (let i = 400; i <= 500; i += 1)  {
      circles[i].display(33, 33, 41);
      circles[i].accelerate();
    }
  }

  // Flicker Slow
  if (millis() > 25000 && millis() < 25200) {
    background(140);
  }

  if (millis() > 25400 && millis() < 25600) {
    background(140);
  }

  if (millis() > 25800 && millis() < 26000) {
    background(140);
  }

  if (millis() > 26200 && millis() < 26400) {
    background(140);
  }

  if (millis() > 26600 && millis() < 26800) {
    background(140);
  }

  // Flicker Fast
  if (millis() > 26900 && millis() < 27000) {
    background(140);
  }

  if (millis() > 27100 && millis() < 27200) {
    background(140);
  }

  if (millis() > 27300 && millis() < 27400) {
    background(140);
  }

  if (millis() > 27500 && millis() < 27600) {
    background(140);
  }

  if (millis() > 27700 && millis() < 27800) {
    background(140);
  }
}

function scene_two() {
  background(0);

  // Flicker 1
  if (millis() > 30000 && millis() < 30500) {
    hearts[24].display(red200); 
  }
  if (millis() > 32000 && millis() < 32500) {
    hearts[24].display(red200); 
  }
  if (millis() > 34000 && millis() < 34500) {
    hearts[24].display(red200); 
  }

  // Flicker 2
  if (millis() > 35500 && millis() < 35900) {
    hearts[24].display(red200); 
  }
  if (millis() > 36300 && millis() < 36700) {
    hearts[24].display(red200); 
  }
  if (millis() > 37000 && millis() < 37400) {
    hearts[24].display(red200); 
  }

  // Flicker 3
  if (millis() > 37800 && millis() < 38000) {
    hearts[24].display(red200); 
  }
  if (millis() > 38200 && millis() < 38400) {
    hearts[24].display(red200); 
  }
  if (millis() > 38600 && millis() < 38800) {
    hearts[24].display(red200); 
  }
  if (millis() > 39000 && millis() < 39200) {
    hearts[24].display(red200); 
  }
  if (millis() > 39400 && millis() < 39600) {
    hearts[24].display(red200); 
  }

  // Flicker 4
  if (millis() > 39800 && millis() < 39900) {
    hearts[24].display(red200); 
  }
  if (millis() > 40000 && millis() < 40100) {
    hearts[24].display(red200); 
  }
  if (millis() > 40200 && millis() < 40300) {
    hearts[24].display(red200); 
  }
  if (millis() > 40400 && millis() < 40500) {
    hearts[24].display(red200); 
  }
  if (millis() > 40600 && millis() < 40700) {
    hearts[24].display(red200); 
  }
  if (millis() > 40800 && millis() < 40900) {
    hearts[24].display(red200); 
  }
  if (millis() > 41000 && millis() < 41100) {
    hearts[24].display(red200); 
  }

  // Heart beat 1
  if (millis() > 41200 && millis() < 42000) {
    hearts[24].display(red200);
  }
  if (millis() > 42000 && millis() < 42500) {
    hearts[23].display(red200);
  }

  if (millis() > 42500 && millis() < 43500) {
    hearts[24].display(red200);
  }
  if (millis() > 43500 && millis() < 44000) {
    hearts[23].display(red200);
  }

  if (millis() > 44000 && millis() < 45000) {
    hearts[24].display(red200);
  }
  if (millis() > 45000 && millis() < 45500) {
    hearts[23].display(red200);
  }
  // Heart beat 2
  if (millis() > 45500 && millis() < 45750) {
    hearts[24].display(red200);
  }
  if (millis() > 45750 && millis() < 46000) {
    hearts[23].display(red200);
  }

  if (millis() > 46000 && millis() < 46275) {
    hearts[24].display(red200);
  }
  if (millis() > 46275 && millis() < 46500) {
    hearts[23].display(red200);
  }

  if (millis() > 46500 && millis() < 46750) {
    hearts[24].display(red200);
  }
  if (millis() > 46750 && millis() < 47000) {
    hearts[23].display(red200);
  }

  // Pattern
  if (millis() > 47000) {
    for (let i = 0; i <= 24; i += 1) {
      hearts[i].display(heart_colors[i]);
      translate(random(-1, 1),random(-1, 1));
    }  
  }

  if (millis() > 48000) {
    for (let i = 0; i <= 24; i += 1) {
      hearts[i].display(heart_colors[i]);
      translate(random(-2, 2),random(-2, 2));
    }  
  }

  if (millis() > 49000) {
    for (let i = 0; i <= 24; i += 1) {
      hearts[i].display(heart_colors[i]);
      translate(random(-3, 3),random(-3, 3));
    }  
  }

  if (millis() > 50000) {
    for (let i = 0; i <= 24; i += 1) {
      hearts[i].display(heart_colors[i]);
      translate(random(-4, 4),random(-4, 4));
    }  
  }

  if (millis() > 51000) {
    for (let i = 0; i <= 24; i += 1) {
      hearts[i].display(heart_colors[i]);
      translate(random(-5, 5),random(-5, 5));
    }  
  }

  if (millis() > 52000 && millis() < 53000) {
    background(0);
  }
}

function scene_three() {
  if (millis() > 58000 && millis() < 63000) {
    if (frameCount % 50 == 0) {
      panicking.display();
      panicking.update();
    }
  }

  if (millis() > 63000 && millis() < 68000) {
    if (frameCount % 25 == 0) {
      panicking.display();
      panicking.update();
    }
  }

  if (millis() > 68000 && millis() < 73000) {
    if (frameCount % 12 == 0) {
      panicking.display();
      panicking.update();
    }
  }
  
  if (millis() > 73000 && millis() < 78000) {
    if (frameCount % 6 == 0) {
      panicking.display();
      panicking.update();
    }
  }

  if (millis() > 78000 && millis() < 83000) {
    if (frameCount % 3 == 0) {
      panicking.display();
      panicking.update();
    }
  }

  if (millis() > 83000 && millis() < 100000) {
      panicking.display();
      panicking.update();
  }

  if (millis() > 100000 && millis() < 101000) {
    background(140);
  }
}

function scene_four() {
  background(0);
  // c1 = color(255, 204, 0);
  // c2 = color(255);
  // setGradient(c1, c2);
  // fill(lerpColor(c1, c2, 0.5));
  fill(20);
  beginShape();
  vertex(0, 0);
  vertex(200, 0);
  vertex(325, 200);
  vertex(325, 400);
  vertex(200, 800);
  vertex(0, 800);
  vertex(0, 0);
  endShape(CLOSE);
  
  
  fill(20);
  beginShape();
  vertex(800, 0);
  vertex(600, 0);
  vertex(475, 200);
  vertex(475, 400);
  vertex(600, 800);
  vertex(800, 800);
  vertex(800, 0);
  endShape(CLOSE);
  noStroke();

  fill(20);
  beginShape();
  vertex(327, 400);
  vertex(203, 800);
  vertex(598, 800);
  vertex(473, 400);
  endShape(CLOSE);

  beginShape();
  vertex(202, 0);
  vertex(598, 0);
  vertex(472, 200);
  vertex(327, 200);
  endShape(CLOSE);

  fill(10);
  beginShape();
  vertex(325, 375);
  vertex(325, 400);
  vertex(200, 800);
  vertex(180, 800);
  endShape(CLOSE);

  fill(10);
  beginShape();
  vertex(475, 375);
  vertex(475, 400);
  vertex(600, 800);
  vertex(620, 800);
  endShape(CLOSE);

  // fill(10);
  // beginShape();
  // vertex(350, 225);
  // vertex(450, 225);
  // vertex(450, 398);
  // vertex(350, 398);
  // endShape(CLOSE);
  door = new Door(350, 225, 100, 173)
  door.display();

  fill(50);
  beginShape();
  vertex(370, 310);
  vertex(385, 310);
  vertex(385, 330);
  vertex(370, 330);
  endShape(CLOSE);

  fill(60);
  beginShape();
  vertex(375, 318);
  vertex(395, 318);
  vertex(395, 322);
  vertex(375, 322);
  endShape(CLOSE);
}

class Door {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  display() {
    this.frame();
    this.bolts();
    this.bars();
    this.window();
    // this.web();
    this.cracks();
    this.light();
    this.light_on();
    // this.figure();
    
  }

  frame() {
    fill(10);
    rect(this.x, this.y, this.width, this.height);
    fill(20);
    rect(this.x + 5, this.y + 5, this.width - 10, this.height - 10);
  }
  
  bolts() {
    fill(10);
    for (let j = 241; j <= 381; j += 20) {
      circle(440, j, 2);
    }
    for (let j = 241; j <= 381; j += 20) {
      circle(360, j, 2);
    }
  }

  bars() {
    for (let j = 250; j <= 370; j += 30) {
      rect(350, j, 100, 2);
    }
  }

  window() {
    fill(10);
    square(this.x + 25, this.y + 25, this.width - 50);
    fill(50);
    square(this.x + 27, this.y + 27, this.width - 54);
  }

  web() {
    stroke(150);
    noFill();
    line(475, 200, 475, 175);
    line(475, 200, 505, 200);
    line(475, 200, 488, 230);

    line(475, 180, 500, 200);
    line(500, 200, 485, 225);
    line(485, 225, 460, 225);
    line(460, 225, 450, 200);
    line(450, 200, 475, 180);
    // bezier(500, 200, 490, 200, 480, 200, 475, 180);
    // bezier(475, 180, 470, 195, 470, 195, 455, 200);
    // bezier(455, 200, 470, 195, 470, 195, 465, 220);
    circle(475, 200, 1);
  }

  cracks() {
    beginShape();
    vertex(100, 400);
    vertex(110, 390);
    vertex(140, 400);
    vertex(145, 400);
    vertex(140, 380);
    vertex(155, 400);
    vertex(160, 400);
    vertex(165, 370);
    vertex(160, 360);
    vertex(162, 355);
    vertex(160, 350);
    vertex(167, 370);
    vertex(170, 380);
    vertex(100, 600);
    endShape(CLOSE);
  }

  light() {
    stroke(255);
    line(400, 253, 400, 255);
    bezier(width/2 - 10, 260, width/2 - 5, 255, width/2 + 5, 255, width/2 + 10, 260);
    ellipse(400, 261, 20, 5);
  }

  light_on() {
    fill(201, 187, 93);
    ellipse(400, 261, 20, 5);
  }

  figure() {
    fill(0);
    ellipseMode(RADIUS);
    ellipse(width/2, height/3 + 8, 15, 17);
    fill(255, 0, 0);
    circle(width/2 - 5, height/3 + 8, 3);
    circle(width/2 + 5, height/3 + 8, 3);
    fill(0);
    circle(width/2 - 5, height/3 + 8, 2);
    circle(width/2 + 5, height/3 + 8, 2);
    fill(255, 0, 0);
    bezier(width/2 - 8, height/3 + 15, width/2 - 5, height/3 + 20, width/2 + 5, height/3 + 20, width/2 + 8, height/3 + 15);

  }
}

class Ball {
  constructor(position, velocity, acceleration) {
    this.position = position;
    this.velocity = velocity;
    this.acceleration = acceleration
    this.maxspeed = 20;
  }

  display(red, green, blue) {
    stroke(0);
    fill(red, green, blue);
    circle(this.position.x, this.position.y, 25);
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
}

class Heart {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.original_x = x;
    this.original_y = y;
  }

  display(color) {
    fill(color);
    // Heart Shape by Mithru from https://editor.p5js.org/Mithru/sketches/Hk1N1mMQg
    beginShape(); // Begin drawing a custom shape
    vertex(this.x, this.y); // Uses the x and y coordinates to create a vertex
    bezierVertex(this.x - this.size / 2, this.y - this.size / 2, this.x - this.size, this.y + this.size / 3, this.x, this.y + this.size); // The x location, y location and heart size are utilized in the control and anchor points to draw the left half of the heart
    bezierVertex(this.x + this.size, this.y + this.size / 3, this.x + this.size / 2, this.y - this.size / 2, this.x, this.y); // The x location, y location and heart size are utilized in the control and anchor points to draw the right half of the heart
    endShape(CLOSE);  // End drawing a custom shape using mode CLOSE
  }
}

class Panic {
  constructor() {
    this.x1 = 0;
    this.y1 = 0;
    this.x2 = random(0, 800);
    this.y2 = random(0, 800);
    this.last_x = 0;
    this.last_y = 0;
  }

  
  display() {
    stroke(0);
    strokeWeight(1);
    line(this.x1, this.y1, this.x2, this.y2);
  }

  update() {
    this.x1 = this.x2;
    this.y1 = this.y2;
    this.x2 = random(0, 800);
    this.y2 = random(0, 800);
    
  }
}
