let view = document.getElementById("view");

function inputValue(value){
    view.value += value;
}

function deleteValue(){
    view.value = "";
}

function resultValue(){
    let view = eval(view.value);
    view.value = result;
}