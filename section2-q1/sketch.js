// 小手調べ
function setup(){
  createCanvas(1000,1000);
  noFill();
  stroke(0, 0, 255);
  for(let i = 0; i < 10; i++){
    let x = i * 5 + 5;
    ellipse(100,100,x,x);
if(i >= 4){
  stroke(255, 0, 0);
  strokeWeight(1)
}
else if(0 <= i <= 3){

  strokeWeight(1)
}// BLANK[1]
}
}
