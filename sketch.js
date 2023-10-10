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
//   for(let i=0;i<20000;i++) {
//     let x = floor(random(sourceImg.width));
//     let y = floor(random(sourceImg.height));
//     let pix = sourceImg.get(x, y);
//     let mask = maskImg.get(x, y);

//     let gray_col = 69 + pix[1] / 8;
//     stroke(gray_col);
//     strokeWeight(10);

//     if(mask[0] > 128) {
//       line(x-50, y, x+50, y);
//       // let pointSize = 50;
//       // ellipse(x, y, pointSize, pointSize);
//     }
//     else {
//       fill(pix);
//       let pointSize = 1;
//       rect(x, y, pointSize, pointSize);    
//     }
//   }
  
//   renderCounter = renderCounter + 1;
//   if(renderCounter > 10) {
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

///---

// //warping
// let sourceImg=null;
// let maskImg=null;

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
//   colorMode(HSB);
// }

// let X_STOP = 1920;
// let Y_STOP = 1080;
// // let X_STOP = 1920;
// // let Y_STOP = 1080;
// let OFFSET = 20;

// let renderCounter=0;
// function draw () {
//   angleMode(DEGREES);
//   let num_lines_to_draw = 40;
//   // get one scanline
//   for(let j=renderCounter; j<renderCounter+num_lines_to_draw && j<Y_STOP; j++) {
//     for(let i=0; i<X_STOP; i++) {
//       colorMode(RGB);
//       let mask = maskImg.get(i, j);
//       if (mask[1] < 128) {
//         pix = sourceImg.get(i, j);

//       }
//       else {
//         let wave = sin(j*8);
//         let slip = map(wave, -1, 1, -OFFSET, OFFSET);
//         pix = sourceImg.get(i+slip, j);
        

//         // let brt = map(wave, -1, 1, 0, 255);
//         // for(let c=0; c<3; c++) {
//         //   pix[c] = brt;
//         // }
//       }

//       set(i, j, pix);
//     }
//   }
//   renderCounter = renderCounter + num_lines_to_draw;
//   updatePixels();

//   // print(renderCounter);
//   if(renderCounter > Y_STOP) {
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

//---

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
  let j = renderCounter;
    let x = floor(random(sourceImg.width));
    let y = floor(random(sourceImg.height));
    let pix_1 = sourceImg.get(x, y);
    let mask_1 = maskImg.get(x, y);
  // get one scanline
  for(let i=0; i<1920; i++) {
    let pix = sourceImg.get(i, j);
    let mask = maskImg.get(i, j);
    if(mask[0] > 128) {
      // draw a "dimmed" version in gray
      stroke(pix_1);
      strokeWeight(5);
      line(x-50, y, x+50, y);
      let gray_color = 64 + pix[1] / 8;
      set(i, j, gray_color);
    }
    else {
      // draw the full pixels
      set(i, j, pix);
    }
  }
  updatePixels();
  renderCounter = renderCounter + 1;
  print(renderCounter);
  if(renderCounter > 1080) {
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