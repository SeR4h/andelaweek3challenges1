function arraySort(myArray) {
    var evenNumbers = new Array();
    var oddNumbers = new Array();
    var characters = new Array();

    let numbers = {
        evens: evenNumbers,
        odds: oddNumbers,
        chars: characters,
    }

    if (!Array.isArray(myArray)) {
        throw new Error('invalid input')
    }
    else {
        for (var i = 0; i < myArray.length; i++) {
            // (Number.isNaN()) returns an empty chars object
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
    return numbers
}
module.exports = arraySort;
