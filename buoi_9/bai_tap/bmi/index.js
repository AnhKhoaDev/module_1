let weight = +prompt("Nhập cân nặng: ");
let height = +prompt("Nhập chiều cao: ");
let bmi = weight / (height * height);

if(bmi < 18.5){
    document.write("UnderWeight")
}else if(bmi >= 18.5 && bmi < 25){
    document.write("Normal")
}else if(bmi >= 25 && bmi < 30){
    document.write("Overweight");
}else
    document.write("Obese")