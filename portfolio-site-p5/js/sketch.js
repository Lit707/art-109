
/*function setup() {
    createCanvas(400, 400, WEBGL)
    angleMode(DEGREES)
}

function draw() {
    background(30)

    rotateX(60)

    noFill()
    stroke(255)

    for (var i = 0; i < 50; i++) {

        var r = map(sin(frameCount / 2), -1, 1, 100, 255)
        var g = map(i, 0, 50, 100, 255)
        var b = map(cos(frameCount), -1, 1, 255, 100)
        stroke(r, g, b)

        rotate(frameCount / 20)

        beginShape()
        for (var j = 0; j < 360; j += 60) {
            var rad = i * 3
            var x = rad * cos (j)
            var y = rad * sin (j)
            var z = sin(frameCount * 2 + i * 5) * 50

            vertex (x, y, z)
        }
        endShape(CLOSE)
    }

}*/


/*let canvas; 
let xPos = 0;
let yPos = 0;
let easing = .01;*/

/*function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  canvas.position(0, 0);
  //canvas.style("z-index", -2);
  //background(125);
}*/

/*function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}*/

/*function draw() {
    background(220);
    for (let i=0; i<6; i++){
        strokeWeight(0);
        fill(255*(i/5));
        ellipse(width/2, height/2, 300-(i*50), 300-(i*50));
    }
    
}*/

/*function drawThing(_x, _y) {
    strokeWeight(0);
    fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y, 30, 30);
}*/

/*function draw(){
    clear();

    xPos = xPos + ((mouseX - xPos) * easing);
    yPos = yPos + ((mouseY - yPos) * easing);

    drawThing(xPos, yPos);
}

function drawThing(_x, _y) {
    // draw eyeballs
    fill(255);
    ellipse(_x, _y, 30, 30);
    ellipse(_x - 20, _y + 5, 30, 30);

    // draw pupils
    fill(0);
    ellipse(_x + 10, _y, 5, 5);
    ellipse(_x - 10, _y + 5, 5, 5);
}*/

let n;
let offset = 0;
let x1; let y1;
let x2; let y2;
let x3; let y3;
let x4; let y4;

function setup(){
    createCanvas (800, 800);
}

function draw() {
    //background(220);
    strokeWeight(0.5);
    noFill(0);
    x1 = noise (offset+5)*width;
    x2 = noise (offset+10)*width;
    x3 = noise (offset+15)*width;
    x4 = noise (offset+20)*width;
    y1 = noise (offset+25)*height;
    y2 = noise (offset+30)*height;
    y3 = noise (offset+35)*height;
    y4 = noise (offset+40)*height;
    offset += 0.01;

    bezier(x1, y1, x2, y2, x3, y3, x4, y4);
}