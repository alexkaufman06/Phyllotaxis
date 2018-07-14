var n = 0;
// var c = 4; // scaling factor (how much the radius is changing) (2)
var angleSlider;
var scaleSlider;
var seeds = [];

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  angleMode(DEGREES); // comment out for different effect
  colorMode(HSB);
  background(0);
  angleSlider = createSlider(0, 360, 137.5, .1); // 137.3 for other pattern
  angleSlider.position(20,40);
  scaleSlider = createSlider(0, 15, 4, .1);
  scaleSlider.position(20, 70);
}

function draw() {
  // clear(); background(0);  // creates cool pattern 
  angle = angleSlider.value();
  var a = n * angle;
  var r = scaleSlider.value() * sqrt(n);
  var x = r * cos(a) + width / 2 ;
  var y = r * sin(a) + height / 2;
  fill(n % 256, 255, 255); // can change n to a;
  noStroke(); // comment out for different effect
  ellipse(x, y, 4, 4); // 8, 8
  rect(26, 60, 120, 10);
  fill(0);
  rect(50, 5, 120, 40);
  fill(255);
  textSize(20);
  text("Angle: " + angle, 30, 30);
  n++;
}

function windowResized() {
  resizeCanvas(window.innerWidth, window.innerHeight);
}
