var evenNumbers = new Array();
var oddNumbers = new Array();
var characters = new Array();

let numbers = {
    'evens': evenNumbers,
    'odds': oddNumbers,
    'chars': characters,
}

function arraySort(myArray) {

    if (typeof myArray === 'string') {
        return 'invalid input';
    }
    else if (typeof myArray === 'number') {
        return 'invalid input';
    }
    else {
        for (var i = 0; i < myArray.length; i++) {
            if (isNaN(myArray[i])) {
                characters.push(myArray[i]);
            }
            if (myArray[i] % 2 == 0) {
                evenNumbers.push(myArray[i]);
            }
            if (myArray[i] % 2 == 1) {
                oddNumbers.push(myArray[i]);
            }
        }
        evenNumbers.sort((a, b) => a - b);
        oddNumbers.sort((a, b) => a - b);
        characters.sort();
    }
    return numbers;
}
/*var x = [1, 4, 7, 'x', 3, 5, 8, 'a', 0, 6, 10, 't'];
arraySort(x)*/
module.exports = arraySort;
