let leftNumber = "";
let rightNumber = "";
let operator = "";
let result = "";

function checkWhere(number) {
    if( operator === "" ) {
        leftNumber += number.toString();
    } else {
        rightNumber += number.toString();
    }
    document.getElementById("outDiv").innerText = leftNumber + " " + operator + " " + rightNumber;
}

function buttonNum(number) {
    checkWhere(number);
}

function buttonAdd() {
    operator = "+";
}

function buttonSub() {
    operator = "-";
}

function buttonMul() {
    operator = "*";
}

function buttonDiv() {
    operator = "/";
}

function buttonEqu() {
    let res = eval(leftNumber + operator + rightNumber);
    switch(operator) {
        case "+":
            result = (Number(leftNumber) + Number(rightNumber)).toString();
            break;
        case "-":
            result = (Number(leftNumber) - Number(rightNumber)).toString();
            break;
        case "*":
            result = (Number(leftNumber) * Number(rightNumber)).toString();
            break;
        case "/":
            result = (Number(leftNumber) / Number(rightNumber)).toString();
            break;
    }
    document.getElementById("outDiv").innerText = leftNumber + " " + operator
     + " " + rightNumber + " = " + result;
}

function buttonEqu() {
    try {
        let res = eval(leftNumber);
    } catch(ex) {
        console.log(ex.message);
        leftNumber = leftNumber.replaceAll('A','');
    }
    let a = typeof leftNumber;
    console.log(a);
    console.log(a instanceof Number);
    try {
        let res = eval(rightNumber);
    } catch(ex) {
        console.log(ex.message);
        rightNumber = rightNumber.replaceAll('A','');
    }
    switch(operator) {
        case "+":
            result = (Number(leftNumber) + Number(rightNumber)).toString();
            break;
        case "-":
            result = (Number(leftNumber) - Number(rightNumber)).toString();
            break;
        case "*":
            result = (Number(leftNumber) * Number(rightNumber)).toString();
            break;
        case "/":
            result = (Number(leftNumber) / Number(rightNumber)).toString();
            break;
    }
    document.getElementById("outDiv").innerText = leftNumber + " " + operator
        + " " + rightNumber + " = " + result;
}

function buttonCE() {
    leftNumber = "";
    rightNumber = "";
    operator = "";
    result = "0";
    document.getElementById("outDiv").innerText = result;
}



