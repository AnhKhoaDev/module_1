function yesClick(){
    alert("Anh cũng yêu em!");
}

function noHover(){
    let x = Math.round(Math.random() * window.innerWidth);
    let y = Math.round(Math.random() * window.innerHeight);
    document.getElementById("btnNo").style.left = x + 'px';
    document.getElementById("btnNo").style.top = y + 'px';
}