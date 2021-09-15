var robot = require("robotjs");
var keypress = require("keypress");
const cannyEdgeDetector = require('canny-edge-detector');
const Image = require('image-js').Image;


// ################### vars ####################
var loadedimage;



keypress(process.stdin);
process.stdin.on("keypress", function (ch, key) {
      // console.log('got "keypress"', key);

      if (key && key.ctrl && key.name == "c") {
            process.stdin.pause();
      }



      if (key && key.name == "l") {
            // ##############  load image file ######################
            Image.load('image.jpg').then((img) => {
                  loadedimage = img.grey();
                  console.log(`Image loaded in BW > Width=${loadedimage.width} Height=${loadedimage.height} Length=${loadedimage.data.length}`);
            })
      }


      if (key && key.name == "s") {
            // ##############  start scanning and plotting ######################


            console.log("Done");
            //   return invt.save('edge.png');
            process.stdin.pause();
      }
});

process.stdin.setRawMode(true);
process.stdin.resume();




//   const edge = cannyEdgeDetector(grey);
//   const invt = edge.invert();
