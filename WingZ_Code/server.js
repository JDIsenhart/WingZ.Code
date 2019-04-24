const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/html/signin_page.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/login',function(req,res){
  res.sendFile(path.join(__dirname+'/html/signin_page.html'));
});

app.get('/registration',function(req,res){
  res.sendFile(path.join(__dirname+'/html/registration.html'));
});

app.get('/home',function(req,res){
  res.sendFile(path.join(__dirname+'/html/birdfeed.html'));
});

app.get('/report',function(req,res){
  res.sendFile(path.join(__dirname+'/html/BirdReporting.html'));
});

app.get('/facts', function(req,res){
	res.sendFile(path.join(__dirname+'/html/birdFacts.html'));
});

//add the router
//app.use('/', router);
app.listen(process.env.PORT);
