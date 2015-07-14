'use strict';

var expression = require('./lib/expressions.js');
var net = require('net');

var PORT = 1234;

var sessions = {};

var server = net.createServer(function(sock) {

    // where we're gonna store the buffer for this socket
    sessions[sock.remoteAddress + ':' + sock.remotePort] = '';

    // logging to console, for a real app, I would use a logging framework. 
    console.log('producer connected: ' + sock.remoteAddress +':'+ sock.remotePort);
    
    // FIN handler
    sock.on('end', function() {
        // we delete the session
        delete sessions[this.remoteAddress + ':' + this.remotePort];
        console.log('producer disconnected.');
    });

    // for error or close
    sock.on('close', function() {
        // we delete the session
        delete sessions[this.remoteAddress + ':' + this.remotePort];
        console.log('producer disconnected.');
    });
    
    sock.on('timeout', function() {
        // we delete the session
        delete sessions[this.remoteAddress + ':' + this.remotePort];
        sock.close();
    });

    // data handler
    sock.on('data', function(data) {

        // for buffer
        data = data.toString();

        var buffer = sessions[this.remoteAddress + ':' + this.remotePort] || '';
        buffer += data;

        // where we'll store the results
        var results = [];

        // and loop through them
        var acc = '';
        for(var i=0; i<buffer.length; i++){

            if(buffer[i] === '='){
                // we have an expr
                console.log('evaluating ' + acc);
                var result = expression.evaluateExpression(acc);
                results += result + ';';
                acc = '';
            } else {
                acc += buffer[i];
            }
        }

        if(acc != ''){
            // some remains, we store it for next on data event;
            sessions[this.remoteAddress + ':' + this.remotePort] = acc;
            console.log('incomplete packet: ' + acc);
        }

        //we send all the results
        //console.log('sending result' + results);
        sock.write(results);
    });

});


server.listen(PORT, function() {
    console.log('consumer listening on port: ' + PORT.toString());
});