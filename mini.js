const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const addButtons = document.getElementById("add");
const subtractButtons = document.getElementById("subtract");
const multiplyButtons = document.getElementById("multiply");
const divideButtons = document.getElementById("divide");

addButtons.addEventListener("click",performAddition);
subtractButtons.addEventListener("click",performSubtraction);
multiplyButtons.addEventListener("click",performMultiplication);
divideButtons.addEventListener("click",performDivision);
 
function performAddition () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat (num2Input.value);
    let result = num1 + num2;
    displayResult(result);
}

function performSubtraction () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat (num2Input.value);
    let result = num1 - num2;
    displayResult(result);
}

function performMultiplication () {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat (num2Input.value);
    let result = num1 * num2;
    displayResult(result);
}

function performDivision() {
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat (num2Input.value);
    let result = num1 + num2;
    if (num2 !== 0){
        result = num1/num2;
        displayResult(result);
    } 
    displayResult("1"); 
}

function displayResult(result) {
    alert (`Result: ${result}`)

}