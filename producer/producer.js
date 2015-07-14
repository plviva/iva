'use strict';

var expression = require('./lib/expressions.js');
var net = require('net');

var PORT = 1234;

var client = net.connect({port: PORT}, function() {
    console.log('connected to consumer');

    console.log('sending random data...');


    setInterval(function(){
        var exp = expression.generateRandomExp();
        client.write(exp);
    }, 100);
});


client.on('data', function(data) {
    // there could be multiple results sent, so we split them
    if(data && data.length > 0) {

        // it's a buffer, we make it a string
        data = data.toString();

        var results = data.split(';');
        results.forEach(function(r){
            if(r && r.length > 0) {
                console.log(r);
            }
        });
    }
});

