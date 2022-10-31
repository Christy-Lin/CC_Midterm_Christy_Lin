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

let heart1;
let heart2;


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
  background(173, 216, 230);

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
  background(173, 216, 230);
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
}

function scene_two() {
  background(0);
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
    hearts[24].display(red200);
  }
  if (millis() > 47050) {
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47100) {
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47150) {
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47200) {
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47250) {
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47300) {
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47350) {
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47400) {
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47450) {
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47500) {
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47550) {
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47600) {
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47650) {
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47700) {
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47750) {
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47800) {
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47850) {
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47900) {
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }
  if (millis() > 47950) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red200);
  }

  if (millis() > 48000) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red190);
    hearts[24].display(red190);
  }
  
  if (millis() > 48200) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red180);
    hearts[23].display(red180);
    hearts[24].display(red180);
  }
    
  if (millis() > 48400) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red170);
    hearts[22].display(red170);
    hearts[23].display(red170);
    hearts[24].display(red170);
  }

  if (millis() > 48600) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red160);
    hearts[21].display(red160);
    hearts[22].display(red160);
    hearts[23].display(red160);
    hearts[24].display(red160);
  }

  if (millis() > 48800) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red150);
    hearts[21].display(red150);
    hearts[21].display(red150);
    hearts[22].display(red150);
    hearts[23].display(red150);
    hearts[24].display(red150);
  }

  if (millis() > 49000) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red140);
    hearts[20].display(red140);
    hearts[21].display(red140);
    hearts[21].display(red140);
    hearts[22].display(red140);
    hearts[23].display(red140);
    hearts[24].display(red140);
  }

  if (millis() > 49200) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red130);
    hearts[19].display(red130);
    hearts[20].display(red130);
    hearts[21].display(red130);
    hearts[21].display(red130);
    hearts[22].display(red130);
    hearts[23].display(red130);
    hearts[24].display(red130);
  }

  if (millis() > 49400) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red120);
    hearts[18].display(red120);
    hearts[19].display(red120);
    hearts[20].display(red120);
    hearts[21].display(red120);
    hearts[21].display(red120);
    hearts[22].display(red120);
    hearts[23].display(red120);
    hearts[24].display(red120);
  }

  if (millis() > 49600) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red110);
    hearts[17].display(red110);
    hearts[18].display(red110);
    hearts[19].display(red110);
    hearts[20].display(red110);
    hearts[21].display(red110);
    hearts[21].display(red110);
    hearts[22].display(red110);
    hearts[23].display(red110);
    hearts[24].display(red110);
  }

  if (millis() > 49800) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red100);
    hearts[16].display(red100);
    hearts[17].display(red100);
    hearts[18].display(red100);
    hearts[19].display(red100);
    hearts[20].display(red100);
    hearts[21].display(red100);
    hearts[21].display(red100);
    hearts[22].display(red100);
    hearts[23].display(red100);
    hearts[24].display(red100);
  }
  if (millis() > 50000) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red90);
    hearts[15].display(red90);
    hearts[16].display(red90);
    hearts[17].display(red90);
    hearts[18].display(red90);
    hearts[19].display(red90);
    hearts[20].display(red90);
    hearts[21].display(red90);
    hearts[21].display(red90);
    hearts[22].display(red90);
    hearts[23].display(red90);
    hearts[24].display(red90);
  }

  if (millis() > 50200) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red80);
    hearts[14].display(red80);
    hearts[15].display(red80);
    hearts[16].display(red80);
    hearts[17].display(red80);
    hearts[18].display(red80);
    hearts[19].display(red80);
    hearts[20].display(red80);
    hearts[21].display(red80);
    hearts[21].display(red80);
    hearts[22].display(red80);
    hearts[23].display(red80);
    hearts[24].display(red80);
  }

  if (millis() > 50400) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red70);
    hearts[13].display(red70);
    hearts[14].display(red70);
    hearts[15].display(red70);
    hearts[16].display(red70);
    hearts[17].display(red70);
    hearts[18].display(red70);
    hearts[19].display(red70);
    hearts[20].display(red70);
    hearts[21].display(red70);
    hearts[21].display(red70);
    hearts[22].display(red70);
    hearts[23].display(red70);
    hearts[24].display(red70);
  }

  if (millis() > 50600) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red60);
    hearts[12].display(red60);
    hearts[13].display(red60);
    hearts[14].display(red60);
    hearts[15].display(red60);
    hearts[16].display(red60);
    hearts[17].display(red60);
    hearts[18].display(red60);
    hearts[19].display(red60);
    hearts[20].display(red60);
    hearts[21].display(red60);
    hearts[21].display(red60);
    hearts[22].display(red60);
    hearts[23].display(red60);
    hearts[24].display(red60);
  }

  if (millis() > 50800) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red50);
    hearts[11].display(red50);
    hearts[12].display(red50);
    hearts[13].display(red50);
    hearts[14].display(red50);
    hearts[15].display(red50);
    hearts[16].display(red50);
    hearts[17].display(red50);
    hearts[18].display(red50);
    hearts[19].display(red50);
    hearts[20].display(red50);
    hearts[21].display(red50);
    hearts[21].display(red50);
    hearts[22].display(red50);
    hearts[23].display(red50);
    hearts[24].display(red50);
  }

  if (millis() > 51000) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red40);
    hearts[10].display(red40);
    hearts[11].display(red40);
    hearts[12].display(red40);
    hearts[13].display(red40);
    hearts[14].display(red40);
    hearts[15].display(red40);
    hearts[16].display(red40);
    hearts[17].display(red40);
    hearts[18].display(red40);
    hearts[19].display(red40);
    hearts[20].display(red40);
    hearts[21].display(red40);
    hearts[21].display(red40);
    hearts[22].display(red40);
    hearts[23].display(red40);
    hearts[24].display(red40);
  }

  if (millis() > 51200) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red30);
    hearts[9].display(red30);
    hearts[10].display(red30);
    hearts[11].display(red30);
    hearts[12].display(red30);
    hearts[13].display(red30);
    hearts[14].display(red30);
    hearts[15].display(red30);
    hearts[16].display(red30);
    hearts[17].display(red30);
    hearts[18].display(red30);
    hearts[19].display(red30);
    hearts[20].display(red30);
    hearts[21].display(red30);
    hearts[21].display(red30);
    hearts[22].display(red30);
    hearts[23].display(red30);
    hearts[24].display(red30);
  }

  if (millis() > 51400) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red20);
    hearts[8].display(red20);
    hearts[9].display(red20);
    hearts[10].display(red20);
    hearts[11].display(red20);
    hearts[12].display(red20);
    hearts[13].display(red20);
    hearts[14].display(red20);
    hearts[15].display(red20);
    hearts[16].display(red20);
    hearts[17].display(red20);
    hearts[18].display(red20);
    hearts[19].display(red20);
    hearts[20].display(red20);
    hearts[21].display(red20);
    hearts[21].display(red20);
    hearts[22].display(red20);
    hearts[23].display(red20);
    hearts[24].display(red20);
  }

  if (millis() > 51600) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red10);
    hearts[8].display(red10);
    hearts[9].display(red10);
    hearts[10].display(red10);
    hearts[11].display(red10);
    hearts[12].display(red10);
    hearts[13].display(red10);
    hearts[14].display(red10);
    hearts[15].display(red10);
    hearts[16].display(red10);
    hearts[17].display(red10);
    hearts[18].display(red10);
    hearts[19].display(red10);
    hearts[20].display(red10);
    hearts[21].display(red10);
    hearts[21].display(red10);
    hearts[22].display(red10);
    hearts[23].display(red10);
    hearts[24].display(red10);
  }
  if (millis() > 51800) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red10);
    hearts[7].display(red10);
    hearts[8].display(red10);
    hearts[9].display(red10);
    hearts[10].display(red10);
    hearts[11].display(red10);
    hearts[12].display(red10);
    hearts[13].display(red10);
    hearts[14].display(red10);
    hearts[15].display(red10);
    hearts[16].display(red10);
    hearts[17].display(red10);
    hearts[18].display(red10);
    hearts[19].display(red10);
    hearts[20].display(red10);
    hearts[21].display(red10);
    hearts[21].display(red10);
    hearts[22].display(red10);
    hearts[23].display(red10);
    hearts[24].display(red10);
  }
  if (millis() > 52000) {
    hearts[0].display(red0);
    hearts[1].display(red0);
    hearts[2].display(red0);
    hearts[3].display(red0);
    hearts[4].display(red0);
    hearts[5].display(red0);
    hearts[6].display(red0);
    hearts[7].display(red0);
    hearts[8].display(red0);
    hearts[9].display(red0);
    hearts[10].display(red0);
    hearts[11].display(red0);
    hearts[12].display(red0);
    hearts[13].display(red0);
    hearts[14].display(red0);
    hearts[15].display(red0);
    hearts[16].display(red0);
    hearts[17].display(red0);
    hearts[18].display(red0);
    hearts[19].display(red0);
    hearts[20].display(red0);
    hearts[21].display(red0);
    hearts[21].display(red0);
    hearts[22].display(red0);
    hearts[23].display(red0);
    hearts[24].display(red0);
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