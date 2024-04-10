let year =  parseInt(prompt('Nhập năm'));
let a = year % 4;
let b = year % 100;
let c = year % 400;

if (a == 0  && b != 0){
    document.write('Đây là năm nhuận');
}else if (b == 0 && c != 0){
    document.write('Đây là năm không nhuận nhuận');
}else if (b == 0 && c == 0){
    document.write('Đây là năm nhuận')
}else
    document.write('Đây là năm không nhuận')
