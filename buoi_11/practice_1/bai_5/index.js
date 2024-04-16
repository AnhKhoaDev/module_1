let count = 1;
let a = 0;
let b = 1;
let c;
for (let i = 1; i < 20; i++) {
    c = a + b;
    count += c;
    a = b;
    b = c;
}
document.write(count);