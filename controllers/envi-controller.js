const imageProcessing = require('../services/clairifai-helper');
const Envi = require('../models/envi');
const Clarifai = require('clarifai');


const appC = new Clarifai.App({
 apiKey: process.env.API_Key
});


const enviController = {};


enviController.show = (req, res) => {
  Envi.findById(req.params.id)
    .then(envi => {
      console.log (envi); 
      res.render('envi/envi-single', {
        envi: envi,
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
}



enviController.indexRecent = (req, res) => {
  Envi.findAll()
    .then(envi => {
        console.log (envi)
             res.render('envi/envi-currentWords', {
        data: envi,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json({ err });
    });
};


enviController.index = (req, res) => {
  Envi.findAll()
    .then(envis => {
   res.render('envi/envi-index', {
        message: 'ok',
        data: envis,
      });
    }).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
};

enviController.captureImage=(req,res, next)=>{
// console.log("hello", req.body);     
// res.send(req.body)
res.locals.imageInBase64=req.body.imagedata;
next()
// console.log()
};

/*


enviController.sendImage=(req,res)=>{
appC.models.predict(Clarifai.GENERAL_MODEL, 
//req.body.imagedata
//req.body
res.locals.imageInBase64
//imageProcessing.convertTo_base64(`./public/flower.JPG`)
) 
      
.then(response => {
//res.locals.array=response.outputs[0].data.concepts;

let array=response.outputs[0].data.concepts;

for (word of array){
console.log (word.name)
}
    /*res.render('index', 
      
      {
        data:response.outputs[0].data.concepts,
      }
      
    );

      Envi.create(
    {
    keyOne: response.outputs[0].data.concepts[0].name,
    keyTwo:response.outputs[0].data.concepts[1].name,
    keyThree:response.outputs[0].data.concepts[2].name,
    keyFour: response.outputs[0].data.concepts[3].name
  })
    }).
    then( () => {
    res.redirect('/envi');


  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
};
*/


enviController.captureImage=(req,res, next)=>{
// console.log("hello", req.body);     
// res.send(req.body)
res.locals.imageInBase64=req.body.imagedata;
next()
// console.log()
};




enviController.sendImage=(req,res, next)=>{
appC.models.predict(Clarifai.GENERAL_MODEL, 
//req.body.imagedata
//req.body
res.locals.imageInBase64
//imageProcessing.convertTo_base64(`./public/flower.JPG`)
) 
      
.then(response => {
//res.locals.array=response.outputs[0].data.concepts;

let array=response.outputs[0].data.concepts;


for (word of array){
console.log (word.name)
}
    /*res.render('index', 
      
      {
        data:response.outputs[0].data.concepts,
      }
      
    );*/

      Envi.create(
    {
    keyOne: response.outputs[0].data.concepts[0].name,
    keyTwo:response.outputs[0].data.concepts[1].name,
    keyThree:response.outputs[0].data.concepts[2].name,
    keyFour: response.outputs[0].data.concepts[4].name,
    keyFive: response.outputs[0].data.concepts[5].name,
    keySix: response.outputs[0].data.concepts[6].name,
    keySeven: response.outputs[0].data.concepts[7].name,
    keyEight: response.outputs[0].data.concepts[8].name,
    keyNine: response.outputs[0].data.concepts[9].name,
    keyTen: response.outputs[0].data.concepts[10].name,
    keyEle: response.outputs[0].data.concepts[11].name,
    keyTwelve: response.outputs[0].data.concepts[12].name
                         
  })



// res.redirect('/envi/current');      
 

})
    
    /*
  .then(response => {

        console.log("see below");
         console.log(res.locals.response[0]);
      res.render('envi/envi-currentWords', {
        envi: {
    keyone: res.locals.response[0].name,
    keytwo:res.locals.response[1].name,
    keythree:res.locals.response[2].name,
    keyfour: res.locals.response[3].name
  }
      })  
    })*/


next(); 

//   .catch(err => {
//     console.log(err);
//     res.status(500).json(err);
//   });





};



enviController.delete = (req, res) => {
    console.log(req.params.id+ "in delete--------------------------");
   Envi.destroy(req.params.id)
    .then(() => {
      res.redirect('/envi/all');   
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}


enviController.edit = (req, res) => {
  Envi.findById(req.params.id)
    .then(envi => {
        console.log("see below");
        console.log(envi); 
      res.render('envi/envi-edit', {
        data: envi,
      })
    }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}

enviController.update = (req, res) => {
console.log (req.params.id + "params" + "--------------------------------------------");
console.log (req.body.id + "body" + "--------------------------------------------");

  Envi.update({
    keyone: req.body.keyone,
    keytwo:req.body.keytwo,
    keythree:req.body.keythree,
    keyfour: req.body.keyfour,
    keyfive: req.body.keyfive,
    keysix:req.body.keysix,
    keyseven:req.body.keyseven,
    keyeight: req.body.keyeight,
    keynine: req.body.keynine,
    keyten:req.body.keyten,
    keyele:req.body.keyele,
    keytwelve: req.body.keytwelve,
    

    user_id: req.body.id,
  }, req.params.id).then(envi=> {
     res.redirect('/envi/all');   
  }).catch(err => {
    console.log(err);
    res.status(500).json({ err });
  });
}
//


module.exports = enviController;
