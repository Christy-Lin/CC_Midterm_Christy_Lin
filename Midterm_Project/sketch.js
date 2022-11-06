// Scene 1
let num_of_circles = 500

let circles = []

let positions = []
let velocities = []
let accelerations = []

// Transition 1
// let black;
// let gray;
// let amt;

// Scene 2
let heart_x;
let heart_y;
let heart_size;

let hearts = [];
let heart_colors = [];

let heart_r;
let heart_g;
let heart_b;

let time;
let index;



// Scene 3
// let position1_scene2;
// let position2_scene2;
// let position3_scene2;

// let velocity1_scene2;
// let velocity2_scene2;
// let velocity3_scene2;

// let line1;
// let line2;
// let line3;

function setup() {
  createCanvas(800, 800);
  background(140);

  for (let i = 0; i <= num_of_circles; i += 1) {
    positions[i] = createVector(400, 400);
    velocities[i] = createVector(random(-5, 5), random(-5, 5));
    circles[i] = new Ball(positions[i], velocities[i], accelerations[i], red, green, blue);
  }

  // black = color(0);
  // gray = color(150);
  // amt = 0;
  
  heart_x = 400;
  heart_y = -140;
  heart_size = 1275;


  // position1_scene2 = createVector(0, 600);
  // position2_scene2 = createVector(600, 0);
  // position3_scene2 = createVector(800, 600);

  
  // velocity2_scene2 = createVector(0, 1);
  // velocity3_scene2 = createVector(-1, 0);

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

  // heart_colors = [red0, red0, red0, red0, red0, red10, red20, red30, red40, red50, red60, red70, red80, red90, red100, red110, red120, red130, red140, red150, red160, red170, red180, red190, red200]

}

function draw() {
  // Scene 1
  if (millis() < 27900) {
    scene_one();
  }

  if (millis() > 28000 && millis() < 30000) {
    background(0);
  }

  if (millis() > 30000 && millis() < 100000) {
    scene_two();
  }

  // Scene 3
  // velocity1_scene2 = createVector(random(-8, 10), random(-10, 10));
  // line1 = new Line(position1_scene2, velocity1_scene2);
  // line1.display();
  // line1.update();

  // if (millis() > 30000 && millis() < 34000) {
  //   background(lerpColor(black, gray, amt));
  //   amt += 0.005;
  // }


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
    for (let i = 0; i <= 5000; i += 1) {
      display_heart(index);
    }
  }

  if (millis() > 47000) {
    for (let i = 0; i <= 24; i += 1) {
      hearts[i].display(heart_colors[i]);
    }  
  }

}

function display_heart(index) {
  hearts[index].display(heart_colors[index]);
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

// class Line {
//   constructor(position, velocity) {
//     this.position = position;
//     this.velocity = velocity;
//   }

//   display() {
//     noStroke();
//     fill(75);
//     circle(this.position.x, this.position.y, 15);
//   }

//   update() {
//     this.position.add(this.velocity);
//     if ((this.position.x > width) || (this.position.x < 0)) {
//       this.velocity.x = -this.velocity.x;
//     }
//     if ((this.position.y > height) || (this.position.y < 0)) {
//       this.velocity.y = -this.velocity.y;
//     }
//   }
// }

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

  // clear() {
  //   this.x = -10000;
  //   this.y = -10000;
  // }

  // restore_display() {
  //   this.x = this.original_x;
  //   this.y = this.original_y;
  // }
}