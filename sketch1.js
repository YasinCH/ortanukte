let sketch1 = function(p) {
    let dragging = false; // Is the object being dragged?
    let offsetX, offsetY; // Mouse click offset
  
    // Object properties
    let x = 100;
    let y = 100;
    let r = 50;
  
    p.setup = function() {
      p.pixelDensity(1);
      p.createCanvas(400, 400);
    };
  
    p.draw = function() {
      p.background(220);
      
      // Draw the circle
      p.ellipse(x, y, r * 2);
    };
  
    p.mousePressed = function() {
      // Check if the mouse is over the circle
      let d = p.dist(p.mouseX, p.mouseY, x, y);
      if (d < r) {
        dragging = true;
        // Calculate the offset
        offsetX = x - p.mouseX;
        offsetY = y - p.mouseY;

        disableScroll(); // Disable scrolling when dragging starts
      }
    };
  
    p.mouseDragged = function() {
      if (dragging) {
        // Update the object's position
        x = p.mouseX + offsetX;
        y = p.mouseY + offsetY;
      }
    };
  
    p.mouseReleased = function() {
      // Stop dragging
      dragging = false;

      enableScroll(); // Enable scrolling when dragging stops
    };
};

new p5(sketch1, 'canvas1');

//hello