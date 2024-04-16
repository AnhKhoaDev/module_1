let temperature = +prompt("Mời bạn nhập nhiệt độ: ");
do{
    if (temperature > 100){
        alert("Bạn cần giảm nhiệt độ");
    }else if (temperature < 20){
        alert("Bạn cần tăng nhiệt độ");
    }else
        alert("Nhiệt độ trong vùng an toàn");
}while(temperature > 100 || temperature < 20)