let doanh_so = +prompt('Doanh số bán hàng của nhân viên là: ');
if(doanh_so < 10000000) {
    let hoa_hong = doanh_so * 0.2;
    document.write("Hoa hồng của nhân viên là: " + hoa_hong);
}else if (doanh_so >= 10000000 && doanh_so < 20000000) {
    let hoa_hong = doanh_so * 0.3;
    document.write("Hoa hồng của nhân viên là: " + hoa_hong);
}else{
    let hoa_hong = doanh_so * 0.5;
    document.write("Hoa hồng của nhân viên là: " + hoa_hong);
}

