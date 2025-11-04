// map
/*const age = [18, 22, 40, 56, 100];
const checkAge = age.map(num => {
    return num > 20;})
console.log(checkAge);


//
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
*/
// filter

// find
const number = [1, 5, 3, 8, 2, 10, 7];
const firstEven = number.find(num => num % 2 === 0);
//console.log(firstEven);

// reduce
const num = [1, 2, 3, 4, 5];
const sum = num.reduce((accumulator, current) => {
    console.log(`accumulator: ${accumulator}, current: ${current}`);
    return accumulator + current;
}, 0);
console.log(sum);