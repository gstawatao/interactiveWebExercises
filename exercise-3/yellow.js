let x = 0;
let y = 0;
let xpos;
let ypos;

let mode = 1;

let done = document.getElementById('done');


function setup() {
    // make the div called "mySketch" a p5.js canvas element
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent('mySketch');


  }
  
  function draw() {

    removeElements();
    //lets manipulate the DOM and make our cat move with the arrow keys
    //create an image element in html
    let banana = createImg("images/banana.png");
    //select size of image
    banana.size(180,200);
     // give it an id
     banana.id('banana');

    //set the position
    //create arithmatic for x and y position. this lets us read out the position
    xpos = width/2-200+x;
    ypos = height/2-200+y;

  
    //position the banana based on the arrow keys
    banana.position(xpos, ypos);


//controls using arrow keys
    if (keyIsPressed){
      if(keyCode == UP_ARROW){

        //minus 5 in the y direction means up
        y-=5;
        
      } 
      
      if(keyCode == RIGHT_ARROW) {

        //plus 5 in the x direction means right
        x+=5;
      }

      if(keyCode == DOWN_ARROW) {

        //plus 5 in the y direction means down
        y+=5;
      }

      if(keyCode == LEFT_ARROW) {

        //minus 5 in the x direction means left
        x-=5;
      }

      if ((xpos>800 && xpos<1100) && (ypos>600 && ypos<900)){
        window.location.href = "split.html";
    }
      }

     
    console.log("cat is at: " + xpos + ", " + ypos);
  }

  
  function windowResized() {
    // resize the canvas when the screen is resized.
    resizeCanvas(windowWidth, windowHeight);
}