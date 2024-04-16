let a = 0;
let b = 1;
for (let i = 1; i <= 20; i++) {
    let c = a + b;
    a = b;
    b = c;
    document.write(c + "</br>");
}
