// regex for math operations to support addition, 
// substraction, multiplication and division.
var OPERATIONS = /(\d+)([+\-\*\/])(\d+)=/;

// we instantiate a regex globally
var reOperations = new RegExp(OPERATIONS);

exports.evaluateExpression = function(exp) {
    
    var result;

    // we split the equal, we need to re-add it
    var match = reOperations.exec(exp + '=');

    if(match && match instanceof Array && match.length === 4) {
        // good so far
        var firstOp = match[1];
        var operation = match[2];
        var secondOp = match[3];

        try {
        
            switch(operation) {
                case '+':
                    result = exp + '=' + (parseInt(firstOp) + parseInt(secondOp)).toString();
                    break;
                    
                case '-':
                    result = exp + '=' +(parseInt(firstOp) - parseInt(secondOp)).toString();
                    break;
                    
                case '*':
                    result = exp + '=' +(parseInt(firstOp) * parseInt(secondOp)).toString();
                    break;
                    
                case '/':
                    if(parseInt(secondOp) !== 0) {
                        result = exp + '=' +((parseInt(firstOp) / parseInt(secondOp)).toFixed(1)).toString();
                    } else {
                        result = exp + ': cannot divide by zero';
                    }
                    break;
            }

        } catch(e) {
            result = exp + ':' + e;
        }
    } else {
        result = exp + ':' + 'expression invalid';
    }

    return result;

}
