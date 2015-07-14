var exp = require('../lib/expressions.js');

var OPERATIONS = /(\d+)([+\-\*\/])(\d+)=/;
var reOperations = new RegExp(OPERATIONS);

exports.testEvaluateExpression = function(test){
    test.ok(reOperations.exec(exp.generateRandomExp()), 'expression generated is correct');
    test.equal(reOperations.exec('1+1a'), null, 'expressions generated is not ok');
    test.done();
};

