let sketch2 = function(p) {
    p.setup = function() {
        p.pixelDensity(1);
        p.createCanvas(400, 400);
        p.background(100);
    };

    p.draw = function() {
        p.background(100);
        p.rect(p.mouseX, p.mouseY, 50, 50);
    };
};

new p5(sketch2, 'canvas2');
