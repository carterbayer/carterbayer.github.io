console.log("hello world!");

//simple function, no parameters
function hello() {
    console.log("Hi Rami!");
}

//function with one parameter
function hello2(name) {
    console.log("Hi " + name);
}

hello();
hello2("Akilesh");
hello2("Jack");

function annoyingGreet(name) {
    hello2(name);
}

function annoyingGreet(name, numTimes) {

    let counter = 0;

    while (counter < numTimes) {
        hello2(name);
        counter++;
    }
}
annoyingGreet("Carter", 100);

//Question 3

function sumOfNumbers(num1, num2) {
    let result = num1 + num2;
    return result;
}

console.log(sumOfNumbers(4, 5));

//Question 4
function square(numero) {
    let result3 = numero * numero;
    return result3;
}

console.log(square(4))

//Question 5
function sumOfSquares(numero1, numero2) {
    let result4 = sumOfNumbers(square(numero1), square(numero2));
    return result4;
}
console.log(sumOfSquares(2, 4));

//Question 6
function calculateHypotenuse(_numero3, _numero4) {
    let result5 = Math.sqrt(sumOfSquares(_numero3, _numero4));
    return result5;
}
console.log(calculateHypotenuse(3, 4));