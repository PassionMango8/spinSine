

function setup() {
  createCanvas(windowWidth, windowHeight)
  
  angleMode(DEGREES)
  rectMode(CENTER)
}


function draw() {
  background("black")
  noFill()

  
  translate(width/2, height/2)
//translates the rect to the centre
  for (var i = 0; i < 200; i++) {
    push()
     
    rotate(sin(frameCount + i) * 100)  //change that end feature and the i feature
    
    var r = map(sin(frameCount), -1, 1, 50, 255)
    var g = map(cos(frameCount / 2), -1, 1, 50, 255)
    var b = map(sin(frameCount / 4), -1, 1, 50, 255)
    
    
    colorMode(HSB)
    stroke(r,g,b)
    
    rect(0,0, 600 - i * 3, 600 - i * 3,200-i ) //change the end feature
  
    pop()
   //in order to create the animation, we need more squares , making a for loop
  //for every loop, the width and height should be decreased
  //we will also do this to the last argument
  }
      
  
}
