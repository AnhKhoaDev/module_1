function addition() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a + b;
    let result = document.getElementById("result").innerHTML = c;
}

function subtraction() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a - b;
    let result = document.getElementById("result").innerHTML = c;
}

function multiplication() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a * b;
    let result = document.getElementById("result").innerHTML = c;
}

function division() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    let c = a / b;
    let result = document.getElementById("result").innerHTML = c;
}