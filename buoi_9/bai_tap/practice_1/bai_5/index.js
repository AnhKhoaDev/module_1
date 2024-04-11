let diem = +prompt("Nhập điểm thi của học sinh: ");
if(diem >= 8){
    document.write("Học sinh xếp học lực giỏi");
}else if(diem >= 6.5 && diem < 8){
    document.write("Học sinh xếp học lực khá");
}else if(diem >= 5 && diem < 6.5){
    document.write("Học sinh xếp học lực trung bình");
}else if(diem >=3 && diem < 5){
    document.write("Học sinh xếp học lực yếu");
}else
    document.write("Học sinh xếp học lực kém");