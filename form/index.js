
function calc() {
    let num1 = parseFloat(document.getElementById("input1").value);
    let num2 = parseFloat(document.getElementById("input2").value);
    let oper = document.getElementById("operators").value;

    if (oper === 'Add'){
        document.getElementById("answer").value = num1 + num2;

    }
    else if (oper === 'Subtract'){
        document.getElementById("answer").value = num1 - num2;

    }
    else if (oper === 'Divide'){
        document.getElementById("answer").value = num1 / num2;

    }
    else if (oper === 'Multiply'){
        document.getElementById("answer").value = num1 * num2;

    }
    else if (oper === 'Remainder'){
        document.getElementById("answer").value = num1 % num2 ;
    }
    else if (oper === 'Exponentiate'){
        document.getElementById("answer").value = num1 ** num2 ;
    }
    
}