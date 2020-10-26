// 小手調べ
function setup(){
  createCanvas(1000,1000);
  noFill();
  for(let i = 10; i > 0; i--){
    let x = -5 + i * 5;
    ellipse(100,100,x);
if(i > 4){
  stroke(255, 0, 0);
  strokeWeight(2)
}
else {
  stroke(0, 0, 255);
  strokeWeight(2)
}// BLANK[1]
}
}
