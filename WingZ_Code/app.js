const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/login.html'));
  //__dirname : It will resolve to your project folder.
});

router.get('/registration',function(req,res){
  res.sendFile(path.join(__dirname+'/html/registration.html'));
});

router.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/html/birdfeed.html'));
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');