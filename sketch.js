let sourceImg=null;
let maskImg=null;
let renderCounter=0;

// change these three lines as appropiate
let sourceFile = "input_1.jpg";
let maskFile   = "mask_1.png";
let outputFile = "output_1.png";

function preload() {
  sourceImg = loadImage(sourceFile);
  maskImg = loadImage(maskFile);
}

function setup () {
  let main_canvas = createCanvas(1920, 1080);
  main_canvas.parent('canvasContainer');

  imageMode(CENTER);
  noStroke();
  background(0, 0, 0);
  sourceImg.loadPixels();
  maskImg.loadPixels();
}

function draw () {
  for(let i=0;i<25000;i++) {
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix = sourceImg.get(x, y);
    let mask = maskImg.get(x, y);


    let gray_col = 0 + pix[1];
    stroke(gray_col);
    fill(gray_col)
    strokeWeight(1);

    if(mask[0] > 128) {
      line(x-10, y, x+10, y);
      let pointSize = 3;
      rect(x, y, pointSize, pointSize);
    }
    else {

      stroke(pix)
      strokeWeight(2);
      fill(gray_col)
      let pointSize = 3;
      rect(x, y, pointSize, pointSize);
      // line(x, y-5, x, y+5);


    }
  }
  

  renderCounter = renderCounter + 1;
  if(renderCounter > 100) {
    console.log("Done!")
    noLoop();
    // uncomment this to save the result
    // saveArtworkImage(outputFile);
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
}

//---

// let sourceImg=null;
// let maskImg=null;
// let renderCounter=0;

// // change these three lines as appropiate
// let sourceFile = "input_1.jpg";
// let maskFile   = "mask_1.png";
// let outputFile = "output_1.png";

// function preload() {
//   sourceImg = loadImage(sourceFile);
//   maskImg = loadImage(maskFile);
// }

// function setup () {
//   let main_canvas = createCanvas(1920, 1080);
//   main_canvas.parent('canvasContainer');

//   imageMode(CENTER);
//   noStroke();
//   background(0, 0, 0);
//   sourceImg.loadPixels();
//   maskImg.loadPixels();
// }

// function draw () {
//   let j = renderCounter;
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix_1 = sourceImg.get(x, y);
//     let mask_1 = maskImg.get(x, y);
//   // get one scanline
//   for(let i=0; i<1920; i++) {
//     let pix = sourceImg.get(i, j);
//     let mask = maskImg.get(i, j);
//     if(mask[0] > 128) {
//       // draw a "dimmed" version in gray
//       stroke(pix_1);
//       strokeWeight(5);
//       line(x-50, y, x+50, y);
//       let gray_color = 64 + pix[1] / 8;
//       set(i, j, gray_color);
//     }
//     else {
//       // draw the full pixels
//       set(i, j, pix);
//     }
//   }
//   updatePixels();
//   renderCounter = renderCounter + 1;
//   print(renderCounter);
//   if(renderCounter > 1080) {
//     console.log("Done!")
//     noLoop();
//     // uncomment this to save the result
//     // saveArtworkImage(outputFile);
//   }
// }

// function keyTyped() {
//   if (key == '!') {
//     saveBlocksImages();
//   }
// }