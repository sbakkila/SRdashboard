'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');

var app = module.exports = loopback();
var fs = require('fs');
var busboy = require('connect-busboy');
var path = require('path');
const bodyParser = require('body-parser');
const WatsonService = require('./WatsonService');

app.start = function() {
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
};

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module){
    app.start();
  }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// var onlySocket;
// app.io && app.io.on('connection', function(socket) {
//   console.log('callback fired')
//   onlySocket = socket
// });

app.use(busboy());

var filenames = [];
var dronePositions = [];

app.post('/fileupload', function(req, res) {
    var fstream;
    console.log('req busboy: ', req.busboy)
    console.log('req body: ', req.body)

    if(req.busboy){
      req.pipe(req.busboy);
      req.busboy.on('file', function (fieldname, file, filename) {
          fstream = fs.createWriteStream(path.resolve('./client/'+ filename));
          file.pipe(fstream);
          fstream.on('close', function () {
            filenames.push(filename)
            res.sendStatus(201)
          });
          var fileNameArray = filename.split('_');
          var droneID = filename.split('-')[1];

          var xPosition = fileNameArray[1];
          var yPosition = fileNameArray[2];

          var alreadyThere = false;
          for(var i = 0; i < dronePositions.length; i++){
            if(dronePositions[i][droneID]){
              dronePositions[i][droneID] = [xPosition, yPosition]
              alreadyThere = true;
            }
          }

          if(!alreadyThere){
            var newDrone = {}
            newDrone[droneID] = [xPosition, yPosition]
            dronePositions.push(newDrone)
          }
          console.log('dronePositions', dronePositions)
      });
    } else {
      console.log('File could not be created!')
    }
});

app.get('/dronePositions', function(req, res){
  res.send(dronePositions);
})

app.get('/photos', function(req, res){
  res.send(filenames);
})
