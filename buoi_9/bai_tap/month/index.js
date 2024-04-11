function showMessage(){
    let month = +document.getElementById('month').value;
    switch(month){
        case 1:
            let day = document.getElementById('day').innerHTML="Tháng 1 có 31 ngày";
            break;
        case 2:
            let day1 = document.getElementById('day').innerHTML="Tháng 20 có 28 hoặc 29 ngày";
            break;
        case 3:
            let day2 = document.getElementById('day').innerHTML="Tháng 3 có 31 ngày";
            break;
        case 4:
            let day3 = document.getElementById('day').innerHTML="Tháng 4 có 30 ngày";
            break;
        case 5:
            let day4 = document.getElementById('day').innerHTML="Tháng 5 có 31 ngày";
            break;
        case 6:
            let day5 = document.getElementById('day').innerHTML="Tháng 6 có 30 ngày";
            break;
        case 7:
            let day6 = document.getElementById('day').innerHTML="Tháng 7 có 31 ngày";
            break;
        case 8:
            let day7 = document.getElementById('day').innerHTML="Tháng 8 có 31 ngày";
            break;
        case 9:
            let day8 = document.getElementById('day').innerHTML="Tháng 9 có 30 ngày";
            break;
        case 10:
            let day9 = document.getElementById('day').innerHTML="Tháng 10 có 31 ngày";
            break;
        case 11:
            let day10 = document.getElementById('day').innerHTML="Tháng 6 có 30 ngày";
            break;
        case 12:
            let day11 = document.getElementById('day').innerHTML="Tháng 12 có 31 ngày";
            break;
        default:
            let day12 = document.getElementById('day').innerHTML="Bạn đã nhập sai tháng. Mời nhập lại!";

    }
}