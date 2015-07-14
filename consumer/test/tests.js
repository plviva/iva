var exp = require('../lib/expressions.js');

exports.testEvaluateAddition = function(test){
    test.equals(exp.evaluateExpression('5+1'), '5+1=6');
    test.done();
};

exports.testEvaluateSubstraction = function(test){
    test.equals(exp.evaluateExpression('5-1'), '5-1=4');
    test.done();
};

exports.testEvaluateMultiplication = function(test){
    test.equals(exp.evaluateExpression('5*2'), '5*2=10');
    test.done();
};

exports.testEvaluateDivision = function(test){
    test.equals(exp.evaluateExpression('15/3'), '15/3=5.0');
    test.done();
};