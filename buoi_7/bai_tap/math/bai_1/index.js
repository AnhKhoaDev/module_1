let physics = parseInt(prompt('Nhập điểm Lý: '));
let chemistry = parseInt(prompt('Nhập điểm Hóa: '));
let biology = parseInt(prompt('Nhập điểm Sinh:'));

let result = (physics + chemistry + biology) /3;
let sum = physics + chemistry + biology;

document.write('Điểm trung bình là: ' + result);
document.write('<br>');
document.write('Tổng điểm là: ' + sum);