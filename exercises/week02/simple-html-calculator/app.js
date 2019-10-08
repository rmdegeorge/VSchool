const equals = document.getElementById("equals");
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide"); 
const negative = document.getElementById("negative");
const sqrt = document.getElementById("sqrt");
const modulus = document.getElementById("modulus");
const mrc = document.getElementById("mrc");
const mMinus = document.getElementById("m-minus");
const mPlus = document.getElementById("m-plus");

const clear = document.getElementById("clear");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const display = document.getElementById("display");

let numberArray1 = [];
let numberArray2 = [];
let number1 = 0;
let number2 = 0;
let operatorPressed = false;
let operator = "";
let result = null;
let storedNumber = null;

oneFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(1);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(1);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
twoFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(2);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(2);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }  
};
threeFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(3);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(3);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
fourFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(4);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(4);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
fiveFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(5);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(5);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
sixFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(6);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(6);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
sevenFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(7);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(7);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
eightFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(8);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(8);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
nineFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(9);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(9);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
zeroFunc  = () => {
    if (operatorPressed === false) {
        numberArray1.push(0);
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(0);
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
decimalFunc = () => {
    if (operatorPressed === false) {
        numberArray1.push(".");
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.push(".");
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};
negativeFunc = () => {
    if (operatorPressed === false) {
        numberArray1.unshift("-");
        display.textContent = numberArray1.join("");
        console.log(numberArray1);
    } else {
        numberArray2.unshift("-");
        display.textContent = numberArray2.join("");
        console.log(numberArray2);
    }
};

sqrtFunc = () => {
    number1 = Number(numberArray1.join(""));
    result = Math.sqrt(number1);
    console.log(number1);
    display.textContent = result;
    numberArray1 = [];
    numberArray2 = [];
    operatorPressed = false;
};
modulusFunc = () => {
    display.textContent = "%";
    operator = "%"
    operatorPressed = true;
};
// mrcFunc = () => {
//     if (storedNumber == null) {
//         storedNumber = display.textContent;
//         display.textContent = storedNumber;
//         console.log(`storedNumber= ${storedNumber}`);
//     } else {
//         display.textContent = storedNumber;
//         console.log(`storedNumber= ${storedNumber}`);
//     }
// };
// mMinusFunc = () => {
//     if (storedNumber == null) {
//         storedNumber = display.textContent;
//         display.textContent = storedNumber;
//         console.log(`storedNumber= ${storedNumber}`);
//     } else {
//         storedNumber += displayContent;
//         display.textContent = storedNumber;
//         console.log(`storedNumber= ${storedNumber}`);
//     }
// };
// mPlusFunc = () => {
//     if (storedNumber == null) {
//         storedNumber = display.textContent;
//         display.textContent = storedNumber;
//         numberArray1 = [];
//         numberArray2 = [];
//         console.log(`storedNumber= ${storedNumber}`);
//     } else {
//         storedNumber -= displayContent;
//         display.textContent = storedNumber;
//         console.log(`storedNumber= ${storedNumber}`);
//     }
// };
clearFunc = () => {
    display.textContent = "WELCOME!";
    numberArray1 = [];
    numberArray2 = [];
    number1 = 0;
    number2 = 0;
    operator = "";
    operatorPressed = false;
    storedNumber = null;
    console.log(numberArray1);
    console.log(numberArray2);
};
addFunc = () => {
    display.textContent = "+";
    operator = "+"
    operatorPressed = true;
};
subtractFunc = () => {
    display.textContent = "-";
    operator = "-"
    operatorPressed = true;
};
multiplyFunc = () => {
    display.textContent = "x";
    operator = "*"
    operatorPressed = true;
};
divideFunc = () => {
    display.textContent = "/";
    operator = "/"
    operatorPressed = true;
};
equalsFunc = () => {
    number1 = Number(numberArray1.join(""));
    console.log(number1);
    number2 = Number(numberArray2.join(""));
    console.log(number2);
    if (operator === "+") {
        //add
        result = number1 + number2;
    } else if (operator === "-") {
        //subtract
        result = number1 - number2;
    } else if (operator === "*") {
        //multiply
        result = number1 * number2;
    } else if (operator === "/") {
        //divide
        result = number1 / number2;
    } else if (operator === "%") {
        //modulus
        result = number1 % number2;
    } else {
        return;
    }
    display.textContent = result
    numberArray1 = [];
    numberArray2 = [];
    operatorPressed = false;
};
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

clear.addEventListener("click", (event) => {
    event.preventDefault();
    clearFunc();
});
one.addEventListener("click", (event) => {
    event.preventDefault();
    oneFunc();
});
two.addEventListener("click", (event) => {
    event.preventDefault();
    twoFunc();
});
three.addEventListener("click", (event) => {
    event.preventDefault();
    threeFunc();
});
four.addEventListener("click", (event) => {
    event.preventDefault();
    fourFunc();
});
five.addEventListener("click", (event) => {
    event.preventDefault();
    fiveFunc();
});
six.addEventListener("click", (event) => {
    event.preventDefault();
    sixFunc();
});
seven.addEventListener("click", (event) => {
    event.preventDefault();
    sevenFunc();
});
eight.addEventListener("click", (event) => {
    event.preventDefault();
    eightFunc();
});
nine.addEventListener("click", (event) => {
    event.preventDefault();
    nineFunc();
});
zero.addEventListener("click", (event) => {
    event.preventDefault();
    zeroFunc();
});
decimal.addEventListener("click", (event) => {
    event.preventDefault();
    decimalFunc();
});
add.addEventListener("click", (event) => {
    event.preventDefault();
    addFunc();
});
subtract.addEventListener("click", (event) => {
    event.preventDefault();
    subtractFunc();
});
multiply.addEventListener("click", (event) => {
    event.preventDefault();
    multiplyFunc();
});
divide.addEventListener("click", (event) => {
    event.preventDefault();
    divideFunc();
});
equals.addEventListener("click", (event) => {
    event.preventDefault();
    equalsFunc();
});
negative.addEventListener("click", (event) => {
    event.preventDefault();
    negativeFunc();
});
sqrt.addEventListener("click", (event) => {
    event.preventDefault();
    sqrtFunc();
});
modulus.addEventListener("click", (event) => {
    event.preventDefault();
    modulusFunc();
});
// mrc.addEventListener("click", (event) => {
//     event.preventDefault();
//     mrcFunc();
// });
// mMinus.addEventListener("click", (event) => {
//     event.preventDefault();
//     mMinusFunc();
// });
// mPlus.addEventListener("click", (event) => {
//     event.preventDefault();
//     mPlusFunc();
// });