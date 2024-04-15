// Vòng lặp for
let sout;
sout = "<table border = '1'; width = '300'; cellspacing = '0'; cellpadding = '3'";

for (i = 1; i <= 10; i++){
    sout += '<tr>';
    for (j = 1; j <= 10; j++){
        sout = sout + '<td>' + i * j + '</td>';
    }
    sout += '</tr>';
}
sout += '</table>';
document.write(sout);

// Vòng lặp while
let sout_1;
let i;
let j;
sout_1 = "<table border = '1'; width = '300'; cellspacing = '0'; cellpadding = '3'";
i = j = 1;
while(i <= 10){
    sout_1 += '<tr>';
    while(j <= 10){
        sout_1 = sout_1 + '<td>' + i * j + '</td>';
        j++;
    }
    sout_1 += '</tr>';
    j = 1;
    i++;
}