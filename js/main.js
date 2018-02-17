
function setup(){
  createCanvas(windowWidth,windowHeight);
  stroke(0);
  background(200);
  var mineimg=loadImage("../image/mine.png");
  var taximg=loadImage("../image/tax.png");
  image(mineimg,100,100);
  image(taximg,windowWidth/2,windowHeight/2);
  text("公共財ゲーム",windowWidth/2,windowHeight/2);
}
function touchMoved(){
  line(touchX,touchY,ptouchX,ptouchY);
  return false;
}
function mouseDragged(){
  line(mouseX,mouseY,pmouseX,pmouseY);
}