let dragging = false; // Is the object being dragged?
let offsetX, offsetY; // Mouse click offset

// Object properties
let x = 100;
let y = 100;
let r = 50;

function setup() {
    let canvas = createCanvas(400, 400);
    canvas.parent('canvas0'); // Attach the canvas to the div with ID 'canvas1'

    noStroke();
    fill(255, 0, 0);
  }

function draw() {
  background(240);
  
  // Draw the circle
  ellipse(x, y, r * 2);
}

function mousePressed() {
  // Check if the mouse is over the circle
  let d = dist(mouseX, mouseY, x, y);
  if (d < r) {
    dragging = true;
    // Calculate the offset
    offsetX = x - mouseX;
    offsetY = y - mouseY;
  }
}

function mouseDragged() {
  if (dragging) {
    // Update the object's position
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }
}

function mouseReleased() {
  // Stop dragging
  dragging = false;
}
