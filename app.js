//1.
function addition(num1, num2) {
    return num1 + num2
}

console.log(addition(3, 5))

//2. 
function hoursIntoSeconds(hour) {
    return hour * 60 * 60
}

console.log(hoursIntoSeconds(2))

//3.
function calcPerimeter(length, width) {
    return 2 * length + 2 * width;
}

console.log(calcPerimeter(10, 20))

//4.
function calcAreaOfTriangle(base, height) {
    return 0.5 * base * height;
}

console.log(calcAreaOfTriangle(20, 20))

//5.
function appendFrontend(string) {
    return string + 'Frontend'
}

console.log(appendFrontend('Apple'))

//6.
function sumGreaterThan100(num1, num2) {
    return num1 + num2 > 100
}

console.log(sumGreaterThan100(50, 52))

//7.
function lessThanOrEqualToZero(num) {
    return num <= 0
}

console.log(lessThanOrEqualToZero(0))

//8.
function oppositeBoolean(bool) {
    return !bool;
}

console.log(oppositeBoolean(false))

//9.
function isNotZero(num) {
    return num !== 0
}

console.log(isNotZero(5))

//10. 
function calcRemainder(num1, num2) {
    return num1 % num2
}

console.log(calcRemainder(4, 2))

//11.
function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(1))

//12.
function booleanInteger(num) {
  return num % 2 == 0 ? 1 : -1
}

console.log(booleanInteger(2))

//13. 
function isLoggedInAndSubscribed(loggedIn, subscribed) {
   return (loggedIn === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')
    }

console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'))