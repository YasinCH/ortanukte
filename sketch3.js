let sketch3 = function(p) {
    p.setup = function() {
        p.pixelDensity(1);
        p.createCanvas(50, 50);
        p.background(50);
    };

    p.draw = function() {
        p.background(50);
        p.line(p.mouseX, p.mouseY, p.width / 2, p.height / 2);
    };
};

new p5(sketch3, 'canvas3');
