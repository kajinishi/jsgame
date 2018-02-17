
function setup(){
  createCanvas(windowWidth,windowHeight);
  stroke(0);
  background(200);
  var img=loadImage("../img/私財.png");
  image(img,10,10);
}
function touchMoved(){
  line(touchX,touchY,ptouchX,ptouchY);
  return false;
}
function mouseDragged(){
  line(mouseX,mouseY,pmouseX,pmouseY);
}