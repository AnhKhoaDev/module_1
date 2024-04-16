let a = 0;
let b = 1;
let c;
while (true) {
    c = a + b;
    if (c % 5 === 0){
        document.write(c);
        break;
    }
    a = b;
    b = c;
}