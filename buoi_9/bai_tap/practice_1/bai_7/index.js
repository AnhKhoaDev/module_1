let min = + prompt("Nhập số phút đã gọi: ");
const price = 25000;
if(min <= 50){
    let total = price + ((50 - min)*600);
    document.write("Tổng cước phí phải trả là: " + total);
}else if (min >50 && min <= 150){
    let total = price + ((150 - min) * 400 + (600 * 50));
    document.write("Tổng cước phí phải trả là: " + total);
}else{
    let total = price + (min -200) * 200 + (150 * 400) + (600 * 50);
    document.write("Tổng cước phí phải trả là: " + total);
}
