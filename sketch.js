var n = 0;
var c = 4; // scaling factor (how much the radius is changing) (2)
var angle = 137.5; // can change angle 137.3

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES); // comment out for different effect
  colorMode(HSB);
  background(0); 
}

function draw() {
  var a = n * angle;
  var r = c * sqrt(n);
  var x = r * cos(a) + width / 2 ;
  var y = r * sin(a) + height / 2;
  fill(n % 256, 255, 255); // can change n to a;
  noStroke(); // comment out for different effect
  ellipse(x, y, 4, 4); // 8, 8
  n++;
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}