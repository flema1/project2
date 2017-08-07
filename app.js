const express = require('express')
const logger = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');
const app = express()
require('dotenv').config();
app.use(logger('dev'));

// middlewares

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));


//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(session({
  secret: process.env.SECRET_KEY,
  resave: false,
  saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());
// static files
app.use(express.static('public'));

// views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// app.get('/', (req, res) => {
//   res.render('index', {
//     message: "Hi'!"
//   });
// });




//
//

// Install the client from NPM

/*
// Require the client
const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/
const appC = new Clarifai.App({
 apiKey: 'd5f69a98ec0344328ed6f76ae455d825'
});


var array=[];
// predict the contents of an image by passing in a url
appC.models.predict(Clarifai.GENERAL_MODEL,'https://img.purch.com/o/aHR0cDovL3d3dy5idXNpbmVzc25ld3NkYWlseS5jb20vaW1hZ2VzL2kvMDAwLzAwOC8zMzMvaTAyL3NhbnMtc2VyaWYtcmVzdW1lLWZvbnRzLnBuZz8xNDI3MzE1NTI1').then(
  function(response) {
   // console.log(response.outputs[0].data.concepts);
    array=response.outputs[0].data.concepts; 
  
    for (let i of array){
  console.log( i.name);
} 

  },
  function(err) {
    console.error(err);
  }
);
*/
console.log ("bob"); 
console.log (path.join(__dirname, '../public', 'one.jpg'));

var fs = require('fs');
let pathToImage = path.join(__dirname, '../public', 'one.jpg');
 var base64Image; 

fs.readFile('./public/one.JPG', function(err, original_data){
   if(err){
       return;
   }
   else{
     
       // this variable contains the correctly encoded image. Just use it as it is in the Clarifai API
        base64Image = original_data.toString('base64');
       //console.log(base64Image);
       //console.log ("image uploaded"); 
   }
});

//console.log(base64Image);
//


//const imageProcessing = require('./services/clairifai-helper');
//imageProcessing.checkImage('flower'); 

//var base64Img = require('base64-img');
//var data = base64Img.base64Sync('./public/train.JPG');

console.log("see below"); 
//console.log(data); 
// Install the client from NPM


// Require the client
//const Clarifai = require('clarifai');

// initialize with your api key. This will also work in your browser via http://browserify.org/
//const appC = new Clarifai.App({
// apiKey: 'd5f69a98ec0344328ed6f76ae455d825'
//});


///********** */

/* Function to encode file data to base64 encoded string
   scource= https://stackoverflow.com/questions/28834835/readfile-in-base64-nodejs
*/


const Clarifai = require('clarifai');
const appC = new Clarifai.App({
 apiKey: 'd5f69a98ec0344328ed6f76ae455d825'
});

function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}
let img= 'boat'; 
let imageBytes=base64_encode(`./public/${img}.JPG`);
//let imageBytes=base64_encode('test_picture.jpg');
var array=[];
// predict the contents of an image by passing in a url



/*appC.models.predict(Clarifai.GENERAL_MODEL, imageBytes).then(

//appC.models.predict(Clarifai.GENERAL_MODEL,'https://img.purch.com/o/aHR0cDovL3d3dy5idXNpbmVzc25ld3NkYWlseS5jb20vaW1hZ2VzL2kvMDAwLzAwOC8zMzMvaTAyL3NhbnMtc2VyaWYtcmVzdW1lLWZvbnRzLnBuZz8xNDI3MzE1NTI1').then(
  function(response) {
   // console.log(response.outputs[0].data.concepts);
    array=response.outputs[0].data.concepts; 
    for (let i of array){
     console.log( i.name + "   non");
} 
  },
  function(err) {
    console.error(err);
  }
);*/




//

