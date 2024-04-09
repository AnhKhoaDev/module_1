let numberInput = document.getElementById("number");

let btn = document.getElementById("btn");
btn.addEventListener("click", clickFunction);

function clickFunction() {
    let number = numberInput.value;
    let f = ((number * 9) / 5) + 32;
    alert(f);
}
