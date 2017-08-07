
var fs = require('fs');
// Require the client
const Clarifai = require('clarifai');

///********** */
/* Function to encode file data to base64 encoded string
   scource= https://stackoverflow.com/questions/28834835/readfile-in-base64-nodejs
*/

const appC = new Clarifai.App({
 apiKey: 'd5f69a98ec0344328ed6f76ae455d825'
});

const imageProcessing = {};

imageProcessing.convertTo_base64=function(fileName){
      var bitmap = fs.readFileSync(fileName);
      return new Buffer(bitmap).toString('base64');
}; 


module.exports = imageProcessing;