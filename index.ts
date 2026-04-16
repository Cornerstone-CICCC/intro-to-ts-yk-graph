function doubleNumber(num: number): number {
  return num * 2
}

function squareNumber(num: number): number {
  return num * num
}

function isEven(num: number): boolean {
  return num % 2 === 0
}

function isAdult(age: number): boolean {
  return age >= 18
}

function reverseString(str: string): string {
  return str.split('').reverse().join('')
}

function capitalizeString(str: string): string {
  return `${str.charAt(0).toUpperCase()}${str.slice(1)}`
}

export {
  doubleNumber,
  squareNumber,
  isEven,
  isAdult,
  reverseString,
  capitalizeString,
}

console.log(isEven(5))
console.log(isEven(4))
console.log(isAdult(20))
console.log(isAdult(18))
console.log(isAdult(17))
console.log(reverseString('hoge'))
console.log(reverseString('fUga'))
console.log(capitalizeString('hello'))
console.log(capitalizeString('Apple'))
