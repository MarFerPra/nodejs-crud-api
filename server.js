var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = 8080;

var router = express.Router();

// Test route on /

router.get('/', function(req, res){
  res.json({message: 'It\'s working. Now keep coding!'});
});

app.use('/api', router);

app.listen(port);
console.log('Listening on port: '+port);
