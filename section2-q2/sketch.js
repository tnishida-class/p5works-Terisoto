// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  fill(128);
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      fill(i % 2 == 0 ? 255 : 128);
      fill(j % 2 == 0 ? 128 : 255);
      console.log(i, j);
      rect(size * i, size * j, size, size);
      rect(size, size, size * i, size * j)// BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    }
  }
}
