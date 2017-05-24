var express = require('express')
  , http = require('http')
  // , path = require('path');

var bodyParser = require('body-parser')
  , static = require('serve-static');

var multer = require('multer');
var upload = multer({dest: 'upload/'})

var app = express();

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

var router = express.Router();

router.route('/write/memo').post(function(req, res) {
  console.log(1, req.body)
  res.status(200).send('good')
  // res.redirect('http://localhost:3000')
})

app.use('/', router);

const port = '4000';
app.set('port', port);

app.listen(port, function(){
  console.log('port 4000 server connect');
})
