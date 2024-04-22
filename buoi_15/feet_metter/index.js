function feetToMeter(feet){
    let meter = 0.305 * feet;
    return meter;
}

function meterToFeet(meter){
    let feet = 3.279 * meter;
    return feet;
}

let feet = +prompt("Nhập feet: ");
document.write(feet + " Feet = " + feetToMeter(feet) + " meter" + "</br>");
let meter = +prompt("Nhập meter: ");
document.write(meter + " Meter = " + meterToFeet(meter) + " feet");