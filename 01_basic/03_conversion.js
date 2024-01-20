let score = "33"

console.log(typeof score);
console.log(typeof(score));


let valueInNumber = Number(score)

console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" -> 33
// "33dfd" -> NaN
// true -> 1 false -> 0
// "true" -> NaN

let isLoggedIn = 1

let booleanValue = Boolean(isLoggedIn)

console.log(typeof booleanValue);

console.log(booleanValue);


// 0, null, undefined, NaN, "" -> false
// 1, -1, "hello", "false" -> true


let someNumber = 10

let stringNumber = String(someNumber)

console.log(typeof stringNumber);
console.log(stringNumber);
