function convertCurrency() {
    let amount = parseInt(document.getElementById('amount').value);
    let a = document.getElementById('from_currency').value;
    let b = document.getElementById('to_currency').value;

    if (a == 'usd' && b == 'vnd') {
        let result = amount * 23000;
        alert('Result: ' + result +'$')
    }else if (a == 'vnd' && b == 'usd') {
        let result1 = amount / 23000;
        alert('Result: ' + result1 +'VND')
    }else if (a == 'vnd' && b == 'vnd') {
        let result2 = amount;
        alert('Result: ' + result2 +'VND')
    }else {
        let result3 = amount;
        alert('Result: ' + result3 +'$')
    }
}