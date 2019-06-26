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
        }
    }
}
