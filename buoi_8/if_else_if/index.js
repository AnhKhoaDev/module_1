let name = prompt('What is your name:');
if(name === 'Admin'){
    let password = prompt("Insert your password");
    if(password === 'TheMaster'){
        alert("Welcome");
    }else if(password === null){
        alert("Canceled");
    }else
        alert("Wrong Password");
}else if(name === null){
    alert("canceled");
}else
    alert("I don't know you");