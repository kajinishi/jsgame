
function setup(){
  createCanvas(windowWidth,windowHeight);
  stroke(0);
  background(200);
  var mineimg=loadImage("../image/私財.png");
  var taximg=loadImage("../image/税金.png");
  image(mineimg,10,10);
  image(taximg,110,110);
  text("公共財ゲーム",windowWidth/2,windowHeight/2);
}
function touchMoved(){
  line(touchX,touchY,ptouchX,ptouchY);
  return false;
}
function mouseDragged(){
  line(mouseX,mouseY,pmouseX,pmouseY);
}