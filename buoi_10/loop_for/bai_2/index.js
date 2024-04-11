let number = +prompt("Mời nhập số: ");
let sum = 0;

for(i = 1; i <= number; i++) {
    sum += i;
}
document.getElementById("view").innerHTML = "Tổng = " + sum;