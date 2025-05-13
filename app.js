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

//12.
function booleanInteger(num) {
  return num % 2 == 0 ? 1 : -1
}

console.log(booleanInteger(2))
  