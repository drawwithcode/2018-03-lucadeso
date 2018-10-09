function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  pixelDensity(0.5);
  blendMode(OVERLAY);
}

function draw() {
  // translate(mouseX, mouseY);

  scale(-500,-500);
  var xoff = 0;

  loadPixels();
  for (var x = 0; x < width; x++) {
    var yoff = 0;
    for (var y = 0; y < height; y++) {
      var index = (x + y * width) * 4;
      var r = noise(xoff, yoff) * (mouseX/3+mouseY/5);
      if (mouseX>750) {
      pixels[index] = mouseY/100+r/2;
      pixels[index+1] = r/20+mouseX/200;
      pixels[index+2] = r+mouseY/20;
      pixels[index+3] = r+(mouseX+mouseY)/3;
    } else {
      pixels[index] = mouseY/10+r/2;
      pixels[index+1] = r/2+mouseY/20;
      pixels[index+2] = cos(mouseX/200);
      pixels[index+3] = r;
    }


      yoff += tan(0.05);
    }
    xoff += 0.01;


  }
  updatePixels();
  // noLoop();

}