//setting up port & listen 
 const PORT = process.env.PORT || 3002;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT} 00`);
});

/*
// app.get('/todos', (req, res) => {
//   res.send('Info about toDos!');
// });

// //
// var noble = require('noble');
// //app.use (console.log ("hi") ); 

// noble.on('stateChange', function(state) {
//   if (state === 'poweredOn') {
//     console.log ("on "); 
//     // Seek for peripherals broadcasting the heart rate service
//     // This will pick up a Polar H7 and should pick up other ble heart rate bands
//     // Will use whichever the first one discovered is if more than one are in range
//     noble.startScanning();
  
//     //noble.startScanning();
//     //console.log (noble.startScanning()); 
    
//   } else {
//     console.log ("off "); 
//     noble.stopScanning();
//   }
// });

// let boo= function() {
// console.log ( "hi hi");
//   };


// /*
// noble.on('discover', function(peripheral) {
//   if (peripheral. advertisement.localName='vívosmart 3'){
//   let error= "bleh"; 
//    console.log (peripheral.uuid);
//     //noble.connect(peripheral.uuid); 
//   console.log (noble._discoveredPeripheralUUids); 
// noble.onConnect(noble._discoveredPeripheralUUids[0], error);
// //noble.connect(noble._discoveredPeripheralUUids[0]); 
// console.log ( noble._bindings.connect(noble._discoveredPeripheralUUids[0])); 


  
// console.log (noble.onConnect()); 


// noble.stopScanning();
// // console.log (peripheral.uuid);
// // console.log (peripheral.address);
// // console.log (peripheral.addressType);
// // console.log (peripheral.connectable);
// // console.log (peripheral.advertisement);
// // console.log (peripheral.rssi);


// noble.onDiscover(peripheral.uuid, peripheral.address, peripheral.addressType, 
// peripheral.connectable, peripheral.advertisement, peripheral.rssi); 

//   }
// });
// */

  

// noble.on('discover', function(peripheral) {
//   // Once peripheral is discovered, stop scanning
//  //console.log (peripheral);  
// console.log (peripheral); 
// //'vívosmart 3',
//  //console.log (typeof peripheral);  
//  if (peripheral. advertisement.localName='vívosmart 3'){

// //uuid= "a1bd32f5e794424996e6e1be776efcc7"){
//   //console.log(peripheral.uuid);  
//     noble.stopScanning();
//      console.log ( peripheral);  
// console.log ("e"); 
//    console.log(peripheral. advertisement.serviceUuids + "   j");  

// //noble.onConnect(noble._discoveredPeripheralUUids[0], error);
// //console.log (    noble._discoveredPeripheralUUids[0]); 


//  //noble.stopScanning();

//   // connect to the heart rate sensor
//   peripheral.connect(function(error){
// console.log(peripheral. advertisement.localName);  
// console.log (    noble._discoveredPeripheralUUids[0]); 

// console.log ("bob"); 
//  console.log ( peripheral); 
// peripheral.discoverServices(); // any service UUID
//  var serviceUUID = peripheral. advertisement.serviceUuids;
// var serviceUUIDs = [];
// console.log (peripheral. advertisement.serviceData);
// //peripheral.discoverServices(serviceUUID, error, services); // particular UUID's


//     // 180d is the bluetooth service for heart rate:
//     // https://developer.bluetooth.org/gatt/services/Pages/ServiceViewer.aspx?u=org.bluetooth.service.heart_rate.xml
   
     
//     // 2a37 is the characteristic for heart rate measurement
//     // https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml
//     var characteristicUUID = '2a37';

//     //use noble's discoverSomeServicesAndCharacteristics
//     //scoped to the heart rate service and measurement characteristic
//     peripheral.discoverSomeServicesAndCharacteristics(noble._discoveredPeripheralUUids[0], characteristicUUID, function(error, services, characteristics){
//       console.log ("we are in");
//       characteristics[0].notify(true, function(error){
//         characteristics[0].on('data', function(data, isNotification){
          
//           // Upon receiving data, output the BPM
//           // The actual BPM data is stored in the 2nd bit in data (at array index 1)
//           // Thanks Steve Daniel: http://www.raywenderlich.com/52080/introduction-core-bluetooth-building-heart-rate-monitor
//           // Measurement docs here: https://developer.bluetooth.org/gatt/characteristics/Pages/CharacteristicViewer.aspx?u=org.bluetooth.characteristic.heart_rate_measurement.xml
//           console.log('data is: ' + data[1]);
//         });
//       });
//     });
//   });

//  };
// });




//Available in nodejs 
/*  cam
 
var NodeWebcam = require( "node-webcam" );
 
 
//Default options 
 
var opts = {
 
    //Picture related 
 
    width: 1280,
 
    height: 720,
 
    quality: 100,
 
 
    //Delay to take shot 
 
    delay: 0,
 
 
    //Save shots in memory 
 
    saveShots: true,
 
 
    // [jpeg, png] support varies 
    // Webcam.OutputTypes 
 
    output: "jpeg",
 
 
    //Which camera to use 
    //Use Webcam.list() for results 
    //false for default device 
 
    device: false,
 
 
    // [location, buffer, base64] 
    // Webcam.CallbackReturnTypes 
 
    callbackReturn: "location",
 
 
    //Logging 
 
    verbose: false
 
};
 
 
//Creates webcam instance 
 
var Webcam = NodeWebcam.create( opts );
 
 
//Will automatically append location output type 
 
//Webcam.capture( "test_picture", function( err, data ) {} );
 
 
//Also available for quick use 
 
//NodeWebcam.capture( "test_picture", opts, function( err, data ) {});
 
 
//Get list of cameras 
 
Webcam.list( function( list ) {
 
    //Use another device 
 
    var anotherCam = NodeWebcam.create( { device: list[ 0 ] } );
 
});
 
//Return type with base 64 image 
 
var opts = {
    callbackReturn: "base64"
};
 
NodeWebcam.capture( "test_picture", opts, function( err, data ) {
 
    var image = "<img src='" + data + "'>";
});
cam 

*/



//NodeWebcam.version(); 
//




//app.use(express.bodyParser({uploadDir:__dirname}));



const enviRoutes = require('./routes/envi-routes');
app.use('/envi', enviRoutes);
const authRoutes = require('./routes/auth-routes');
app.use('/auth', authRoutes);
const userRoutes = require('./routes/user-routes');
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.render('envi/home');
});
app.get('/index', (req, res) => {
  res.render('index');
});
app.get('/hi', function (req, res) {
  res.send('Hello World!')
})
