// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    //1. convert number to string.
    //2. split string into substrings
    //3. reverse the substrings order
    //4. join the substrings to one string

    let reverse = n.toString().split("").reverse().join("");
    // return parseInt(reversed) * Math.sign(n);
    if (n < 0) {
        return parseInt(reverse) * -1;
    } else {
        return parseInt(reverse);
    }
}

console.log((reverseInt(51)));
console.log((reverseInt(189)));
console.log((reverseInt(500)));
console.log((reverseInt(-15)));
console.log((reverseInt(-90)));