const express = require('express');
const enviRoutes = express.Router();
const authHelpers = require('../services/auth/auth-helpers');
const enviController = require('../controllers/envi-controller');

 enviRoutes.get('/all',authHelpers.loginRequired,  enviController.index);
enviRoutes.post('/',authHelpers.loginRequired, enviController.create); 
enviRoutes.get('/add',authHelpers.loginRequired, (req, res) => {
  // console.log ("  render                           render");
  res.render('envi/envi-index');
 //res.render('auth/login');
});
enviRoutes.get('/:id', enviController.show);
enviRoutes.get('/:id/edit',authHelpers.loginRequired,  enviController.edit);
enviRoutes.put('/:id',authHelpers.loginRequired, enviController.update);
enviRoutes.delete('/:id',authHelpers.loginRequired, enviController.delete);

module.exports = enviRoutes;