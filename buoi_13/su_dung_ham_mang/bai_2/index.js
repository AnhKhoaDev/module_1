let number = +prompt("Mời nhập giá trị");
let str = number.toString();
let result = [str[0]];

for (let i = 0; i < str.length; i++){
    if(str[i - 1] % 2 === 0 && str[i] % 2 === 0){
        result.push('-', str[i]);
    }else
        result.push(str[i]);
}

console.log(result.join(''))
