/*************************
 * *********Function******
 * **********************/

//What is Javascript Function ?
//Answer: Function is A Block of Code.

//----------------------function Declaration: -----------------


function sendMessage(msg){
    console.log(msg);
}
sendMessage('Rehan')

// Function: This is a Function Keyword
// sendMessage: This is a Function Name
// (msg): This is a Function Parameter
// console.log(msg): This is a Function Statement
// sendMessage("Rehan"): This is a Function Aurgoments

//----------------------Return Method Function Example --------

function sum (x,y){
    const result = x + y;
    return result
}
const total = sum(20,25);
console.log("Total Sum Is:", total)
// document.write("Total Sum Is:", total)

// Output : Total Sum Is: 45


//---------------------- Normal Method ------------------------

function multiply (number1, number2){
    const sum = number1 * number2
    console.log("Total Multiplication is:", sum)
}
multiply(20,30)

//Output is: 600

//----------------------Difference between Father and child age 

function difference(number1, number2){
    const differ = number1 - number2;
    console.log(`${number1} - ${number2} = ${differ}`)
}
const fatherAge = 60;
const childAge = 25;
const result = difference(fatherAge, childAge)

//Output: 60 - 25 = 35

//----------------------Shortcut USE Function -----------------
function sum(number1 , number2){
    return number1 + number2
}
const totalSum = sum(30, 50)
console.log('Total sum is:', totalSum)

//Output: Total sum is: 80

//----------------------Function Using Math -------------------

function math(number1, number2){
    const sum = number1 + number2;
    const substrac = number1 - number2;
    const multiply = sum * substrac;
    const result = multiply / 2;

    return result
}
const outputResult = math(50, 40);
console.log("Math Result is:", outputResult)

//Output: Math Result is: 450

//----------------------Conditional Function ------------------
//Check Even Number:

function isEven(number){
    if(number % 2 == 0){
        console.log('is This Number is Even ?')
        return true
    } else {
        console.log("this number is odd ")
        return false
    }
    
}
const checkEven = isEven(50);
console.log(checkEven)

//Output: True

//----------------------Shortcut Conditional Function ---------
function isOdd(number){
    if(number % 2 !==0){
        return true;
    }
    return false
}
const oddNumber = isOdd(15);
console.log(oddNumber,)

//Output: True
//----------------------Print Length Of String using Function -
function stringLength(str){
    const size = str.length;
    console.log(`string is ${str} and Size is ${size}`)
}
stringLength("Dhaka")

//Output: string is "Dhaka" and Size = 5  

//----------------------Even Or Odd Number Checking -----------

function EvenOrOdd(str){
    const size = str.length;
    console.log(str, size);

    if(size % 2 === 0){
        console.log("Even Number")
        return true
    } else{
        return false
    }

}
const answer = EvenOrOdd("Rehan khan")
console.log("Answer is:", answer)

//Output: Answer is: true

//----------------------Boolean Condition Using Function ------

function doubleOrTriple(number, double){
    if(double === true){
        const result = number * 2
        return result
    } else{
        const result = number * 3
        return result
    }
}
const multiple = doubleOrTriple(20 , true)
console.log('Result is:', multiple)

//Output: Result is: 40

//---------------------- --------------------------------------
//---------------------- --------------------------------------
//---------------------- --------------------------------------





