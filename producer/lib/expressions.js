
exports.generateRandomExp = function() {

    var first = parseInt((Math.random() * 100), 10);
    var second = parseInt((Math.random() * 100), 10);

    // the operation, random between 1 to 4 for +,-,*,/
    var op = 1;//parseInt((Math.random() * (4 - 1 + 1)), 10) + 1;

    var expression;

    switch(op) {
        case 1:
        expression = first.toString() + '+' + second.toString();
        break;

        case 2:
        expression = first.toString() + '-' + second.toString();
        break;

        case 3:
        expression = first.toString() + '*' + second.toString();
        break;

        case 4:
        expression = first.toString() + '/' + second.toString();
        break;            
    }

    return expression + '=';
}