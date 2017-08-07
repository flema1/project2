const express = require('express');
const enviRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
//const enviController = require('../controllers/envi-controller');
/*
//
const bodyParser = require('body-parser');
enviRoutes.use(express.static('public'));
//imageProcessing.convertTo_base64(`./public/flower.JPG`))

var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
var fs = require('fs');
var upload = multer({
  dest: path.join(__dirname, '../uploads')
});

console.log (path.join(__dirname, '../uploads')); 


//
let pathToImage = path.join(__dirname, '../uploads');
fs.readFile(pathToImage, function(err, original_data){
   if(err){
       return;
   }
   else{
       // this variable contains the correctly encoded image. Just use it as it is in the Clarifai API
       var base64Image = original_data.toString('base64');
       console.log(base64Image);
   }
});
//
*/

//

//const imageProcessing = require('../services/clairifai-helper');
 
const enviController = require('../controllers/envi-controller');


enviRoutes.get('/captureImage',authHelpers.loginRequired, (req, res) => {
  res.render('envis-inputFromCam');
});

enviRoutes.get('/mostRecent',authHelpers.loginRequired,enviController.indexRecent, function(){//route for index shows stored words from image
  res.render('envi-currentWords');
});
 

 enviRoutes.get('/all',authHelpers.loginRequired,enviController.index/*, function(){//route for index shows stored words from image
//   console.log ("it works")
// }*/);
//enviRoutes.get('/processImage',enviController.sendImage);
//enviRoutes.post('/analyzeImage',enviController.captureImage,enviController.sendImage); ///transferImage Route
enviRoutes.get('/add', (req, res) => {
  res.render('envis-inputFromCam');
});

enviRoutes.post('/transferImage',authHelpers.loginRequired,enviController.captureImage,enviController.sendImage, function(req, res){//route for index shows stored words from image
  res.redirect('mostRecent');
}); ///transferImage Route

//enviRoutes.get('/test',enviController.captureImage); ///transferImage Route

enviRoutes.get('/showall',authHelpers.loginRequired, (req, res) => {
  console.log ("  render                           render");
  res.render('/index');
//  res.render('auth/login');
});


//ß



enviRoutes.get('/images', function (req, res) {
upload.single('one');
 }); 

 enviRoutes.post('/image', function (req, res, next) {
  upload.single('train')
  console.log (req.file); 
  console.log(image)

  // req.body will hold the text fields, if there were any
})

//



function upLoad(req, res) {
  upload.single('file'); 
  console.log ("------***-------")
  if (req.file) {
    console.dir(req.file);
    return res.end('Thank you for the file');
  }
  res.end('Missing file');
}


enviRoutes.post('/upload',upLoad, function(){
  console.log ("image uploaded"); 
});

//

enviRoutes.get('/:id', authHelpers.loginRequired, enviController.show);
enviRoutes.delete('/:id', authHelpers.loginRequired, enviController.delete);

enviRoutes.get('/:id/edit', authHelpers.loginRequired,enviController.edit);
enviRoutes.put('/:id', authHelpers.loginRequired, enviController.update);


 module.exports = enviRoutes;