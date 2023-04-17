let apple, grapes, banana;

function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');

    //as long as you add the class "dragme" to the image, it should work.

    apple = createImg('images/apple.png')
    apple.position(700, 300);
    apple.class('dragme')
    apple.size(500, 500)

    grapes = createImg('images/grapes.png')
    grapes.position(700, 300);
    grapes.class('dragme')
    grapes.size(500,300)

    banana = createImg('images/banana.png')
    banana.position(700, 300);
    banana.class('dragme')
    banana.size(600,475)

  }
  
  function draw() {
    background(0);

  }
  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}
