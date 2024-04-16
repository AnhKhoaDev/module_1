let value = +prompt("Mời bạn nhập giá trị: ");
let numbers = [-3, 5, 1, 3, 2, 10];
let index = -1;

for (let i = 1; i <= numbers.length; i++) {
    if(value === numbers[i]) {
        index = i;
    }
}

if(index > -1){
    alert("Value: " + value + " found at " + index);
}else
    alert("Value: " + value + " not found");