var http = require('http');
var  fs = require('fs');
var path = require('path');
var  index_file_path = '/index.html';
var  drone = require('./drone.js');
var  opn = require('opn');
var  express = require('express');
var  temp = {};
const port = 80;
const server = express();


var data_reading = false;
var router = express.Router();

router.get('', function(req, res, next) {
	res.sendFile(__dirname + index_file_path);
});

router.get('/data', function(req, res, next) {

        if (!data_reading) {
            drone.startReadingData();
            data_reading = true;
        }
		
        temp = drone.getData();
        res.write(JSON.stringify(temp));
        res.end();
		
});

server.use(express.static(path.join(__dirname, 'public')));
server.use(router);

var startServer = function () {

    server.listen(port, (err) => {
        if (err) {
            return console.log("Something bad has happened", err);
        }
		drone.checkPriority();
        console.log("Server is listening on " + port);
        opn('http://localhost');
    });
}
module.exports.startServer = startServer;
