var n = 0; // could add slider to control n value as well
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
  angleSlider = createSlider(0, 360, 137.5, .1); // 137.3 for other pattern
  angleSlider.position(20,40);
  scaleSlider = createSlider(0, 15, 4, .1);
  scaleSlider.position(20, 70);
  button = createButton("Play/Pause");
  button.mousePressed(playSwitch);
  button.position(window.innerWidth / 2 - 60, 10);
}

function playSwitch() {
  if (play) {
    play = false;
  } else {
    play = true;
  }
}

function draw() {
  // clear(); background(0);  // creates cool pattern 


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
  fill(0);
  rect(50, 5, 120, 40);
  rect(60, 45, 90, 70);
  fill(255);
  textSize(20); 
  text("Angle: " + angleSlider.value(), 30, 30);
  text("Scale: " + scaleSlider.value(), 50, 110);

  if (play) {
    fill(n % 256, 255, 255); // can change n to a;
    noStroke(); // comment out for different effect
    ellipse(x, y, 4, 4); // 8, 8
    rect(26, 60, 120, 10);
    n++;
  }

  rect(26, 60, 120, 10);
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
