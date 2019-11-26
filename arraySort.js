var evenNumbers= new Array();
var oddNumbers=new Array();
var characters = new Array();

let props ={
evens:evenNumbers,
odds: oddNumbers,
chars: characters,
}
function arraySort(a, b) {
    return b - a
    //return a<b?1 : a>b?-1 : 0
}

var x = [1, 4, 7, "x", 3, 5, 8, "t", 0, 6, 10, "a"];
x.sort(arraySort)
x.reverse()
var i = 0
while (i < x.length) {
    if (isNaN(x[i])) {
        characters.push(x[i]);
    }
    if (x[i] % 2 == 0) {
        evenNumbers.push(x[i]);
    }
    if (x[i] % 2 == 1) {
        oddNumbers.push(x[i]);
    }
    i++;
}
console.log(props)