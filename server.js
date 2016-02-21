var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var port = 8080;


/* Cargando modelo de usuario */
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

var User = require('./models/user');

var router = express.Router();

router.use(function(req, res, next){
  console.log('Middleware: Petición realizada. (Algo ha pasado)');
  next();
});

// Test route on '/'

router.get('/', function(req, res){
  res.json({message: 'It\'s working. Now keep coding!'});
});


// Rutas de la API:

router.route('/users')
  .post(function(req,res){
    var user = new User();
    user.name = req.body.name;

    console.log("Nombre del usuario nuevo: "+user.name);

    user.save(function(err){
      if(err)
        res.send(err);

      res.json({ message: 'Usuario creado!'});
    });
  })

  .get(function(req,res){
    User.find(function(err, users){
      if(err)
        res.send(err);

      res.json(users);
    });
  });



/* Todas las rutas van a tener el prefijo /api */
app.use('/api', router);

app.listen(port);
console.log('Listening on port: '+port);
