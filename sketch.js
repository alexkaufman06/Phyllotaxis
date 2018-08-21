var n = 0;
var angleSlider;
var play = false;
var scaleSlider; // (how much the radius is changing)
var seeds = []; // use this later with reset a sketch
var button, hx, red, g, b, c;
// var flowerAngles = [ 147.4, 139.9, 137.3, 137.1, 135.1, 65.4 ];
// 216.8, 90.1 (flower but needs to start at this angle) move quickly;
// var crosshairAngles = [ 90 ];

function setup() {
  var cnv = createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES); // comment out for different effect
  colorMode(HSB);
  background(0);
  angleSlider = createSlider(0, 360, 137.5, .1);
  angleSlider.position(20,40);
  scaleSlider = createSlider(0, 15, 4, .1);
  scaleSlider.position(20, 70);
  button = createButton("Play/Pause");
  button.mousePressed(playSwitch);
  button.position(window.innerWidth / 2 - 60, 10);

  input = createInput();
  input.value(n);
  input.style('width', '50px');
}

function playSwitch() {
  if (play) {
    play = false;
    input.value(n);
  } else {
    play = true;
  }
}

function draw() {
  // clear(); background(0);  // creates cool pattern
  // input.value(n);
  var a = n * angleSlider.value();
  var r = scaleSlider.value() * sqrt(n);
  var x = r * cos(a) + width / 2 ;
  var y = r * sin(a) + height / 2;
  red = n % 256;
  g = 255;
  b = 255;
  c = color(red,g,b);
  hx = "#" + hex(red,2) + hex(g,2) + hex(b,2);
  button.style('background-color', c);
  button.style('border-color', c);
  fill(0);
  rect(0, 0, 180, 150); // cover up controls
  fill(255);
  textSize(20);
  text("Angle: " + angleSlider.value(), 30, 30);
  text("Scale: " + scaleSlider.value(), 50, 110);

  if (play) {
    input.position(-20, -135);
    text("N: " + n, 55, 140);
  } else {
    text("N:", 55, 140);
    input.position(80, 123);
  }

  if (play) {
    fill(n % 256, 255, 255); // can change n to a;
    noStroke(); // comment out for different effect
    ellipse(x, y, 4, 4); // 8, 8
    n++;
  } else {
    n = input.value();
  }

  rect(26, 60, 120, 5);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
