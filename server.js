var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

var router = express.Router();


/* Cargando modelo de usuario */
var User = require('./models/user');

if(User){
  console.log("Modelo de usuario cargado correctamente.");
}


/* Creación previa de la base de datos, o uso por defecto de 'test' */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', function(err){
  if(err){
    throw err;
  } else {
    console.log("Connectado correctamente a la base de datos.");
  }
});

// Test route on /

router.get('/', function(req, res){
  res.json({message: 'It\'s working. Now keep coding!'});
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port: '+port);
