// Declaring the variables
let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";
let decimalClicked = false;
let valMemStored = "";

function numButPress(num) {
    if (resultVal) {
        newVal = num;
        resultVal = "";
    } else {
        if (num === ".") {
            if (decimalClicked != true) {
                newVal += num;
                decimalClicked = true;
            }
        } else {
            newVal += num;
        }
    }
    document.querySelector("#entry").value = newVal;
}

function mathButPress(operator) {
    if (!resultVal) {
        prevVal = newVal;
    } else {
        prevVal = resultVal;
    }
    newVal = "";
    decimalClicked = false;
    mathOperator = operator;
    resultVal = "";
    document.querySelector("#entry").value = "";
}

function equalButPress(num) {
    decimalClicked = false;
    prevVal = parseFloat(prevVal);
    newVal = parseFloat(newVal);

    switch (mathOperator) {
        case "+":
            resultVal = prevVal + newVal;
            break;

        case "-":
            resultVal = prevVal - newVal;
            break;

        case "*":
            resultVal = prevVal * newVal;
            break;

        case "/":
            resultVal = prevVal / newVal;
            break;

        default:
            resultVal = newVal;
    }

    prevVal = resultVal;
    document.querySelector("#entry").value = resultVal;
}
