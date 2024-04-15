let number = +prompt(" Nhập số: ");
let count = 0;
let n = 0;
for (let i = 2; i < 1000; i++) {
    if( n < number){
        for (let j = 1; j <= i; j++) {
            if(i % j == 0){
                count += 1;
            }
        }
        if( count == 2 ){
            document.write(i + "</br>");
            n += 1;
        }
        count = 0;
    }
    else
        break;
}