function doubleNumber(num) {
    return num * 2;
}
function squareNumber(num) {
    return num * num;
}
function isEven(num) {
    return num % 2 === 0;
}
function isAdult(age) {
    return age >= 18;
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
function capitalizeString(str) {
    return `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
}
export { doubleNumber, squareNumber, isEven, isAdult, reverseString, capitalizeString, };
console.log(isEven(5));
console.log(isEven(4));
console.log(isAdult(20));
console.log(isAdult(18));
console.log(isAdult(17));
console.log(reverseString('hoge'));
console.log(reverseString('fUga'));
console.log(capitalizeString('hello'));
console.log(capitalizeString('Apple'));
